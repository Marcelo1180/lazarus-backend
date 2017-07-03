// Initializes the `horarios-rangos` service on path `/horarios-rangos`
const createService = require('feathers-sequelize');
const createModel = require('../../models/horarios-rangos.model');
const hooks = require('./horarios-rangos.hooks');
const filters = require('./horarios-rangos.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'horarios-rangos',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/horarios-rangos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('horarios-rangos');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
