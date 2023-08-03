import {Box, Modal, Fade, Typography, IconButton, TextField, Backdrop, Button, MenuItem} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
// eslint-disable-next-line react/prop-types
function BountyForm({open, setOpen}) {

  return (
    <>
      <Modal sx={{overflowY: "scroll"}}
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
              top: "55%",
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
                <Typography>Bounty Title</Typography>
                <TextField
                  sx={{
                    marginY: "1cqi",
                    bgcolor: "hsl(0, 0%, 16%)",
                    width: "100%",
                  }}
                  inputProps={{
                    style: {
                      color: "#eeeeee",
                    },
                  }}
                  size="small"></TextField>
                <Typography>Target Completion Date</Typography>
                <TextField
                  sx={{
                    marginY: "1cqi",
                    bgcolor: "hsl(0, 0%, 16%)",
                    width: "100%",
                  }}
                  type="date"
                  inputProps={{
                    style: {
                      color: "#eeeeee",
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
                    <Typography>Communication Method</Typography>
                    <TextField
                      select
                      defaultValue="Email"
                      sx={{
                        marginY: "1cqi",
                        bgcolor: "hsl(0, 0%, 16%)",
                        width: "100%",
                        color:"#eeeeee"
                      }}

                      inputProps={{
                        style: {
                          color: "#eeeeee",
                        },
                      }}
                      size="small">
                        <MenuItem value="Email">
                            Email
                        </MenuItem>
                        <MenuItem value="Discord">
                            Discord
                        </MenuItem>
                      </TextField>
                  </Box>
                  <Box
                    sx={{
                      flex: "1 1 180px",
                    }}>
                    <Typography>Email</Typography>
                    <TextField
                      sx={{
                        marginY: "1cqi",
                        bgcolor: "hsl(0, 0%, 16%)",
                        width: "100%",
                      }}
                      inputProps={{
                        style: {
                          color: "#eeeeee",
                        },
                      }}
                      size="small"></TextField>
                  </Box>
                </Box>
                <Typography>Descriptions</Typography>
                <TextareaAutosize
                  style={{fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif", width: "100%", minHeight: "13%", backgroundColor: "hsl(0,0%,16%)", color: "#cccccc"}}
                  maxRows={4}
                  placeholder="Be specific about what you want"
                  defaultValue="# Problem Description &#10;&#10;# Acceptance Criteria &#10;&#10;# Technical Details&#10;"
                />
                <Typography>Bounty Amount</Typography>
                <TextField
                  sx={{
                    marginY: "1cqi",
                    bgcolor: "hsl(0, 0%, 16%)",
                    width: "100%",
                  }}
                  inputProps={{
                    style: {
                      color: "#eeeeee",
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
                      maxWidth: "220px",
                    }}>
                    <Typography
                      sx={{
                        flexGrow: "1",
                      }}>
                      Solver Payout
                    </Typography>
                    <Typography>@45,000</Typography>
                    <Typography>($450.00)</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      maxWidth: "220px",
                    }}>
                    <Typography
                      sx={{
                        flexGrow: "1",
                      }}>
                      Bounty Marketplace Fee
                    </Typography>
                    <Typography>@5,000</Typography>
                    <Typography>($50.00)</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      maxWidth: "220px",
                      borderTop: "1px solid #aaaaaa",
                      paddingTop: "0.5em",
                    }}>
                    <Typography
                      sx={{
                        flexGrow: "1",
                      }}>
                      Bounty Amount
                    </Typography>
                    <Typography>@50,000</Typography>
                    <Typography>($500.00)</Typography>
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
                    sx={{color: "#eeeeee"}}
                    size="small"
                    variant="contained">
                    Choose a Template
                  </Button>
                </Box>
                <Box sx={{display:"flex",gap:"2cqi"}}>
                  <Button
                    style={{backgroundColor: "hsl(0, 0%, 16%"}}
                    sx={{color: "#eeeeee"}}
                    size="small"
                    variant="contained">
                    Buy Custom Cycle Amounts
                  </Button>
                  <Button
                    sx={{color: "#eeeeee"}}
                    size="small"
                    variant="contained">
                    Buy 50K Cycles
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
