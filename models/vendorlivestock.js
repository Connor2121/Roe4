'use strict';
module.exports = (sequelize, DataTypes) => {
  var VendorLivestock = sequelize.define('VendorLivestock', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true},
    vendorDatumId: DataTypes.INTEGER,
    LivestockID: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
  // VendorLivestock.associate = function(models) {
  //   // associations can be defined here
  // };
  return VendorLivestock;
};