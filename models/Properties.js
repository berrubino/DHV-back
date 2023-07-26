const sequelize = requiere("sequelize");
const db = require("../config/db");
const bcrypt = require("bctypt");

class Properties extends sequelize.Model {}

Properties.init(
  {
    is_for_rent: {
      type: sequelize.BOOLEAN,
      allowNull: false,
    },
    price: {
      type: sequelize.BIGINT,
      allowNull: false,
    },
    country: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    province: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    neighbohood: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    size: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    bedrooms: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    img: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    images: {
      type: sequelize.ARRAY(sequelize.STRING),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize: db, model: "properties" }
);

module.exports = Properties;
