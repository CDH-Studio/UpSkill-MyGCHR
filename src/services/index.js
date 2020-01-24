const employeeInfoStaging = require("./employee-info-staging/employee-info-staging.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(employeeInfoStaging);
};
