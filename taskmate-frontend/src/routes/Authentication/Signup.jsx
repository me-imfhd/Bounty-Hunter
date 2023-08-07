import { Container, Paper, Typography, Box, TextField, Checkbox, Button, Link } from "@mui/material"
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../config";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/atoms/user";
const Signup = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [fullName, setfullName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [rememberMe, setRememberMe] = useState(false);
  async function handleSignup(){
    try{
      const res = await axios.post(`${BASE_URL}/auth/signup`,{
        fullName,
        username,
        password 
      },{
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = res.data;
      if(data.username){
        setUser({
        isLoading:false,
        name: data.username
      })
      }
      else{
        setUser({
        isLoading:false,
        name: null
      })
      }
      localStorage.setItem("token", data.token);
      navigate("/");
      enqueueSnackbar(data.msg, {variant:"success"})
    }
    catch (err){
      console.error(err)
      setUser({
        isLoading:false,
        name: null
      })
      enqueueSnackbar(err.response.data.msg, {variant: "error"});
    }
    
  }
  return (
    <>
        <Container sx={{width:{xs:"30em",sm:"30em", md:"40em",lg:"40em"}}}>
            <Paper sx={{mt:"8rem",py:"3em",px:"3em", display:"flex", flexDirection:"column", alignItems:"center", bgcolor:"#212121",color:"#eeeeee"}}>
                <Box sx={{fontSize:"2em", display:"flex", flexDirection:"column"}}>
                <Typography sx={{ fontSize: {xs:'2.5rem', sm:"2.5rem",md:"3rem", lg:"2.7rem"}, mb:"2rem"}} >Welcome to TASKMATE, Signup Here </Typography>
                    <TextField onChange={(e)=>{setfullName(e.target.value)}} sx={{bgcolor:"hsl(0, 0%, 16%)" , width:"100%", marginBottom:"0.5em"}} inputProps={{style:{color:"#eeeeee", fontSize:"1.5em"}}} InputLabelProps={{ style: { color: '#cccccc',fontSize:"1.5rem"} }} label="Full Name"  variant="filled"  ></TextField>
                    <TextField onChange={(e)=>{setUsername(e.target.value)}} sx={{bgcolor:"hsl(0, 0%, 16%)" , width:"100%", marginBottom:"0.5em"}} inputProps={{style:{color:"#eeeeee", fontSize:"1.5em"}}} InputLabelProps={{ style: { color: '#cccccc',fontSize:"1.5rem"} }} label="Username" variant="filled"  ></TextField>
                    <TextField onChange={(e)=>{setPassword(e.target.value)}} sx={{bgcolor:"hsl(0, 0%, 16%)", width:"100%"}} inputProps={{style:{color:"#eeeeee", fontSize:"1.5em"}}} InputLabelProps={{ style: { color: '#cccccc',fontSize:"1.5rem" } }} label="Password" variant="filled" type="password"  ></TextField>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                      <Box sx={{display:"flex",alignItems:"center",my:"0.4em" }}>
                        <Checkbox onChange={(e)=>{setRememberMe(e.target.checked) }}></Checkbox>
                        <Typography sx={{fontSize:{xs:"1rem",sm:"1.25rem", md:"1.25rem",lg:"1.5rem"}}} variant="h6">Remember me</Typography>
                      </Box>
                    </Box>
                    <Button disabled={(!username || !password) || !fullName} onClick={()=>{handleSignup()}} sx={{fontSize:"1.4rem",mt:"0.8em"}}variant="contained">Signup</Button>
                </Box>
                <Box sx={{mt:"1em"}}>
                  <Typography sx={{fontSize:{xs:"1rem",sm:"1.125rem", md:"1.125rem",lg:"1.275rem" }}} variant="h6"> Already have an account? <Link sx={{cursor:"pointer"}} onClick={()=>{navigate("/login")}}>LogIn here</Link></Typography>
                </Box>
            </Paper>
        </Container>
    </>
  )
}

export default Signup