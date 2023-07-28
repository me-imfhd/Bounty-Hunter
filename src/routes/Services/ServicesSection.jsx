import { Divider, Paper,Box } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ServicesCard from "./ServicesCard";
const ServicesSection = () => {
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
              <ExpandMoreIcon fontSize="large"></ExpandMoreIcon>
            </div>
          </div>
          <div style={{ fontSize: "1.5em" }}>
            Skip posting a Bounty and hire one of our top Bounty Hunters
            directly.
          </div>
        </div>
          <Divider sx={{bgcolor:"gray"}} orientation="horizontal"/>
          <Box sx={{display:"grid",gridAutoFlow:"column",gridAutoColumns:{xs:"72%",sm:"64%",md:"44%",lg:"39%"} ,margin:"1em",gap:"1em",overflow:"auto"}}>
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
