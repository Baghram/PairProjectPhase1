'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'LastName', Sequelize.STRING)

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', "LastName")

  }
};