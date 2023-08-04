import { Button, Box } from '@mui/material'
import { useState } from 'react';
import CreateBounty from './createBounty/CreateBounty';
// eslint-disable-next-line react/prop-types
const BountiesHeaders = ({ title, description }) => {
  const [createBountyModal, setCreateBountyModal] = useState(false);
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
          <Button sx={{ fontSize: "2.2cqmax", marginTop: "1em" }} variant="contained" onClick={() => { setCreateBountyModal(true) }}>
            Create Bounty
          </Button>
          {createBountyModal && <CreateBounty open={createBountyModal} setOpen={setCreateBountyModal} />}
        </Box>
      </Box>
    </div>
  )
}

export default BountiesHeaders
