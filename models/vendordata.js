'use strict';
module.exports = (sequelize, DataTypes) => {
  var vendorData = sequelize.define('vendorData', {
    // id: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, 
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true},    
    Vendor: DataTypes.STRING,
    Contact: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Zip: DataTypes.INTEGER,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Certified: DataTypes.STRING
  }, {
    timestamps: false
  });
  // vendorData.associate = function(models) {
  //   // associations can be defined here
  //   vendorData.hasMany(models.cropData, {
  //     // sourceKey: "id",
  //     // foreignKey: "CropID"
  //   });    
  // };
  return vendorData;
};