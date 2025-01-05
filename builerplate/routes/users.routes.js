const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, refreshToken, authenticateUser } = require("../controllers/users.controllers"); // Adjust path as needed


// register user
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refreshtoken", refreshToken);

module.exports =  router;