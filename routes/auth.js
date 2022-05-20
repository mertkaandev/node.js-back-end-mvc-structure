// express Router 
// controller functions included from controller folder (register, login).

const express = require("express");
const {register} = require("../controllers/register.js")
const {login} = require("../controllers/login.js")
const router = express.Router();

// "/api/auth/register" and register controller.
// "/api/auth/login" and login controller.

router.post('/register', register);
router.post('/login', login);

// router export.

module.exports = router;