import {Box, Modal, Fade, Typography, IconButton, TextField, Backdrop, Button, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {BASE_URL} from "../../config"
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function BountyForm({open, setOpen}) {
  const navigate = useNavigate();
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [date, setdate] = useState();
  const [commMethod, setcommMethod] = useState("Email");
  const [handle, sethandle] = useState("Email");
  const [amount, setamount] = useState();

  async function handlePostBounty(){
    let data;
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
      data = res.data;
    }catch(err){
      console.error(err.response.data.msg);
      enqueueSnackbar(err.response.data.msg, {variant: "error"});
    }
    setOpen(false);
    enqueueSnackbar(data.msg, {variant:"success"});
  }
  return (
    <>
      <Modal sx={{overflowY: "auto", scrollBehavior:"smooth"}}
        keepMounted
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          setOpen(false);
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
        <Fade in={open}>
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
                  setOpen(false);
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
                  onChange={(e)=>{settitle(e.target.value)}}
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
                  onChange={(e)=>{setdate(e.target.value)}}
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
                    <RadioGroup row defaultValue="Email" onChange={(e)=>{setcommMethod(e.target.value)}}>
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
                      onChange={(e)=>{sethandle(e.target.value)}}
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
                  onChange={(e)=>{setdescription(e.target.value)}}
                  style={{fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", width: "100%", minHeight: "13%", backgroundColor: "hsl(0,0%,16%)", color: "#cccccc"}}
                  maxRows={4}
                  placeholder="Be specific about what you want"
                  defaultValue="# Problem Description &#10;&#10;# Acceptance Criteria &#10;&#10;# Technical Details&#10;"
                />
                <Typography fontSize="1.8cqmax">Bounty Amount</Typography>
                <TextField
                  required
                  onChange={(e)=>{setamount(e.target.value)}}
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
                      setOpen(false);
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
                    disabled={(!title || !description) || (!date || !commMethod) || (!handle || !amount)}
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
