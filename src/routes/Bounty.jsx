
import { Container, Button, Divider } from "@mui/material";
import BountiesHeaders from "../components/BountiesHeaders";
import { useState } from "react";
import ServicesCard from "./Services/ServicesCard";
const Bounty = () => {
    const [title, setTitle] = useState("Bounties")
    const [description, setDescription] = useState("Work with Top Taskmates to actualize your dream project.")
    function handleSection(section){
        if(section === "All Bounties"){
            setTitle("Bounties");
            setDescription("Work with Top Taskmates to actualize your dream project.")
        }
        if(section === "Posted Bounties"){
            setTitle("Your Posted Bounties");
            setDescription("View Bounties that you have posted.")
        }
        if(section === "Assigned Bounties"){
            setTitle("Your Assigned Bounties");
            setDescription("View Bounties that you have applied for.")
        }
        if(section === "Services"){
            setTitle("Find a Service");
            setDescription("Skip posting a Bounty and hire one of our top Bounty Hunters directly.")
        }
        
    }
  return (
    <>
      <Container maxWidth="md">
        <BountiesHeaders title={title} description={description}></BountiesHeaders>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "10px",
            paddingBottom: "5px",
            marginBottom: "5px",
            borderBottom: "0.23rem solid gray",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              mr: "2px",
              fontSize: {xs: "1em", sm: "1.3em", md: "1.5em",lg:"1.8em"}
            }}
            variant="text"
            onClick={()=>{handleSection("All Bounties")}}
            >
            All Bounties
          </Button>
          <Divider sx={{bgcolor:"gray", width:"0.15em"}}orientation="vertical" variant="middle" flexItem />
          <Button
            sx={{
              mx: "2px",
                fontSize: {xs: "1em", sm: "1.3em", md: "1.5em",lg:"1.8em"}
            }}
            variant="text"
            onClick={()=>{handleSection("Posted Bounties")}}
            >
            Posted Bounties
          </Button>
          <Divider sx={{bgcolor:"gray", width:"0.15em"}}orientation="vertical" variant="middle" flexItem />
          <Button
            sx={{
              mx: "2px",
              fontSize: {xs: "1em", sm: "1.3em", md: "1.5em",lg:"1.8em"}
            }}
            variant="text"
            onClick={()=>{handleSection("Assigned Bounties")}}
          >
            Assigned Bounties
          </Button>
            <Divider sx={{bgcolor:"gray", width:"0.15em"}}orientation="vertical" variant="middle" flexItem />
          <Button sx={{ mx: "2px", fontSize: {xs: "1em", sm: "1.3em", md: "1.5em",lg:"1.8em"} }} variant="text" onClick={()=>{handleSection("Services")}}>
            Services
          </Button>
        </div>
        {title== "Bounties" && <ServicesCard/>}
      </Container>
    </>
  );
};

export default Bounty;
