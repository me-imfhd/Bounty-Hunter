
import { Container, Button,Paper } from "@mui/material";
import Template from "../components/template";
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
        <Template title={title} description={description}></Template>
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
              fontSize: "1.25em",
              borderRadius: "0",
              borderRight: "1px solid #1976d2",
            }}
            variant="text"
            onClick={()=>{handleSection("All Bounties")}}
            >
            All Bounties
          </Button>
          <Button
            sx={{
                mx: "2px",
                fontSize: "1.25em",
              borderRadius: "0",
              borderRight: "1px solid #1976d2",
            }}
            variant="text"
            onClick={()=>{handleSection("Posted Bounties")}}
            >
            Posted Bounties
          </Button>
          <Button
            sx={{
              mx: "2px",
              fontSize: "1.25em",
              borderRadius: "0",
              borderRight: "1px solid #1976d2",
            }}
            variant="text"
            onClick={()=>{handleSection("Assigned Bounties")}}
          >
            Assigned Bounties
          </Button>
          <Button sx={{ mx: "2px", fontSize: "1.25em" }} variant="text" onClick={()=>{handleSection("Services")}}>
            Services
          </Button>
        </div>
        {title== "Bounties" && <ServicesCard/>}
        
      </Container>
    </>
  );
};

export default Bounty;
