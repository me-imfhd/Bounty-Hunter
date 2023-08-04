const express = require("express")
const router = express.Router();
const {User, Bounty} = require("../../database/schema")
const {authenticatejwt} = require("../../middleware/authenticateJWT")

router.post("/applyBounty/:BountyId",authenticatejwt,async (req, res) => {
    const bounty = await Bounty.findById(req.params.BountyId);
    const bountyId = bounty._id.toString();
    if (!bounty) {
      return res.status(404).json({ msg: "Bounty not found" });
    }
    let user = await User.findOne({ username: req.headers["userId"] }); // who will buy should be known
    if (!user) {
      return res.status(403).json({msg : "user not found"});
    }

    user.bountyAppliedIds.push(bountyId);
    await user.save();
    res.status(200).json({ msg: "Bounty applied successfully and your applied section updated",appliedBountyId: bountyId});
}
);

router.get("/allAppliedBounty",authenticatejwt,async(req,res)=>{
    const user = await User.findOne({username: req.body.username}).populate("bountyAppliedIds");

    if(!user){
        return res.json({msg: "user not found"})
    }
    return res.status(200).json({allAppliedBounty: user.bountyAppliedIds || []})
})