const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/db");

class User extends sequelize.Model {
  createHash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return this.createHash(password, this.salt).then(
      (newhash) => newhash === this.password
    );
  }
}

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
    address: { type: sequelize.STRING, require: true },
    zip_code: { type: sequelize.INTEGER, require: true },
    city: { type: sequelize.STRING, require: true },
    password: { type: sequelize.STRING, require: true },
    is_admin: { type: sequelize.BOOLEAN, defaultValue: false },
    is_deleted: { type: sequelize.BOOLEAN, defaultValue: false },
    salt: { type: sequelize.STRING },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user
    .createHash(user.password, user.salt)
    .then((result) => (user.password = result))
    .catch((err) => console.log(err));
});

module.exports = User;
