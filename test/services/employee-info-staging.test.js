const assert = require('assert');
const app = require('../../src/app');

describe('\'employeeInfoStaging\' service', () => {
  it('registered the service', () => {
    const service = app.service('employee-info-staging');

    assert.ok(service, 'Registered the service');
  });
});
