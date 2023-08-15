const User = require("./User");
const Visit = require("./Visit");
const Properties = require("./Properties");
const Favorites = require("./Favorites");
const Categories = require("./Categories");

User.hasMany(Favorites);
Favorites.belongsTo(User);

User.hasMany(Visit);
Visit.belongsTo(User);

Properties.hasMany(Visit);
Visit.belongsTo(Properties);

Properties.hasMany(Favorites);
Favorites.belongsTo(Properties);

Categories.hasMany(Properties);
Properties.belongsTo(Categories);

module.exports = { User, Visit, Properties, Favorites, Categories };
