
const express = require("express");
const router = express.Router();

// endPoints?
const {
    signup,
    login
} = require("../controllers/auth");

const { 
    userSignupValidator, 
    userloginValidator  
} = require("../validator");


// routes
router.post("/signup", userSignupValidator, signup);
router.post("/login", userloginValidator, login);

module.exports = router;

