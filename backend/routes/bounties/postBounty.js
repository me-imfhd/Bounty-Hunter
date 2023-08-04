const express = require("express")
const router = express.Router();
const {User, Bounty} = require("../../database/schema")
const {authenticatejwt} = require("../../middleware/authenticateJWT")

router.post("/postBounty", authenticatejwt ,async (req,res)=>{
    const {username, title, price, description,completionTime, communication, coummincationHandle} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status("403").json({msg: "Username not found"})
    }
    const newBounty = new Bounty({username, title, price, description,completionTime, communication, coummincationHandle});
    const bounty = await newBounty.save();
    const bountyId = bounty._id.toString();
    user.bountyPostedIds.push(bountyId);
    await user.save();
    res.status(200).json({msg:"Bounty added successfully and your posted bounty section updated", postedBountyId: bountyId});
})

router.get("/allPostedBounty",authenticatejwt,async(req,res)=>{
    const user = await User.findOne({username: req.body.username}).populate("bountyPostedIds");

    if(!user){
        return res.json({msg: "user not found"})
    }
    return res.status(200).json({allPostedBounty: user.bountyPostedIds || []})
})

router.put("/updateBounty/:BountyId", authenticatejwt ,async(req,res)=>{ //this is done by Bounty creator
    const updatedBody = req.body;
    let updateBounty = await Bounty.findByIdAndUpdate(req.params.id, updatedBody, {new:true})
    if(!updateBounty){
        return res.json({msg: "Invalid id maybe, Bounty not updated"})
    }
    res.json({msg: "Bounty updated"});
})