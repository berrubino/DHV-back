const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/db");

class Categories extends sequelize.Model {}

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
  { sequelize: db, modelName: "categories" }
);

module.exports = Categories;
