const horarios = require('./horarios/horarios.service.js');
const horariosRangos = require('./horarios-rangos/horarios-rangos.service.js');
const designacionesHorarios = require('./designaciones-horarios/designaciones-horarios.service.js');
const registrosHorarios = require('./registros-horarios/registros-horarios.service.js');
const designacionesPermisos = require('./designaciones-permisos/designaciones-permisos.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(horarios);
  app.configure(horariosRangos);
  app.configure(designacionesHorarios);
  app.configure(registrosHorarios);
  app.configure(designacionesPermisos);
};
