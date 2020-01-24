const assert = require('assert');
const app = require('../../src/app');

describe('\'dev_stagging_database\' service', () => {
  it('registered the service', () => {
    const service = app.service('dev-stagging-database');

    assert.ok(service, 'Registered the service');
  });
});
