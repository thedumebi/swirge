const express = require("express");
const { authUser, registerUser } = require("../controllers/users.controller");

const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/signin").post(authUser);

module.exports = router;
