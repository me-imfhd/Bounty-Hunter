const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    numberOfBountiesCompleted: Number,
    bountyAppliedIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bounty" }],
    bountyPostedIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bounty" }],
    serviceAppliedIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],

})
const bountySchema = new mongoose.Schema({
    username: String,
    title: String,
    description: String,
    amount: Number,
    postedDate: String,
    completionDate: String,
    communication: String,
    communicationHandle: String,
    bountyState: String, 
    claimedBy: String,
    appliedUsers: [String],
    rejectedUsers: [String],
})

const serviceSchema = new mongoose.Schema({
    username: String,
    title: String,
    price: Number,
    completionTime: String,
    experience: String,
    description: String,
    serviceUser: [String]
})

const applicantSchema = new mongoose.Schema({
    username: String,
    dateOfApplying: String,
    publicMessage: String,
    privateEmail: String,
    githubUsername: String,
    linkedInUsername: String,
    WebsiteLink: String
})

const User = mongoose.model("User", userSchema);
const Bounty = mongoose.model("Bounty", bountySchema);
const Service = mongoose.model("Service", serviceSchema);
const Apply = mongoose.model("apply", applicantSchema);

module.exports = {
    User,
    Bounty,
    Service,
    Apply
}