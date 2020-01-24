const Sequelize = require("sequelize");

require("dotenv").config();

module.exports = function(app) {
  // const connectionString = app.get("postgres");
  const connectionString = process.env.STAGING_DATABASE_CONNECTION_STRING;

  // console.log("connectionString:", connectionString);
  const sequelize = new Sequelize(connectionString, {
    dialect: "postgres",
    dialectOptions: {
      supportBigNumbers: true
    },
    logging: false,
    define: {
      freezeTableName: true
    }
  });

  const oldSetup = app.setup;

  app.set("sequelizeClient", sequelize);

  app.setup = function(...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ("associate" in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    app.set("sequelizeSync", sequelize.sync());

    return result;
  };
};
