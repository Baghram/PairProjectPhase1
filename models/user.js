'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    getFullName() {
      return `${this.FirstName} ${this.LastName}`
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING
  }, {
    validate: {
      usernameCheck() {
        if (this.username.length < 6) throw new Error(`Username Must Have at least 6 Character`);
      },
      passwordCheck() {
        if (this.password.length < 6) throw new Error(`Password Must Have at least 6 Character`);
      },
      firstNameCheck() {
        if (this.FirstName.length < 1) throw new Error(`Please Fill Your Name`);
      }
    },
    hooks: {
      beforeCreate: (User, options) => {
        if (User.LastName.length == 0) {
          User.LastName = User.FirstName;
        }
      }

    },
    sequelize,
    modelName: 'User'
  })
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Question, {
      through: 'Results'
    })
  };
  return User;
};