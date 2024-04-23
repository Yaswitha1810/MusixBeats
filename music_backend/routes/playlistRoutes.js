const express = require("express");
const playlistRoute = express.Router();
const passport = require("passport");
const {createCtrl,playlistIdCtrl, artistIdCtrl, addSongCtrl} = require("../Controllers/playlistCtrl");
playlistRoute.post("/create",passport.authenticate("jwt", {session: false}),createCtrl);
playlistRoute.get("/get/playlist/:playlistId",passport.authenticate("jwt", {session: false}),playlistIdCtrl);
playlistRoute.get("/get/artist/artistId", passport.authenticate("jwt", {session: false}),artistIdCtrl);
playlistRoute.post("/add/song", passport.authenticate("jwt", {session: false}), addSongCtrl);
module.exports = playlistRoute;