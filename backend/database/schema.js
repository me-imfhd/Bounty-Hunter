const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullName: String,
    numberOfBountiesCompleted: Number,
    bountyAppliedIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bounty" }],
    bountyPostedIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bounty" }],
    serviceUsersIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],

})
const bountySchema = new mongoose.Schema({
    posterId: String,
    title: String,
    description: String,
    amount: Number,
    postedMoment: {
      time:{type:String},
      date:{type:String}
    },
    completionDate: String,
    communication: String,
    communicationHandle: String,
    bountyState: String, 
    claimedBy: String,
    appliedUsersIds: [String],
    rejectedUsersIds: [String],
})

const serviceSchema = new mongoose.Schema({
    posterId: String,
    title: String,
    price: Number,
    completionTime: String,
    experience: String,
    description: String,
    serviceUsersIds: [String]
})

const applicantSchema = new mongoose.Schema({
    posterId: String,
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