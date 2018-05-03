'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Livestock', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      }
      // LivestockID: {
      //   type: Sequelize.STRING
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Livestock');
  }
};