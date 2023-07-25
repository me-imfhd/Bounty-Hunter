import { Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Appbar = () => {
  const navigate = useNavigate();
  return <>
    <Paper elevation={4} square={true} sx={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:"10px", position:"sticky", top:"0px", backgroundColor:"hsl(345, 6%, 13%)"}}>
      <Typography sx={{cursor:"pointer",color:"#eeeeee",textShadow:"1px 1px #1976d2"}}variant="h3" onClick={()=>{navigate("/")}}>TASKMATE</Typography>
      <div>
        <Button sx={{fontSize:"1.5rem", mx:"2px"}} variant="outlined" onClick={()=>{}} >Get Started</Button>
        <Button sx={{fontSize:"1.5rem", mx:"2px"}} variant="outlined" onClick={()=>{}}>Create Bounty</Button>
        <Button sx={{fontSize:"1.5rem", mx:"2px"}} variant="outlined" onClick={()=>{navigate("/signup")}}>SignUp</Button>
        <Button sx={{fontSize:"1.5rem", mx:"2px"}} variant="contained" onClick={()=>{navigate("/login")}}>LogIn</Button>
      </div>
    </Paper>
  </>;
};

export default Appbar;
