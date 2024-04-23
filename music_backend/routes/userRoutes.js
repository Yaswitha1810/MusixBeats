const express = require("express");

const {
    registerCtrl,
    loginCtrl
} = require("../Controllers/userCtrl");

const userRoute = express.Router();

userRoute.post("/signup",registerCtrl);
userRoute.post("/login",loginCtrl);

module.exports =  userRoute ;