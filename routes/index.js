// express Router 
// auth.js and Posts.js routers was included.

const express = require("express");
const auth = require("./auth.js");
const router = express.Router();

// "/api/auth/"
// "/api/posts"

router.use('/auth', auth);

//// router export

module.exports = router;