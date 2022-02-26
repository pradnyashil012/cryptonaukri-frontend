import {
  Box, makeStyles, Typography, TextField, OutlinedInput, Button, InputAdornment, FormControlLabel, Checkbox, IconButton, Container, Select, InputLabel, MenuItem, Grid, FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import Otp from '../otp/otp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: '30px',
    margin: '20px 20%',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 0 10px silver'
  },
  heading: {
    margin: '20px 10%',
    color: theme.palette.primary.main,
    fontWeight: 'bolder',
    textAlign: 'center'
  },
  label: {
    backgroundColor: 'white',
    padding: '2px 5px',
    marginTop: '-5px',
  },
  inputContainer: {
    margin: "30px 0",
  },
  Button: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  buttonBox: {
    textAlign: "center",
    paddingTop: '20px'
  },
  body: {
    marginTop: '100px',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Reset = (props) => {


  const [state, setState] = useState('pass')
  const [prevState, setPrevState] = useState('email')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [pass, setPass] = useState('')
  const [ConfPass, setConfpass] = useState('')
  const navigate = useNavigate();
  const classes = useStyles();

  const handleEmailState = (e) => {

  }
  const handleOtpState = (e) => {

  }


  const handleSubmit = async (e) => {

    // e.preventDefault();

    // if (!email || !password) {

    //   return toast.error('Enter all the values !!');
    // }
    // if (email && password) {
    //   try {
    //     const API = process.env.URL;
    //     console.log(API)
    //     const response = await Axios.post(`https://cryptonaukri-backend.herokuapp.com/login`, { email, password });
    //     const data = response.data;
    //     if (data.login) {
    //       localStorage.setItem('login', true);
    //       localStorage.setItem('cUser', data.cUser);
    //       toast.success(data.status);
    //       if (data.admin) {
    //         localStorage.setItem('admin', true);
    //       }
    //       navigate('/')
    //     }
    //     else {
    //       toast.error(data.status)
    //     }
    //   } catch (error) {
    //     toast.error('Login Failed ,please try again !!')
    //   }
    // }
  };

  return (
    <div className={classes.body} >
      <Container >
        <div className={classes.heading} >
          <Typography variant="h4" >
            <Box sx={{
              fontWeight: 'bold'
            }}>
              Reset Password
            </Box>
          </Typography> </div>
        <Box component="form" className={classes.formContainer} >

          <Grid container spacing={3}>

            {state == 'email' ? <Grid item xs={12} >
              <FormControl fullWidth variant="outlined">
                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Enter Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  type='email'
                  value={email}
                  onChange={() => { setEmail(this.value) }}
                  name='comp'
                  label='Company Name'
                />
              </FormControl>
            </Grid> : <></>}

            {state == 'otp' ? <Grid item xs={12} >
              <FormControl fullWidth variant="outlined">
                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Enter Otp</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  type='text'
                  value={otp}
                  onChange={() => { setOtp(this.value) }}
                  name='comp'
                  label='Company Name'
                />
              </FormControl>
            </Grid> : <></>}

            {state == 'pass' ? <> <Grid item xs={6} >
              <FormControl fullWidth variant="outlined">
                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Enter New Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  type='text'
                  value={pass}
                  onChange={() => { setPass(this.value) }}
                  name='comp'
                  label='Company Name'
                />
              </FormControl>
            </Grid>
              <Grid item xs={6} >
                <FormControl fullWidth variant="outlined">
                  <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Confirm New Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-name"
                    type='text'
                    value={ConfPass}
                    onChange={() => { setConfpass(this.value) }}
                    name='comp'
                    label='Company Name'
                  />
                </FormControl>
              </Grid> </> : <></>}
            <Otp />
          </Grid>

          <Box className={classes.buttonBox} >
            {state == 'email' ?
              <Button onClick={handleEmailState}
                variant="outlined"
                color="primary"
                className={classes.Button}
              >
                Send Otp </Button>
              : <></>
            }
            {state == 'otp' ?
              <Button onClick={handleOtpState}
                variant="outlined"
                color="primary"
                className={classes.Button}
              >
                Verify Otp </Button>
              : <></>
            }
            {state == 'pass' ?
              <Button onClick={handleSubmit}
                variant="outlined"
                color="primary"
                className={classes.Button}
              >
                Update Pass</Button>
              : <></>
            }
            <Typography variant="p">
              <Box sx={{
                paddingTop: '10px'
              }}>
                Ayush is here
              </Box>
            </Typography>
          </Box>

        </Box>
      </Container>
    </div >
  );
};

export default Reset;
