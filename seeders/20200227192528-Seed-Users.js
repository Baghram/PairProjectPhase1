'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Users', [
          {
            username: "Admin1",
            password: 1234567,
            FirstName: "Hilmi",
            LastName: "Muharomi",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            username: "Admin2",
            password: 1234567,
            FirstName: "Yoko",
            LastName: "Gk",
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
