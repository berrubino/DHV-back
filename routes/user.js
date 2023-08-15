const express = require("express");
const router = express.Router();
const { user_signup, login_user } = require("../controllers/userController");

router.post("/signup", user_signup);
router.post("/login", login_user);

module.exports = router;
