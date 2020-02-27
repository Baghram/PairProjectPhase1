'use strict';
module.exports = (sequelize, DataTypes) => {
  class Question extends sequelize.Sequelize.Model {}
  Question.init({
    author: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question'
  });
  Question.associate = function (models) {
    Question.belongsToMany(models.User, {
      through: 'Results'
    })
  };
  return Question;
};