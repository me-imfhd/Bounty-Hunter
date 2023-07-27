/* eslint-disable react/no-unescaped-entities */
import { Container, Paper, Typography, Box, TextField, Checkbox, Button, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
        <Container sx={{width:{xs:"30em",sm:"30em", md:"40em",lg:"40em"}}}>
            <Paper sx={{mt:"8rem",py:"3em",px:"3em", display:"flex", flexDirection:"column", alignItems:"center", bgcolor:"#212121",color:"#eeeeee"}}>
                <Box sx={{fontSize:"2em", display:"flex", flexDirection:"column"}}>
                <Typography sx={{ fontSize: {xs:'2.5rem', sm:"2.5rem",md:"3rem", lg:"2.7rem"}, mb:"2rem"}} >Welcome to TASKMATE, Login Here </Typography>
                    <TextField sx={{bgcolor:"hsl(0, 0%, 16%)" , width:"100%", marginBottom:"0.5em"}} inputProps={{style:{color:"#eeeeee", fontSize:"1.5em"}}} InputLabelProps={{ style: { color: '#cccccc',fontSize:"1.5rem"} }} label="Username" variant="filled"  ></TextField>
                    <TextField sx={{bgcolor:"hsl(0, 0%, 16%)", width:"100%"}} inputProps={{style:{color:"#eeeeee", fontSize:"1.5em"}}} InputLabelProps={{ style: { color: '#cccccc',fontSize:"1.5rem" } }} label="Password" variant="filled" type="password"  ></TextField>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                      <Box sx={{display:"flex",alignItems:"center",my:"0.4em" }}>
                        <Checkbox></Checkbox>
                        <Typography sx={{fontSize:{xs:"1rem",sm:"1.25rem", md:"1.25rem",lg:"1.5rem"}}} variant="h6">Remember me</Typography>
                      </Box>
                      <Link sx={{cursor:"pointer", fontSize:{xs:"1rem",sm:"1.125rem", md:"1.125rem",lg:"1.275rem" }}}>Forgot Passoword?</Link> 
                    </Box>
                    <Button sx={{fontSize:"1.4rem",mt:"0.8em"}}variant="contained">Login</Button>
                </Box>
                <Box sx={{mt:"1em"}}>
                  <Typography sx={{fontSize:{xs:"1rem",sm:"1.125rem", md:"1.125rem",lg:"1.275rem" }}} variant="h6"> Don't have an account? <Link sx={{cursor:"pointer"}} onClick={()=>{navigate("/signup")}}>Regesiter here</Link></Typography>
                </Box>
            </Paper>
        </Container>
    </>
  )
}

export default Login