const express = require("express");

const {
    registerCtrl,
    loginCtrl
} = require("../Controllers/userCtrl");

const userRoute = express.Router();

userRoute.post("/signup",registerCtrl);
userRoute.get("/signup",()=>{
    console.log("jflwflvd");
});
userRoute.post("/login",loginCtrl);

module.exports =  userRoute ;