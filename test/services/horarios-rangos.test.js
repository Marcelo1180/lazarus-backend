const assert = require('assert');
const app = require('../../src/app');

describe('\'horarios-rangos\' service', () => {
  it('registered the service', () => {
    const service = app.service('horarios-rangos');

    assert.ok(service, 'Registered the service');
  });
});
