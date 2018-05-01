'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vendors = sequelize.define('Vendors', {
    vendor: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    certified: DataTypes.STRING,
    crops: DataTypes.TEXT,
    livestock: DataTypes.TEXT,
    wildcrops: DataTypes.TEXT,
    handling: DataTypes.TEXT
  }, {});
  Vendors.associate = function(models) {
    // associations can be defined here
  };
  return Vendors;
};