'use strict';
module.exports = (sequelize, DataTypes) => {
  var Livestock = sequelize.define('Livestock', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    Name: DataTypes.STRING,
    // LivestockID: {
    //   type: DataTypes.INTEGER
    // }
  }, {
    timestamps: false
  });
  Livestock.associate = function(models) {
    // associations can be defined here
    Livestock.belongsToMany(models.vendorData, {through: models.VendorLivestock});
  };
  return Livestock;
};