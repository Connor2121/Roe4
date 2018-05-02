'use strict';
module.exports = (sequelize, DataTypes) => {
  var cropData = sequelize.define('cropData', {
    id: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    CropID: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  cropData.associate = function(models) {
    // associations can be defined here
    cropData.belongsToMany(models.vendorData, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return cropData;
};

