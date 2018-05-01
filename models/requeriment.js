'use strict';
module.exports = (sequelize, DataTypes) => {
  var Requeriment = sequelize.define('Requeriment', {
    requerimentName: DataTypes.STRING,
    principleName: DataTypes.STRING,
    officialValueNum: DataTypes.INTEGER,
    realValueNum: DataTypes.INTEGER  
  }, {});
  Requeriment.associate = function(models) {
    Requeriment.belongsTo(models.Level);
    Requeriment.belongsTo(models.Team);
  };
  return Requeriment;
};