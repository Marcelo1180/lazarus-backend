const assert = require('assert');
const app = require('../../src/app');

describe('\'registros-horarios\' service', () => {
  it('registered the service', () => {
    const service = app.service('registros-horarios');

    assert.ok(service, 'Registered the service');
  });
});
