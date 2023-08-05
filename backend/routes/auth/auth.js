const express = require('express');
const mongoose = require('mongoose');
const {User} = require("../../database/schema")
const jwt = require('jsonwebtoken');
const {secret} = require("../../middleware/authenticateJWT")

const router = express.Router();

router.post("/signup", async (req, res)=>{
    const {username, password, email} = req.body;

    const user = await User.findOne({username});
    if(user){
        return res.status(403).json({msg: "User already exists"});
    }
    const newUser = new User({username,password,email});
    await newUser.save();
    const token = jwt.sign({id: newUser._id}, secret, {expiresIn : "1h"});
    res.json({msg: "Logged in successfully", token});

})
router.post("/login", async (req, res)=>{
    const {username, password} = req.body;

    const user = await User.findOne({username});
    if(!user){
        return res.status(403).json({msg: "Invalid Username"})
    }
    const checkUser = await User.findOne({username, password});
    if(!checkUser){
        return res.status(403).json({msg: "Invalid Password"})
    }
    const token = jwt.sign({id: newUser._id}, secret, {expiresIn : "1h"});
    res.json({msg: "Logged in successfully", token});

})

module.exports = router;