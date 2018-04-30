'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    teamName: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    Team.belongsToMany(models.Level, {through: 'TeamLevel', foreignKey: 'levelId'});
  };
  return Team;
};