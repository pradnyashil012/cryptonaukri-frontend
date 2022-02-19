import {
  Box, makeStyles, Typography, TextField, OutlinedInput, Button, InputAdornment, FormControlLabel, Checkbox, IconButton, Container, Select, InputLabel, MenuItem, FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: "40px 20%",
    marginTop:'70px'
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
  },
  heading: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 0 10px #6292E8",
  },
  body: {
    marginTop: '100px'
  }
}));

const Login = () => {


  const [password, setPass] = useState('')
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePassChange = (e) => {
    setPass(e.target.value)
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email || !password) {

      return toast.error('Enter all the values !!');
    }
    if (email && password) {
      try {
        const API = process.env.URL;
        console.log(API)
        const response = await Axios.post(`https://cryptonaukri-backend.herokuapp.com/login`, { email, password });
        const data = response.data;
        if (data.login) {
          localStorage.setItem('login', true);
          localStorage.setItem('cUser', data.cUser);
          toast.success(data.status);
          if (data.admin) {
            localStorage.setItem('admin', true);
          }
          navigate('/')
        }
        else {
          toast.error(data.status)
        }
      } catch (error) {
        toast.error('Login Failed ,please try again !!')
      }
    }
  };

  return (
    <div className={classes.Container} >
      <Container >
        <Box component="form" className={classes.formContainer} >
          <div className={classes.heading} >
            <Typography variant="h4" > Login </Typography> </div>
          < hr />
          <Box className={classes.inputContainer} >
            <Typography variant="h6" >email *</Typography>
            <TextField id="outlined-basic"
              placeholder="Enter your email"
              className={classes.input}
              fullWidth value={email}
              onChange={handleEmailChange}
              variant="outlined"
              color="primary" />
          </Box>
          <Box className={classes.inputContainer} >
            <Typography variant="h6" > Password * </Typography>
             <OutlinedInput variant="outlined"
              placeholder="Enter Password"
              name="password"
              fullWidth type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={handlePassChange}
              endAdornment={<InputAdornment position="end" >
                <IconButton aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end" >
                  {values.showPassword ? < VisibilityOff /> : < Visibility />}
                </IconButton> </InputAdornment>
              }
            /> </Box>

          <Box className={classes.buttonBox} >
            <Button onClick={handleSubmit}
              variant="outlined"
              color="primary"
              className={classes.Button} >
              Login </Button> </Box> </Box> </Container> </div>
  );
};

export default Login;
