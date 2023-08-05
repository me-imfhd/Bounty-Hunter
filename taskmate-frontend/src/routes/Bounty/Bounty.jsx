import { Container, Typography } from "@mui/material";
import BountiesHeaders from "./BountiesHeaders";
import { useEffect, useState } from "react";
import ServicesSection from "../Services/ServicesSection";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Bounty = () => {
  const [title, setTitle] = useState("Bounties");
  const [activeTab, setActiveTab] = useState("Bounties");
  const [section, setSection] = useState("All Bounties");
  const [description, setDescription] = useState(
    "Work with Top Taskmates to actualize your dream project."
  );
  useEffect(() => {
    if (section === "All Bounties") {
      setTitle("Bounties");
      setDescription(
        "Work with Top Taskmates to actualize your dream project."
      );
      setActiveTab("Bounties");
    }
    if (section === "Posted Bounties") {
      setTitle("Your Posted Bounties");
      setDescription("View Bounties that you have posted.");
      setActiveTab("Posted Bounties");
    }
    if (section === "Assigned Bounties") {
      setTitle("Your Assigned Bounties");
      setDescription("View Bounties that you have applied for.");
      setActiveTab("Assigned Bounties");
    }
    if (section === "Services") {
      setTitle("Find a Service");
      setDescription(
        "Skip posting a Bounty and hire one of our top Bounty Hunters directly."
      );
      setActiveTab("Services");
    }
  }, [section])
  

  return (
    <>
      <Container sx={{containerType:"inline-size"}} maxWidth="md">
        <BountiesHeaders
          title={title}
          description={description}
        ></BountiesHeaders>
        <div
          style={{
            display: "flex",
            gap: "1em",
            flexGrow: 1,
            justifyContent: "flex-start",
            marginTop: "10px",
            paddingBottom: "5px",
            marginBottom: "5px",
            borderBottom: "0.23rem solid #aaaaaa",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <Typography
            sx={{
              mr: "2px",
              cursor: "pointer",
              flexShrink:"0",
              pr:"1em",
              fontSize: "2cqmax",
              borderRight:"0.14em solid gray",
              color:`${activeTab=="Bounties"? "#ffffff":"#aaaaaa"}`
            }}
            color="primary"
            onClick={() => {
              setSection("All Bounties");
            }}
          >
            All Bounties
          </Typography>
          <Typography
            sx={{
              mx: "2px",
              cursor: "pointer",
              flexShrink:"0",
              pr:"1em",
              fontSize: "2cqmax",
              borderRight:"0.14em solid gray",
              color:`${activeTab=="Posted Bounties"? "#ffffff":"#aaaaaa"}`
            }}
            color="primary"
            onClick={() => {
              setSection("Posted Bounties");
            }}
          >
            Posted Bounties
          </Typography>
          <Typography
            sx={{
              mx: "2px",
              pr:"1em",
              cursor: "pointer",
              flexShrink:"0",
              fontSize: "2cqmax",
              borderRight:"0.14em solid gray",
              color:`${activeTab=="Assigned Bounties"? "#ffffff":"#aaaaaa"}`
            }}
            color="primary"
            onClick={() => {
              setSection("Assigned Bounties");
            }}
          >
            Assigned Bounties
          </Typography>
          <Typography
            sx={{
              mx: "2px",
              pr:"1em",
              cursor: "pointer",
              flexShrink:"0",
              fontSize: "2cqmax",
              color:`${activeTab=="Services"? "#ffffff":"#aaaaaa"}`
            }}
            color="primary"
            onClick={() => {
              setSection("Services");
            }}
          >
            Services
          </Typography>
        </div>
        {title == "Bounties" && <ServicesSection />}
      </Container>
    </>
  );
};

export default Bounty;
