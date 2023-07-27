import { Button,Box } from '@mui/material'

const BountiesHeaders
 // eslint-disable-next-line react/prop-types
 = ({title, description}) => {
  return (
  <div>
    <Box sx={{display:{xs:"block",sm:"block",md:"flex",lg:"flex"}, justifyContent:"space-between", alignItems:"flex-start",marginTop: "50px",}}>
      <Box
        sx={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-between",
          
          marginBottom: "10px",
        }}
      >
        <Box sx={{ fontSize: {xs: "3.2em", sm: "3.5em", md: "3.6em",lg:"4em"}, fontWeight: "600", color:"#ffffff" }}>{title}</Box>
        <Box sx={{ fontSize:{xs: "1.3em", sm: "1.8em", md: "2em"}, fontWeight: "600" }}>
          {description}
        </Box>
      </Box>
      <Box>
        <Button sx={{ fontSize:{xs: "1.2em", sm: "1.4em", md: "1.6em",lg:"1.8em"},marginTop:"0.5em"}} variant="contained">
            Create Bounty
        </Button>
      </Box>
    </Box>
    </div>
  )
}

export default BountiesHeaders
