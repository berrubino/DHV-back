const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/db");

class User extends sequelize {}

User.init(
  {
    name: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastname: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelname: "user" }
);

module.exports = User;
