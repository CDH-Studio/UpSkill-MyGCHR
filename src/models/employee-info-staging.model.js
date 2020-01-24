// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const uuid = require("uuid/v4");

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const employeeInfoStaging = sequelizeClient.define(
    "employeeInfoStaging",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuid()
      },
      PRI: {
        allowNull: false,
        type: DataTypes.BIGINT
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      substantiveEn: {
        type: DataTypes.STRING
      },
      substantiveFr: {
        type: DataTypes.STRING
      },
      substantiveClassificationGroupLevel: {
        type: DataTypes.STRING
      },
      personnelSecurityLevelEn: {
        type: DataTypes.STRING
      },
      personnelSecurityLevelFr: {
        type: DataTypes.STRING
      },
      temporaryRoleEn: {
        type: DataTypes.STRING
      },
      temporaryRoleFr: {
        type: DataTypes.STRING
      },
      actingClassificationLevel: {
        type: DataTypes.STRING
      },
      firstOfficialLanguage: {
        type: DataTypes.STRING
      },
      SLEReadingResult: {
        type: DataTypes.STRING
      },
      SLEWritingResult: {
        type: DataTypes.STRING
      },
      SLEOralResult: {
        type: DataTypes.STRING
      },
      SLEReadingExpiracyDate: {
        type: DataTypes.DATE
      },
      SLEWritingExpiracyDate: {
        type: DataTypes.DATE
      },
      SLEOralExpiracyDate: {
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  employeeInfoStaging.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return employeeInfoStaging;
};
