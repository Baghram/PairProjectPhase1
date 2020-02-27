'use strict';
module.exports = (sequelize, DataTypes) => {
  class Result extends sequelize.Sequelize.Model {}
  Result.init({
    UserId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {
    validate: {
      answerCheck() {
        if (!this.answer) throw new Error(`Please Choose Your Option First`);
      }
    },
    sequelize,
    modelName: 'Result'
  });
  Result.associate = function (models) {};
  return Result
};