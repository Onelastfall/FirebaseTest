const assert = require('assert');
const app = require('../../src/app');

describe('\'Organizations\' service', () => {
  it('registered the service', () => {
    const service = app.service('organizations');

    assert.ok(service, 'Registered the service');
  });
});
