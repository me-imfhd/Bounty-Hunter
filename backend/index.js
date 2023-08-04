const express= require('express')
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/bounty", allBounties);
app.use("/bounty", assignedBounties);
app.use("/bounty", postedBounties);


app.listen(3000,()=>{console.log("http://localhost:3000")})