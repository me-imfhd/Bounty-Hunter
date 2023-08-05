const express= require('express')
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const authRoutes = require("./routes/auth/auth")
const applyBountyRoutes = require("./routes/bounties/applyBounty")
const postBountyRoutes = require("./routes/bounties/postBounty")
const serviceRoutes = require("./routes/services/service")
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/bounty", applyBountyRoutes);
app.use("/bounty", postBountyRoutes);
app.use("/service", serviceRoutes);


app.listen(3000,()=>{console.log("http://localhost:3000")})

mongoose.connect('mongodb+srv://fahadahmad63862:94ZElHhhiFIAIqnm@cluster0.gxaluyb.mongodb.net/', { dbName: "TaskmateDB" });
