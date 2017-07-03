const assert = require('assert');
const app = require('../../src/app');

describe('\'designaciones-horarios\' service', () => {
  it('registered the service', () => {
    const service = app.service('designaciones-horarios');

    assert.ok(service, 'Registered the service');
  });
});
