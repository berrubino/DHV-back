const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/db");

class Favorites extends sequelize.Model {}

Favorites.init(
  {
    user_id: {
      type: sequelize.INTEGER,
      allowNll: false,
    },
    properties_id: {
      type: sequelize.INTEGER,
      allowNll: false,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
