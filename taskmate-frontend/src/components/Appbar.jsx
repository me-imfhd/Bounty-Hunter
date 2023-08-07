import { Paper, Typography, Button, Grid, Box, IconButton, MenuItem, Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import CreateBounty from './Bounty Modals/CreateBounty';
import { enqueueSnackbar } from 'notistack';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { usersName } from '../store/selectors/user/usersName';
import { isUserLoading } from '../store/selectors/user/isUserLoading';
import { userState } from '../store/atoms/user';
const Appbar = () => {
  const [createBountyModal, setCreateBountyModal] = useState(false);
  const setUser = useSetRecoilState(userState);
  const userLoading = useRecoilValue(isUserLoading)
  const fullName = useRecoilValue(usersName)
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if(userLoading){
    return <> Loading...
    </>
  }  
  
  
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
      <Box sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" }, alignItems:"center" }}>
        <Button
          sx={{ fontSize: {xs:"1rem", sm:"1rem", md:"1.5rem"}, mx: "2px" }}
          style={{backgroundColor: "hsl(0, 0%, 16%",color:"#eeeeee"}}
          onClick={() => { }}
        >
          Get Started
        </Button>
        {fullName && 
          <Typography
          sx={{ fontSize: {xs:"1.2rem", sm:"1.8rem"}, mx: "2px" }}
          color="#eeeeee"
          >
            Welcome, {fullName} &#x1F44B;
          </Typography>
        }
        <IconButton sx={{ color: "#eeeeee" }} onClick={(e) => { handleClick(e) }}>
          <MenuIcon fontSize='large' />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => { handleClose() }}
        >
          <MenuItem sx={{ fontSize: "1.5em" }} onClick={() => { setCreateBountyModal(true); createBountyModal && <CreateBounty open={createBountyModal} setOpen={setCreateBountyModal} />; handleClose() }}>Create Bounty</MenuItem>
          {!fullName && <MenuItem sx={{ fontSize: "1.5em" }} onClick={() => { navigate("signup"); handleClose() }}>Sign Up</MenuItem>}
          {!fullName && <MenuItem sx={{ fontSize: "1.5em" }} onClick={() => { navigate("/login"); handleClose() }}>Log In</MenuItem>}
          {fullName && <MenuItem sx={{ fontSize: "1.5em" }} onClick={() => {setUser({
            isLoading:false,
            name: null
          });
          navigate("/");
          handleClose() }}>Log Out</MenuItem>}
        </Menu>
      </Box>

      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        gap={1}
        sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
      >
        <Grid item>
          <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            style={{backgroundColor: "hsl(0, 0%, 16%",color:"#eeeeee"}}
            onClick={() => { setCreateBountyModal(true) }}
          >
            Create Bounty
          </Button>
          {createBountyModal && <CreateBounty open={createBountyModal} setOpen={setCreateBountyModal} />}
        </Grid>
        <Grid item>
          <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            style={{backgroundColor: "hsl(0, 0%, 16%",color:"#eeeeee"}}
            onClick={() => { }}
          >
            Get Started
          </Button>
        </Grid>
        {fullName
        ?<>
          {fullName && 
          <Grid item>
              <Typography
              sx={{ fontSize: "1.8rem", mx: "2px" }}
              color="#eeeeee"
              >
                Welcome, {fullName} &#x1F44B;
              </Typography>
            </Grid>
          }
          <Grid item>
            <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
                variant="contained"
                onClick={() => {
                  localStorage.setItem("token",null);
                setUser({
                    isLoading: false,
                    userEmail: null
                })
                  enqueueSnackbar("You are logged out" )
                }}
              >
                Logout
              </Button>
          </Grid>
        </>
        :<>
          <Grid item>
          <Button
            sx={{ fontSize: "1.2rem", mx: "2px" }}
            style={{backgroundColor: "hsl(0, 0%, 16%",color:"#eeeeee"}}
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
            Login
          </Button>
        </Grid>
        </>}
        
      </Grid>
    </Paper>
  );
};

export default Appbar;
