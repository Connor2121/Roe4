'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VendorLivestocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vendorDatumId: {
        type: Sequelize.INTEGER
      },
      LivestockID: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VendorLivestocks');
  }
};