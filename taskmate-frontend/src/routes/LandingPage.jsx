import { Button, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "6rem", sm: "10rem", md: "15rem" }, // Adjust the font size for different screen sizes
            fontWeight: "700",
            color: "#212121",
            cursor: "pointer",
            textShadow: "2px 2px #1976d2",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          TASKMATE
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.5rem", md: "5rem" }, // Adjust the font size for different screen sizes
            fontWeight: "700",
            cursor: "pointer",
            textShadow: "2px 2px #1976d2",
          }}
        >
          Your Idea Catalyst
        </Typography>
        <Button
          sx={{
            mt:{xs: "1rem", sm: "1.25rem", md: "2.5rem"},
            fontSize: { xs: "1rem", sm: "1.25rem", md: "2.5rem" }, // Adjust the font size for different screen sizes
          }}
          variant="contained"
          onClick={() => {
            navigate("/bounty");
          }}
        >
          Go to Bounties <span> <ArrowOutwardRoundedIcon></ArrowOutwardRoundedIcon></span>
        </Button>
      </div>
    </>
  )
}

export default LandingPage;
