'use strict';
module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    levelName: DataTypes.STRING,
    levelpriority: DataTypes.INTEGER
  }, {});
  //Level.associate = function(models) {
    //models.Level.belongsTo(models.Team);
  //};
  return Level;
};
