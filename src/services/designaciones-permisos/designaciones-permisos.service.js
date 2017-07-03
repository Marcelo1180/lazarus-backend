// Initializes the `designaciones-permisos` service on path `/designaciones-permisos`
const createService = require('feathers-sequelize');
const createModel = require('../../models/designaciones-permisos.model');
const hooks = require('./designaciones-permisos.hooks');
const filters = require('./designaciones-permisos.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'designaciones-permisos',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/designaciones-permisos', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('designaciones-permisos');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
