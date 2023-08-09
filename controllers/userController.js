const { generateToken } = require("../config/token");
const User = require("../models/User");

exports.user_signup = async (req, res, next) => {
  try {
    const { email } = req.body;

    const searchUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (searchUser) {
      res.status(400).send("user already exist");
    } else {
      const user_data = req.body;
      const createdUser = await User.create(user_data);
      res.status(200).send(createdUser);
    }
  } catch (error) {
    next(error);
  }
};

exports.login_user = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    const validatedPassword = await user.validatePassword(password);

    if (validatedPassword) {
      const payload = {
        email: user.email,
        is_admin: user.is_admin,
      };

      const userCookie = generateToken(payload);

      res.cookie("token", userCookie);

      res.status(200).send(payload);
    } else {
      res.send("wrong password or user_name");
    }
  } catch (error) {
    next(error);
  }
};
