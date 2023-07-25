const sequelize = require("sequelize");
const bcrypt = reuiqre("bcrypt");
const db = require("../config/db");

class Favorites extends sequelize {}

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
  { sequelize: db, model: "favorites" }
);

module.exports = Favorites;
