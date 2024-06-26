const express = require("express");
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");
const Playlist = require("../models/Playlist");

const createCtrl = async (req,res)=>{
    const currentUser = req.user;
    const {name, thumbnail, songs} = req.body;
    
    if(!name || !thumbnail || !songs){
        return res.status(301).json({err: "Insufficient data"});
    }
    const playlistData = {
        name, 
        thumbnail, 
        songs, 
        owner:currentUser._id,
        collaborators: [],
        };
        const playlist = await Playlist.create(playlistData);
        return res.status(200).json(playlist);
    }

 const playlistIdCtrl = async (req,res)=>{
    const playlistId = req.params.playlistId;

    const playlist = await Playlist.findOne({_id: playlistId});
    if(!playlist){
        return res.status(301).json({err: "Invalid ID"});
    }
    return res.status(200).json(playlist);
}   

const meIdCtrl = async (req,res)=>{
    const artistId = req.user._id;

    const playlists = await Playlist.find({owner: artistId}).populate(
        "owner"
    );
    return res.status(200).json({data: playlists});
}

const artistIdCtrl = async (req,res)=>{
    const artistId = req.params.artistId;

    const artist = await User.findOne({_id: artistId});
    if(!artist){
        return res.status(304).json({err: "Invalid Artist ID"});
    }

    const playlists = await Playlist.find({owner: artistId});
    return res.status(200).json({data: playlists});
}

const addSongCtrl = async (req,res)=>{
    const currentUser = req.user;
    const {playlistId, songId}= req.body;
    const playlist = await Playlist.findOne({_id: playlistId});
    if(!playlist){
        return res.status(304).json({err: "Playlist does not exist"});
    }
    
    console.log(playlist);
    console.log(currentUser);
    console.log(playlist.owner);
    console.log(currentUser._id);
    console.log(playlist.owner.equals(currentUser._id));
    
    if(
        !playlist.owner.equals(currentUser._id) && 
        !playlist.collaborators.includes(currentUser._id))
     {
       return res.status(400).json({err: "Not allowed"});
     }

    const song = await Song.findOne({_id: songId});
    if(!song){
        return res.status(304).json({err: "Song does not exist"});
    }

    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
}

    module.exports={
        createCtrl,
        playlistIdCtrl,
        artistIdCtrl,
        meIdCtrl,
        addSongCtrl
    };