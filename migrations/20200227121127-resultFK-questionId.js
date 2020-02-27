'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Results', ['QuestionId'], {
      type: 'foreign key',
      name: 'QuestionId',
      references: { //Required field
        table: 'Questions',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Results', 'QuestionId')
  }
};