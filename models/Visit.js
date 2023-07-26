const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/db");

class Visit extends sequelize.Model {}

Visit.init(
  {
    date: {
      type: sequelize.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    schedule: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, model: "visit" }
);

module.exports = Visit;
