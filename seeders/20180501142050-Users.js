'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      },
      {
        "firstName": "test",
        "lastName": "test",
        "email": "test@test.com",
        "password": "test1234"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};