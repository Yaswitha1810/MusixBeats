//npm init :package.json-- this is a node Project.
//npm i express : expressJs package installed.
//we finally use express

const express = require("express");
const mongoose  = require("mongoose");
require("dotenv").config();
const app = express();
const port =8000;
//connect mongodb to node app. 
//mangoose.connect() take 2 arguments: 1. which db to connect  to(db url) 2.Connections options
mongoose.connect("mongodb+srv://musixBeats:t3UHLuyKT4CFIQfC@cluster0.enwcabf.mongodb.net")
.then((x)=>{
    console.log("Connected to Mongo!");
})
.catch((err)=>{
    console.log("Error while connecting to Mongo");
});
//API:GET type :/: return text "Hello world"

app.get("/",(req, res) => {
    //req contains all data for the request
    // res contains all data for response
    res.send("Hello World");
});
//Now we want to tell express that our sever will run on localhost:8000
app.listen(port, () => {
    console.log("App is running on port "+port);
})