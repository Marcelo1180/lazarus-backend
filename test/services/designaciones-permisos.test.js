const assert = require('assert');
const app = require('../../src/app');

describe('\'designaciones-permisos\' service', () => {
  it('registered the service', () => {
    const service = app.service('designaciones-permisos');

    assert.ok(service, 'Registered the service');
  });
});
