// Initializes the `registros-horarios` service on path `/registros-horarios`
const createService = require('feathers-sequelize');
const createModel = require('../../models/registros-horarios.model');
const hooks = require('./registros-horarios.hooks');
const filters = require('./registros-horarios.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'registros-horarios',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/registros-horarios', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('registros-horarios');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
