'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        username: 'ibra nurlette',
        email: 'ibra@gmail.com',
        password: 'ibra',
        foto: 'ibra.jpg',
        status: 'admin'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
