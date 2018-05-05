'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendorData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UID: {
        type: Sequelize.STRING
      },
      Vendor: {
        type: Sequelize.STRING
      },
      Bio: {
        type: Sequelize.TEXT
      },
      Contact: {
        type: Sequelize.STRING
      },
      Image: {
        type: Sequelize.TEXT,
      },
      Address: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      Zip: {
        type: Sequelize.INTEGER
      },
      Phone: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Certified: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vendorData');
  }
};