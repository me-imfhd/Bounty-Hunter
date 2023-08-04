import {Typography,Box, Avatar } from "@mui/material"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
const ServicesCard = () => {
  return (
    <>
      <Box sx={{bgcolor:"#212121",borderRadius:"10px",":hover":{boxShadow:"4"}}}>
        <img style={{objectFit:"cover", inlineSize:"100%",height:"10em",borderRadius: "3px 3px 0px 0px" }} src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
        <Box sx={{margin:"1.5em"}} >
          <Box sx={{display:"flex",gap:"1em"}}>
            <Typography sx={{fontSize:"1.45em"}} color="hsl(112, 31%, 49%)" >$2700</Typography>
            <Typography sx={{fontSize:"1.45em"}} color="#aaaaaa" >@270K</Typography>
          </Box>
          <Typography sx={{fontSize:"1.45em",my:"0.7em"}} color="#eeeeee">custom</Typography>
          <Typography sx={{fontSize:"1.3em" ,pb:"1em",borderBottom:"1px solid gray" }} color="#aaaaaa"  > A top Bounty Hunter will create a ChatGPT clone for you that can answer questions...</Typography>
          <Box sx={{mt:"1em",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{display:"flex", gap:"1em",alignItems:"center"}}>
              <Avatar src={""} sx={{ width: 24, height: 24 }} ></Avatar>
              <Typography color="#aaaaaa">replit</Typography>
            </Box>
            <Box sx={{display:"flex",gap:"0.5em",alignItems:"center"}}>
              <PeopleOutlineIcon fontSize="large"></PeopleOutlineIcon>
              <Typography color="#aaaaaa">17</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ServicesCard

