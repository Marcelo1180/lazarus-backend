// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const designacionesPermisos = sequelizeClient.define('designaciones-permisos', {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fecha_inicio: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fecha_final: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dias: {//Ejemplo Formato: 0|1|2|3|4
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  designacionesPermisos.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return designacionesPermisos;
};
