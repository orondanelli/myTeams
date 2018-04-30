'use strict';
module.exports = (sequelize, DataTypes) => {
  var TeamLevel = sequelize.define('TeamLevel', {
    status: DataTypes.STRING
  }, {});

    return TeamLevel;
};