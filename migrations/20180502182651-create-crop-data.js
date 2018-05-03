'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cropData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      }
      // CropID: {
      //   type: Sequelize.INTEGER
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cropData');
  }
};