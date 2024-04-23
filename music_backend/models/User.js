const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User= new mongoose.Schema({
    firstName:{
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,

    },
    email :{
        type:String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    likedSongs:[{
        type: String,
        default:"",
    }],
    likedPlaylists:[{
        type: String,
        default:"",
    }],
    subscribedArtists:[{
        type: String,
        default:"",
    }],

});

User.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;

