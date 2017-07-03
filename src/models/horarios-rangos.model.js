// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const horariosRangos = sequelizeClient.define('horarios-rangos', {
    tolerancia: {
      type: Sequelize.TIME,
      allowNull: false
    },
    hora_entrada: {
      type: Sequelize.TIME,
      allowNull: false
    },
    hora_salida: {
      type: Sequelize.TIME,
      allowNull: false
    },
    rango_entrada_inicio: {
      type: Sequelize.TIME,
      allowNull: false
    },
    rango_entrada_fin: {
      type: Sequelize.TIME,
      allowNull: false
    },
    rango_salida_inicio: {
      type: Sequelize.TIME,
      allowNull: false
    },
    rango_salida_fin: {
      type: Sequelize.TIME,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  horariosRangos.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    horariosRangos.belongsTo(models["horarios"]);
  };

  return horariosRangos;
};
