// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const horarios = sequelizeClient.define('horarios', {
    descripcion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tolerancia: {
      type: Sequelize.TIME,
      allowNull: false
    },
    orden: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  horarios.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return horarios;
};
