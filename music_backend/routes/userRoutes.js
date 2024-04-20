const express = require("express");

const {
    registerCtrl,
    loginCtrl
} = require("../Controllers/userCtrl");

const userRoute = express.Router();

userRoute.post("/register",registerCtrl);
userRoute.post("/login",loginCtrl);

module.exports =  userRoute ;