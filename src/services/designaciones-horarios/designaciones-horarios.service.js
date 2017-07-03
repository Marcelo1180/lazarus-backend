// Initializes the `designaciones-horarios` service on path `/designaciones-horarios`
const createService = require('feathers-sequelize');
const createModel = require('../../models/designaciones-horarios.model');
const hooks = require('./designaciones-horarios.hooks');
const filters = require('./designaciones-horarios.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'designaciones-horarios',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/designaciones-horarios', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('designaciones-horarios');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
