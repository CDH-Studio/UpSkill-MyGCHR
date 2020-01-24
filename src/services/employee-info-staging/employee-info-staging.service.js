// Initializes the `employeeInfoStaging` service on path `/employee-info-staging`
const { EmployeeInfoStaging } = require('./employee-info-staging.class');
const createModel = require('../../models/employee-info-staging.model');
const hooks = require('./employee-info-staging.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/employee-info-staging', new EmployeeInfoStaging(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('employee-info-staging');

  service.hooks(hooks);
};
