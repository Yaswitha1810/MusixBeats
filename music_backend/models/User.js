const mongoose = require("mongoose");
//How to Create a model
// Step 1:require mongoose
//Step 2:Create a mongoose schema(structure of users)
//Step 3:Create a model

const User= new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,

    },
    email :{
        type:String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedSongs:{
        //We will change this to array later
        type: String,
        default:"",
    },
    likedPlaylists:{
        type: String,
        default:"",
    },
    subscribedArtists:{
        type: String,
        default:"",
    },

});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;

