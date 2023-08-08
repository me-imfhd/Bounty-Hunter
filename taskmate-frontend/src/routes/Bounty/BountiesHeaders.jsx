import { Button, Box } from '@mui/material'
import { useState } from 'react';
import CreateBounty from '../../components/Bounty Modals/CreateBounty';
import { useRecoilState } from 'recoil';
import { createBounty } from "../../store/atoms/modal";
// eslint-disable-next-line react/prop-types
const BountiesHeaders = ({ title, description }) => {
  const [open, setOpen] = useRecoilState(createBounty)
  return (
    <div>
      <Box sx={{ display: { xs: "block", sm: "block", md: "flex", lg: "flex" }, justifyContent: "space-between", alignItems: "flex-start", marginTop: "50px", }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "10px"
          }}
        >
          <Box sx={{ fontSize: "6cqmax", fontWeight: "600", color: "#ffffff" }}>{title}</Box>
          <Box sx={{ fontSize: "2.2cqmax", fontWeight: "600" }}>
            {description}
          </Box>
        </Box>
        <Box>
          <Button sx={{ fontSize: "2.2cqmax", marginTop: "1em" }} variant="contained" onClick={() => { setOpen(true) }}>
            Create Bounty
          </Button>
          {open && <CreateBounty/>}
        </Box>
      </Box>
    </div>
  )
}

export default BountiesHeaders
