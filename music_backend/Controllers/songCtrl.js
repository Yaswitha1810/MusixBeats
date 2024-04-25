const express = require("express");
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");
const createCtrl = async (req,res)=>{
    const {name, thumbnail, track, movieName, trackLength} = req.body;
    
    if(!name || !movieName || !track ) {
        return res
             .status(301)
             .json({err: "Insufficient details to create song."});
    }
    //console.log(req.user?._id);
    const artist = req.user._id;
    const minutes =  Math.round(Math.round(trackLength)/60);
    console.log(minutes);
    const seconds = Math.round(trackLength)%60 ;
    const length = (minutes - minutes%1) + ":" + seconds;;
    const songDetails = {name, thumbnail, track, movieName, trackLength: length, artist};
    
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
}

const getSongsCtrl = async (req,res)=>{
    const currentUser = req.user;
    const songs = await Song.find({artist: req.user._id}).populate("artist");
    return res.status(200).json({data: songs});
}

const getArtistCtrl = async (req,res)=>{
    const {artistId} = req.params;

    const artist = await User.findOne({_id: artistId});
    //console.log(artist);
    if(!artist){
        return res.status(301).json({err: "Artist does not exist"});
    } 

    const songs = await Song.find({artist: artistId});
    return res.status(200).json({data: songs});
}


const songNameCtrl = async (req,res)=>{
    const {songName} = req.params;

    const songs = await Song.find({name: songName}).populate("artist");
    return res.status(200).json({data: songs});
}
module.exports ={
    createCtrl,
    getSongsCtrl,
    getArtistCtrl,
    songNameCtrl
};