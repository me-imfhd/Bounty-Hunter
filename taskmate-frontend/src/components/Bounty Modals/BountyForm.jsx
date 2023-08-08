import {Box, Modal, Fade, Typography, IconButton, TextField, Backdrop, Button, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {BASE_URL} from "../../config"
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { createBounty, createBountyForm } from "../../store/atoms/modal";
import { sectionRedirect } from "../../store/atoms/redirect";
import { userState } from "../../store/atoms/user";

function BountyForm() {
  const setUser = useSetRecoilState(userState);
  const setSection = useSetRecoilState(sectionRedirect);
  const setCreateOpen = useSetRecoilState(createBounty)
  const [formOpen, setFormOpen] = useRecoilState(createBountyForm)
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [commMethod, setCommMethod] = useState("Email");
  const [handle, setHandle] = useState("Email");
  const [amount, setAmount] = useState();

  async function handlePostBounty(){
    try{
      const res = await axios.post(`${BASE_URL}/bounty/post`,{
        title: title,
        price: amount,
        description: description,
        completionTime: date,
        communication: commMethod,
        communicationHandle: handle,
      },{
        headers: {
          "Content-Type":"application/json",
          Authorization: "Bearer " +localStorage.getItem("token")
        }
      })
      const data = res.data;
      
      setFormOpen(false);
      setCreateOpen(false);
      setSection("Posted Bounties")
      enqueueSnackbar(data.msg, {variant:"success"});
    }catch(err){
      if(err.response){
        if(err.response.status == 403){
          setFormOpen(false);
          setCreateOpen(false);
          setUser({
            isLoading:false,
            name: null
          })
          navigate("/login");
          enqueueSnackbar(err.response.data.msg, {variant: "error"});
        }
      }else{
        console.error(err);
      }
    }
  }
  return (
    <>
      <Modal sx={{overflowY: "auto", scrollBehavior:"smooth"}}
        keepMounted
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
        }}
        closeAfterTransition
        slots={{
          backdrop: Backdrop,
        }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={formOpen}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#212121",
              border: "2px solid #000",
              boxShadow: "15px 15px 30px #121212",
              p: 2,
              width: "clamp(300px, 80%, 450px)",
              containerType: "inline-size",
            }}>
            <Box
              id="transition-modal-title"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1em",
              }}>
              <Typography
                sx={{
                  fontSize: "4cqi",
                }}
                color="#ffffff"
                component="h2">
                Create a Bounty
              </Typography>
              <IconButton
                onClick={() => {
                  setFormOpen(false);
                }}>
                <CloseIcon
                  sx={{
                    color: "#eeeeee",
                  }}
                  fontSize="large"></CloseIcon>
              </IconButton>
            </Box>
            <Box id="transition-modal-description">
              <Box
                sx={{
                  borderBottom: "1px solid #aaaaaa",
                  paddingBottom: "2cqi",
                }}>
                <Typography fontSize="1.8cqmax">Bounty Title</Typography>
                <TextField 
                  required
                  onChange={(e)=>{setTitle(e.target.value)}}
                  sx={{
                    marginY: "1cqi",
                    bgcolor: "hsl(0, 0%, 16%)",
                    width: "100%",
                  }}
                  inputProps={{
                    style: {
                      color: "#dddddd",
                      fontSize:"1.8cqmax"
                    },
                  }}
                  placeholder= "Give Your Bounty a descriptive name"
                  size="small"></TextField>
                <Typography fontSize="1.8cqmax">Target Completion Date</Typography>
                <TextField
                  required
                  onChange={(e)=>{setDate(e.target.value)}}
                  sx={{
                    marginY: "1cqi",
                    bgcolor: "hsl(0, 0%, 16%)",
                    width: "100%",
                  }}
                  type="date"
                  inputProps={{
                    style: {
                      color: "#dddddd",
                      fontSize:"1.8cqmax"
                    },
                  }}
                  size="small"></TextField>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1em",
                  }}>
                  <Box
                    sx={{
                      flex: "1 1 180px",
                    }}>
                    <Typography fontSize="1.8cqmax">Communication Method</Typography>
                    <RadioGroup row defaultValue="Email" onChange={(e)=>{setCommMethod(e.target.value)}}>
                      <FormControlLabel value="Email" control={<Radio sx={{"& .MuiSvgIcon-root":{fontSize:"18px"}}}/>} label="Email" />
                      <FormControlLabel value="Discord" control={<Radio sx={{"& .MuiSvgIcon-root":{fontSize:"18px"}}}/>} label="Discord" />
                    </RadioGroup>
                  </Box>
                  <Box
                    sx={{
                      flex: "1 1 180px",
                    }}>
                    <Typography fontSize="1.8cqmax">{commMethod}</Typography>
                    <TextField
                      required
                      onChange={(e)=>{setHandle(e.target.value)}}
                      sx={{
                        marginY: "1cqi",
                        bgcolor: "hsl(0, 0%, 16%)",
                        width: "100%",
                      }}
                      inputProps={{
                        style: {
                          color: "#dddddd",
                          fontSize:"1.8cqmax"
                        },
                      }}
                      fontSize="1.8cqmax"
                      size="small"></TextField>
                  </Box>
                </Box>
                <Typography fontSize="1.8cqmax">Descriptions</Typography>
                <TextareaAutosize
                 required
                  onChange={(e)=>{setDescription(e.target.value)}}
                  style={{fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", width: "100%", minHeight: "13%", backgroundColor: "hsl(0,0%,16%)", color: "#cccccc"}}
                  maxRows={4}
                  placeholder="Be specific about what you want"
                  defaultValue="# Problem Description &#10;&#10;# Acceptance Criteria &#10;&#10;# Technical Details&#10;"
                />
                <Typography fontSize="1.8cqmax">Bounty Amount</Typography>
                <TextField
                  required
                  onChange={(e)=>{setAmount(e.target.value)}}
                  sx={{
                    marginY: "1cqi",
                    bgcolor: "hsl(0, 0%, 16%)",
                    width: "100%",
                  }}
                  inputProps={{
                    style: {
                      fontSize:"1.8cqmax",
                      color: "#dddddd",
                    },
                  }}
                  size="small"></TextField>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5em",
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      maxWidth: "240px",
                    }}>
                    <Typography
                      sx={{
                        flexGrow: "1",
                      }} fontSize="1.525cqmax">
                      Solver Payout
                    </Typography>
                    <Typography fontSize="1.525cqmax">@45,000&nbsp;</Typography>
                    <Typography fontSize="1.525cqmax">($450.00)</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      maxWidth: "240px",
                    }}>
                    <Typography
                      sx={{
                        flexGrow: "1",
                      }} fontSize="1.525cqmax">
                      Bounty Marketplace Fee
                    </Typography>
                    <Typography fontSize="1.525cqmax">@5,000&nbsp;</Typography>
                    <Typography fontSize="1.525cqmax">($50.00)</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      maxWidth: "240px",
                      borderTop: "1px solid #aaaaaa",
                      paddingTop: "0.5em",
                    }}>
                    <Typography
                      sx={{
                        flexGrow: "1",
                      }} fontSize="1.525cqmax">
                      Bounty Amount
                    </Typography>
                    <Typography fontSize="1.525cqmax">@50,000&nbsp;</Typography>
                    <Typography fontSize="1.525cqmax">($500.00)</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography sx={{my: "2em"}}>By posting a Bounty, you agree to the Terms. You’ll get rights to the work when Cycles transfer after completion.</Typography>
              <Box sx={{display: "flex",flexWrap:"wrap",gap:"2cqi",justifyContent:"space-between"}}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                  <Button
                    onClick={() => {
                      setFormOpen(false);
                    }}
                    style={{backgroundColor: "hsl(0, 0%, 16%"}}
                    sx={{color: "#ffffff", fontSize:"0.9em"}}
                    size="small"
                    variant="contained">
                    Choose a Template
                  </Button>
                </Box>
                <Box sx={{display:"flex",gap:"2cqi"}}>
                  <Button
                    style={{backgroundColor: "hsl(0, 0%, 16%"}}
                    sx={{color: "#ffffff", fontSize:"0.9em"}}
                    size="small"
                    variant="contained">
                    Buy Custom Cycle Amounts
                  </Button>
                  <Button
                    
                    onClick={()=>{handlePostBounty()}}
                    sx={{color: "#ffffff", fontSize:"0.9em"}}
                    size="small"
                    variant="contained">
                    Post
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default BountyForm;
