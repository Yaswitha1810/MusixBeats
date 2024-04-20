const mongoose = require("mongoose");
//How to Create a model
// Step 1:require mongoose
//Step 2:Create a mongoose schema(structure of users)
//Step 3:Create a model

const Playlist =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: false,

    },
   
    owner: {
        type: mongoose.Types.ObjectId,
        ref:"user",
    },
    //1.Playlist mein songs kaunse hain
    //2.Playlist collaborators
    songs:[
        {
        type:mongoose.Types.ObjectId,
        ref:"song",
        
    },
], 
  collaborators:[
    {
        type:mongoose.Types.ObjectId,
        ref:"user",
    },
  ],

});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;

