'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    teamName: DataTypes.STRING,
    areaName: DataTypes.STRING
  }, {});
/*
  Team.associate = function(models) {
    Team.belongsTo(models.Level);
  };
*/
  return Team;
};
