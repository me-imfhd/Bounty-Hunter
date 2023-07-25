import { Button, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"80vh"}}>
      <Typography variant="h1"sx={{fontSize:"15em", fontWeight:"700",color:"#231f20",cursor:"pointer",textShadow:"2px 2px #1976d2"}}>TASKMATE</Typography>
      <div style={{fontSize:"4.25em", fontWeight:"700",cursor:"pointer",textShadow:"2px 2px #1976d2"}}>Your Idea Catalyst</div>
      <Button sx={{mt:"2em", fontSize:"2em"}} variant="contained" onClick={()=>{navigate("/bounty")}}>Go to Bounties  <span> <ArrowOutwardRoundedIcon></ArrowOutwardRoundedIcon></span></Button>
    </div>
    </>
  )
}

export default LandingPage