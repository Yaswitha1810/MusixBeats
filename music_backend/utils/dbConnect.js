const mongoose = require("mongoose");
//connect mongodb to node app. 
require("dotenv").config();
const dbConnect = () =>{ 
    mongoose.connect("mongodb+srv://musixBeats:"+process.env.MONGO_PASSWORD+"@cluster0.enwcabf.mongodb.net")
    .then((x)=>{
        console.log("Connected to Mongo!");
    })
    .catch((err)=>{
        console.log("Error while connecting to Mongo");
    })
};

module.exports = dbConnect ;