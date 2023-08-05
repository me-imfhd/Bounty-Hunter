import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import {IconButton} from "@mui/material";
import {useState} from "react";
import BountyForm from "./BountyForm";
// eslint-disable-next-line react/prop-types
export default function CreateBounty({open, setOpen}) {
  const [createBountyForm, setCreateBountyForm] = useState(false);
  return (
    <div>
      <Modal
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
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#212121",
              border: "2px solid #000",
              boxShadow: "15px 15px 30px #121212",
              p: 2,
              width: "clamp(250px, 80%, 450px)",
              containerType: "inline-size",
            }}>
            <Box
              id="transition-modal-title"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Typography
                sx={{
                  fontSize: "6cqi",
                }}
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
            <Box
              sx={{
                mt: "1em",
                fontSize: "1.6em",
                overflow: "auto",
              }}
              id="transition-modal-description">
              <Typography
                sx={{
                  fontSize: "3.2cqi",
                  mb: "1em",
                }}>
                {" "}
                Start with a pre-filled template or create a custom Bounty.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "0.5em",
                  flexWrap: "wrap",
                }}>
                <Box
                  onClick={() => {
                    setCreateBountyForm(true);
                  }}
                  sx={{
                    bgcolor: "hsl(0, 0%, 16%)",
                    flex: "1 1 200px",
                    borderRadius: "5px",
                    padding: "1em",
                    cursor: "pointer",
                    ":hover": {
                      boxShadow: "4",
                    },
                  }}>
                  <Typography
                    sx={{
                      fontSize: "4cqi",
                    }}
                    color="#ffffff">
                    Ai Tools
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#eeeeee">
                    Get a custom bot, automated stytem, or AI app.
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#aaaaaa">
                    Typically ~$500.00
                  </Typography>
                </Box>
                <Box
                  onClick={() => {
                    setCreateBountyForm(true);
                  }}
                  sx={{
                    bgcolor: "hsl(0, 0%, 16%)",
                    flex: "1 1 200px",
                    borderRadius: "5px",
                    padding: "1em",
                    cursor: "pointer",
                    ":hover": {
                      boxShadow: "4",
                    },
                  }}>
                  <Typography
                    sx={{
                      fontSize: "4cqi",
                    }}
                    color="#ffffff">
                    Ai Tools
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#eeeeee">
                    Get a custom bot, automated stytem, or AI app.
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#aaaaaa">
                    Typically ~$500.00
                  </Typography>
                </Box>
                <Box
                  onClick={() => {
                    setCreateBountyForm(true);
                  }}
                  sx={{
                    bgcolor: "hsl(0, 0%, 16%)",
                    flex: "1 1 200px",
                    borderRadius: "5px",
                    padding: "1em",
                    cursor: "pointer",
                    ":hover": {
                      boxShadow: "4",
                    },
                  }}>
                  <Typography
                    sx={{
                      fontSize: "4cqi",
                    }}
                    color="#ffffff">
                    Ai Tools
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#eeeeee">
                    Get a custom bot, automated stytem, or AI app.
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#aaaaaa">
                    Typically ~$500.00
                  </Typography>
                </Box>
                <Box
                  onClick={() => {
                    setCreateBountyForm(true);
                  }}
                  sx={{
                    bgcolor: "hsl(0, 0%, 16%)",
                    flex: "1 1 200px",
                    borderRadius: "5px",
                    padding: "1em",
                    cursor: "pointer",
                    ":hover": {
                      boxShadow: "4",
                    },
                  }}>
                  <Typography
                    sx={{
                      fontSize: "4cqi",
                    }}
                    color="#ffffff">
                    Ai Tools
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#eeeeee">
                    Get a custom bot, automated stytem, or AI app.
                  </Typography>
                  <Typography
                    sx={{
                      mt: "0.5em",
                      fontSize: "3cqi",
                    }}
                    color="#aaaaaa">
                    Typically ~$500.00
                  </Typography>
                </Box>
              </Box>
              <Box >
                {createBountyForm && (
                  <BountyForm
                    open={createBountyForm}
                    setOpen={setCreateBountyForm}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
