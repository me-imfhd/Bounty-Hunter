import { Container, Paper, Typography } from "@mui/material"
const Login = () => {
  return (
    <>
        <Container maxWidth="sm">
            <Paper sx={{mt:"8rem"}}>
                <Typography variant="h3">Welcome to TASKMATE, Login Here </Typography>
            </Paper>
        </Container>
    </>
  )
}

export default Login