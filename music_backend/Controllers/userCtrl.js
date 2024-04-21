const express = require("express");
const bcrypt = require("bcrypt");
//const router = express.Router();
const User = require("../models/User");
const { getToken } = require("../utils/jwtToken");

const registerCtrl = async(req,res) => {
    const {email, password, firstName, lastName, userName} = req.body;

    const user = await User.findOne({email: email});
    if(user){
        return res
            .status(403)
            .json({error: "A user with this email already exists"});
    }

    //creating a new user in the DB

    //const hashedPassword = bcrypt.hash(password, 10);
    const newUserData = {
        email, 
        password, 
        firstName, 
        lastName, 
        userName
    };
    const newUser = await User.create(newUserData);

    const token = await getToken(email,newUser);

    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
};

const loginCtrl = async(req,res) => {
    const { email,password } = req.body;
    const user = await User.findOne({email: email});
    if(!user){
        return res.status(403).json({err: "Invalid credentials"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(403).json({err: "Invalid credentials"});
    }

    const token = await getToken(user.email,user);
    const userToReturn = {...user.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
};

module.exports = {
    registerCtrl,
    loginCtrl
};