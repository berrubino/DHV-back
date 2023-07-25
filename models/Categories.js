const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/db");

class Categories extends sequelize {}

Categories.init(
  {
    categorieName: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, model: "categories" }
);

module.exports = Categories;
