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
  },
  { sequelize: db, modelname: "user" }
);

User.addHook("beforecreate", (user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;
  return user
    .createHash(user.password, user.salt)
    .then((result) => (user.password = result))
    .catch((err) => console.log(err));
});

module.exports = User;
