import { Button } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Template = ({title, description}) => {
  return (
    <>
    <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "100px",
            marginBottom: "10px",
          }}
        >
          <div style={{ fontSize: "4em", fontWeight: "600" }}>{title}</div>
          <Button sx={{ fontSize: "1.5em" }} variant="contained">
            Create Bounty
          </Button>
        </div>
        <div style={{ fontSize: "1.5em", fontWeight: "600" }}>
          {description}
        </div>
    </>
  )
}

export default Template