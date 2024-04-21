const mongoose = require("mongoose");
//How to Create a model
// Step 1:require mongoose
//Step 2:Create a mongoose schema(structure of users)
//Step 3:Create a model

const Song =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: false,

    },
    track :{
        type:String,
        required: true,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref:"user",
    },
    

});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;
