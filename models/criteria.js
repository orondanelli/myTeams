'use strict';
module.exports = (sequelize, DataTypes) => {
  var Criteria = sequelize.define('Criteria', {
    criteriaName: DataTypes.STRING,
    principleName: DataTypes.STRING,
    officialValueNum: DataTypes.INTEGER
  }, {});
    Criteria.associate = function(models) {
    Criteria.belongsTo(models.Level);
  };
  return Criteria;
};