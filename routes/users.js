const express = require("express");
const router = express.Router();

const { getAllUsers, registerUser } = require("../controllers/users");

router.route("/getUsers").get(getAllUsers);
router.route("/registerUser").post(registerUser);

module.exports = router;
