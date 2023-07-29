import { Divider, Paper,Box, IconButton } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ServicesCard from "./ServicesCard";
import { useState } from "react";
const ServicesSection = () => {
  const [toggle, setToggle] = useState(true);
  const [serviceToggle, setServiceToggle] = useState(true);
  function handleToggle(){
    setToggle((toggle)=> !toggle);
    setServiceToggle((serviceToggle)=>!serviceToggle)
  }
  return (
    <>
      <Paper
        sx={{ marginTop:"1.5em",backgroundColor: "#212121", color: "#eeeeee" }}
      >
        <div style={{padding:"1em 1em 1.5em 1em", backgroundColor: "#212121", color: "#eeeeee"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "1em",
                paddingBottom: "1em",
              }}
            >
              <div style={{ fontSize: "2em", marginRight: "0.5em" }}>
                Find a service
              </div>
              <div style={{ marginTop: "0.5em" }}>
                <InfoRoundedIcon fontSize="large"></InfoRoundedIcon>
              </div>
            </div>
            <div style={{ marginTop: "0.5em" }}>
              <IconButton onClick={()=>{handleToggle()}}>
                <ExpandMoreIcon sx={{color:"#cccccc", transform:`rotate(${toggle?"180":"0"}deg)`, transition:"0.3s linear"}} fontSize="large"></ExpandMoreIcon>
              </IconButton>
            </div>
          </div>
          <div style={{ fontSize: "1.5em" }}>
            Skip posting a Bounty and hire one of our top Bounty Hunters
            directly.
          </div>
        </div>
          <Divider sx={{bgcolor:"gray"}} orientation="horizontal"/>
          
          <Box sx={{display:`${serviceToggle?"none":"grid"}`,gridAutoFlow:"column",gridAutoColumns:{xs:"72%",sm:"64%",md:"44%",lg:"39%"} ,margin:"1em",gap:"1em",overflow:"auto"}}>
            <ServicesCard />  
            <ServicesCard />  
            <ServicesCard />  
            <ServicesCard />  
            <ServicesCard />  
            <ServicesCard />  
            <ServicesCard />
          </Box>     

      </Paper>
    </>
  );
};

export default ServicesSection;
