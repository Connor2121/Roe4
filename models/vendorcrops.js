'use strict';
module.exports = (sequelize, DataTypes) => {
  var vendorCrops = sequelize.define('vendorCrops', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true},
    VendorID: DataTypes.INTEGER,
    CropID: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
  // vendorCrops.associate = function(models) {
  //   // associations can be defined here
  //   vendorData.belongsToMany(models.cropData, { through: vendorCrops});
  //   cropData.belongsToMany(models.vendorData, { through: vendorCrops});

  // };
  return vendorCrops;
};

// sequelize.define('user_project', {
    //   role: Sequelize.STRING
    // });
    // User.belongsToMany(Project, { through: UserProject });
    // Project.belongsToMany(User, { through: UserProject });
    // // through is required!
    
    // user.addProject(project, { through: { role: 'manager' }});