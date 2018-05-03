'use strict';
module.exports = (sequelize, DataTypes) => {
  var cropData = sequelize.define('cropData', {
    // id: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    Name: DataTypes.STRING,
    // CropID: {
    //   type: DataTypes.INTEGER, 
    // }
  }, {
    timestamps: false
  });
  // cropData.associate = function(models) {
  //   // associations can be defined here
  //   cropData.hasMany(models.vendorData, {
  //     // foreignKey: "CropID",
  //     // targetKey: "id" 
  //   });
  // };
  return cropData;
};

