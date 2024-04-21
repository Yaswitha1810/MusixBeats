const express = require("express");
const songRoute = express.Router();
const passport = require("passport");
const {createCtrl, getSongsCtrl, getArtistCtrl, songNameCtrl} = require("../Controllers/songCtrl");
songRoute.post("/create", passport.authenticate("jwt", {session: false}), createCtrl);
songRoute.get("/get/mysongs",passport.authenticate("jwt",{session: false}),getSongsCtrl);
songRoute.get("/get/artist",passport.authenticate("jwt", {session: false}),getArtistCtrl);
songRoute.get("/get/name", passport.authenticate("jwt", {session: false}),songNameCtrl);
module.exports = songRoute;

