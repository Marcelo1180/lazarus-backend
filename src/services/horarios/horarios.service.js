// Initializes the `horarios` service on path `/horarios`
const createService = require('feathers-sequelize');
const createModel = require('../../models/horarios.model');
const hooks = require('./horarios.hooks');
const filters = require('./horarios.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'horarios',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/horarios', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('horarios');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
