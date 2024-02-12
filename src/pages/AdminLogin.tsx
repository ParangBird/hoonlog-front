import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
type Props = {}

const doLogin = () => {
    console.log("login!!");
}
export default function About({}: Props) {
  return (
    <>
        Are you Admin? <p></p> <br/><br/><br/><br/><br/>
        <TextField
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onClick={doLogin}
        />
        <p></p><br/>
        <Button variant="contained" endIcon={<SendIcon />}>
            LOGIN
        </Button>           
    </>        
  )
}