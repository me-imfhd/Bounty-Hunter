/* eslint-disable react/no-unescaped-entities */
import { Container, Paper, Typography, Box, TextField, Checkbox, Button, Link } from "@mui/material"
import { BASE_URL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useSnackbar } from 'notistack';
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/atoms/user";

const Login = () => {
  const setUser = useSetRecoilState(userState);
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  async function handleLogin(){
    let data;
    try{
      const res = await axios.post(`${BASE_URL}/auth/login`,{
        username,
        password,
        rememberMe 
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
                <Typography sx={{ fontSize: {xs:'2.5rem', sm:"2.5rem",md:"3rem", lg:"2.7rem"}, mb:"2rem"}} >Welcome to TASKMATE, Login Here </Typography>
                    <TextField onChange={(e)=>{setUsername(e.target.value)}} sx={{bgcolor:"hsl(0, 0%, 16%)" , width:"100%", marginBottom:"0.5em"}} inputProps={{style:{color:"#eeeeee", fontSize:"1.5em"}}} InputLabelProps={{ style: { color: '#cccccc',fontSize:"1.5rem"} }} label="Username" variant="filled"  ></TextField>
                    <TextField onChange={(e)=>{setPassword(e.target.value)}} sx={{bgcolor:"hsl(0, 0%, 16%)", width:"100%"}} inputProps={{style:{color:"#eeeeee", fontSize:"1.5em"}}} InputLabelProps={{ style: { color: '#cccccc',fontSize:"1.5rem" } }} label="Password" variant="filled" type="password"  ></TextField>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                      <Box sx={{display:"flex",alignItems:"center",my:"0.4em" }}>
                        <Checkbox onChange={(e)=>{setRememberMe(e.target.checked) }}></Checkbox>
                        <Typography sx={{fontSize:{xs:"1rem",sm:"1.25rem", md:"1.25rem",lg:"1.5rem"}}} variant="h6">Remember me</Typography>
                      </Box>
                      <Link sx={{cursor:"pointer", fontSize:{xs:"1rem",sm:"1.125rem", md:"1.125rem",lg:"1.275rem" }}}>Forgot Passoword?</Link> 
                    </Box>
                    <Button disabled={!username || !password} onClick={()=>{handleLogin()}}sx={{fontSize:"1.4rem",mt:"0.8em"}}variant="contained">Login</Button>
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