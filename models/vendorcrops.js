'use strict';
module.exports = (sequelize, DataTypes) => {
  var vendorCrops = sequelize.define('vendorCrops', {
    id: DataTypes.INTEGER,
    vendorID: DataTypes.INTEGER,
    cropID: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  vendorCrops.associate = function(models) {
    // associations can be defined here
  };
  return vendorCrops;
};