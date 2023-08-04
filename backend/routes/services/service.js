const express = require("express")
const router = express.Router();
const {User, Service} = require("../../database/schema")
const {authenticatejwt} = require("../../middleware/authenticateJWT")

router.post("/postService", authenticatejwt ,async (req,res)=>{
    const {username, title, price, description,completionTime, experience} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status("403").json({msg: "Username not found"})
    }
    const newService = new Service({username, title, price, description,completionTime, experience});
    const service = await newService.save();
    const serviceId = service._id.toString();
    user.bountyPostedIds.push(serviceId);
    res.status(200).json({msg:"Service added successfully", postedServiceId: serviceId});
})


router.put("/updateService/:serviceId", authenticatejwt ,async(req,res)=>{ //this is done by service creator
    const updatedBody = req.body;
    let updateService = await Service.findByIdAndUpdate(req.params.id, updatedBody, {new:true})
    if(!updateService){
        return res.json({msg: "Invalid id maybe, Service not updated"})
    }
    res.json({msg: "Service updated"});
})
