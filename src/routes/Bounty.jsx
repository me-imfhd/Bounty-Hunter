import { Container, Typography } from "@mui/material";
import BountiesHeaders from "../components/BountiesHeaders";
import { useState } from "react";
import ServicesSection from "./Services/ServicesSection";
const Bounty = () => {
  const [title, setTitle] = useState("Bounties");
  const [description, setDescription] = useState(
    "Work with Top Taskmates to actualize your dream project."
  );
  function handleSection(section) {
    if (section === "All Bounties") {
      setTitle("Bounties");
      setDescription(
        "Work with Top Taskmates to actualize your dream project."
      );
    }
    if (section === "Posted Bounties") {
      setTitle("Your Posted Bounties");
      setDescription("View Bounties that you have posted.");
    }
    if (section === "Assigned Bounties") {
      setTitle("Your Assigned Bounties");
      setDescription("View Bounties that you have applied for.");
    }
    if (section === "Services") {
      setTitle("Find a Service");
      setDescription(
        "Skip posting a Bounty and hire one of our top Bounty Hunters directly."
      );
    }
  }
  return (
    <>
      <Container maxWidth="md">
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
            borderBottom: "0.23rem solid gray",
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
              fontSize: { xs: "1.2em", sm: "1.4em", md: "1.6em", lg: "1.8em" },
              borderRight:"0.14em solid gray"
            }}
            color="primary"
            onClick={() => {
              handleSection("All Bounties");
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
              fontSize: { xs: "1.2em", sm: "1.4em", md: "1.6em", lg: "1.8em" },
              borderRight:"0.14em solid gray"
            }}
            color="primary"
            onClick={() => {
              handleSection("Posted Bounties");
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
              fontSize: { xs: "1.2em", sm: "1.4em", md: "1.6em", lg: "1.8em" },
              borderRight:"0.14em solid gray"
            }}
            color="primary"
            onClick={() => {
              handleSection("Assigned Bounties");
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
              fontSize: { xs: "1.2em", sm: "1.4em", md: "1.6em", lg: "1.8em" }
            }}
            color="primary"
            onClick={() => {
              handleSection("Services");
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
