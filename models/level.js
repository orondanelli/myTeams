'use strict';
module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    levelName: DataTypes.STRING
  }, {});
  Level.associate = function(models) {
    models.Level.belongsToMany(models.Team, {through: 'TeamLevel'});
  };
  return Level;
};