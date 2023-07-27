import {Paper, Typography, Button, Grid, Box, IconButton, MenuItem, Menu} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Appbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper
      elevation={4}
      square={true}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        position: "sticky",
        top: "0px",
        backgroundColor: "#212121",
      }}
    >
      <Typography
        sx={{
          cursor: "pointer",
          color: "#eeeeee",
          textShadow: "1px 1px #1976d2",
          fontSize: { xs: '1.8rem', sm: '2rem', md: '3rem' }, // Adjust the font size for different screen sizes
        }}
        variant="h3"
        onClick={() => {
          navigate("/");
        }}
      >
        TASKMATE
      </Typography>
      <Box sx={{display:{xs:"flex", sm:"flex", md:"none", lg:"none"}}}>
        <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            variant="outlined"
            onClick={() => {}}
          >
            Get Started
          </Button>
        <IconButton sx={{color:"#eeeeee"}} onClick={(e)=>{handleClick(e)}}>
          <MenuIcon fontSize='large'/>
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={()=>{handleClose()}}
      >
        <MenuItem sx={{fontSize:"1.5em"}}onClick={()=>{handleClose()}}>Create Bounty</MenuItem>
        <MenuItem sx={{fontSize:"1.5em"}}onClick={()=>{navigate("signup");handleClose() }}>Sign Up</MenuItem>
        <MenuItem sx={{fontSize:"1.5em"}}onClick={()=>{navigate("/login");handleClose()}}>Log In</MenuItem>
      </Menu>
      </Box>

      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        gap={1}
        sx={{ flexGrow: 1 , display:{xs:"none",sm:"none" , md:"flex", lg:"flex"}}}
      >
        <Grid item>
          <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            variant="outlined"
            onClick={() => {}}
          >
            Create Bounty
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            variant="outlined"
            onClick={() => {}}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            variant="outlined"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
          >
            LogIn
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Appbar;
