'use strict';
module.exports = (sequelize, DataTypes) => {
  var VendorLivestock = sequelize.define('VendorLivestock', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true},
    VendorID: DataTypes.INTEGER,
    LivestockID: {
      type: DataTypes.INTEGER
    }
  }, {});
  VendorLivestock.associate = function(models) {
    // associations can be defined here
  };
  return VendorLivestock;
};