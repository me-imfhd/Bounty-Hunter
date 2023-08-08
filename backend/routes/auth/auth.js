const express = require('express');
const mongoose = require('mongoose');
const {User} = require("../../database/schema")
const jwt = require('jsonwebtoken');
const {secret} = require("../../middleware/authenticateJWT")
const {authenticatejwt} = require("../../middleware/authenticateJWT")

const router = express.Router();

router.get("/me", authenticatejwt, async(req,res)=>{
    const _id = req.headers["_id"];
    const user = await User.findOne({_id});
    if(!user){
        return res.json({msg:"User does not exists"});
    }
    res.json({username: user.fullName});
})

router.post("/signup", async (req, res)=>{
    const {username, password, fullName, rememberMe} = req.body;
    let expiresIn = "2h";
    if(rememberMe){
        expiresIn = "48h"
    }
    const user = await User.findOne({username});
    if(user){
        return res.status(403).json({msg: "User already exists"});
    }
    const newUser = new User({username,password,fullName});
    await newUser.save();
    const token = jwt.sign({id: newUser._id}, secret, {expiresIn});
    res.json({msg: "Logged in successfully", token, fullName});

})
router.post("/login", async (req, res)=>{
    const {username, password, rememberMe} = req.body;
    let expiresIn = "2h";
    if(rememberMe){
        expiresIn = "48h"
    }
    const user = await User.findOne({username, password});
    if(!user){
        return res.status(403).json({msg: "Invalid username or password"})
    }
    const token = jwt.sign({id: user._id}, secret, {expiresIn});
    res.json({msg: "Logged in successfully", token, username: user.fullName});

})

module.exports = router;