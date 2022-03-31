import {
  Box, makeStyles, Typography, TextField, OutlinedInput, Button, InputAdornment, FormControlLabel, Checkbox, IconButton, Container, Select, InputLabel, MenuItem, Grid, FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

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

const Login = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const classes = useStyles();

  const API = 'https://cryptonaukribackend.herokuapp.com/'

  const [values, setValues] = useState({
    showPassword: false,
  });

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
      if (props.route === 'company') {
        try {
          setLoading(true);
          const response = await Axios.post(`${API}api/v1/business/login`, { email , password });
          // console.log(email, password)
          localStorage.setItem('tokenNew',response.headers['authorization']);
          console.log(response.data);
          console.log(response.headers['authorization']);
          setLoading(false);
          if (response.data.userLoggedIn) {
            toast.success(response.data.message);
            localStorage.setItem('login', true);
            localStorage.setItem('cUser', 'BUISNESS');
            navigate('/businessprofile')
          }
          else {
            toast.success(response.data.message)
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
          toast.error('Login Failed ,please try again !!')
        }

      }
      else if (props.route === 'user') {
          try {
            setLoading(true);
            const response = await Axios.post(`${API}api/v1/user/login`, { email, password });
            //console.log(email, password)
            const data = response.data;
            setLoading(false);
            //console.log(response.headers['authorization']);
            // if (data.login) {
            
            //props.setToken(response.headers.authorization);
            localStorage.setItem('token', response.headers['authorization']);
            localStorage.setItem('login', true);
            localStorage.setItem('cUser', data.cUser);
            toast.success(data.message);
            navigate('/jobspage')
            // }
            // else {
            //   toast.error(data.message)
            // }
          } catch (error) {
            console.log(error.request);
            console.log( error.request.response);
            const err = JSON.parse(error.request.response);
            if(err.code === "WRONG_PASSWORD"){
              toast.error("Wrong email or password !!")
            }else{
              toast.error(err.code);
            }
            setLoading(false);
            //toast.error('Login Failed ,please try again !!')
          }
        }
    }
  };
  
  return (
    
    <div className={classes.body} >
      
      <Container >
        <div className={classes.heading} >
          <Typography variant="h4" >
            <Box sx={{
              fontWeight: 'bold'
            }}>
              {props.route == 'user' ? "Applicant Login" : "Company Login"}
            </Box>
          </Typography> </div>
        <Box component="form" className={classes.formContainer} >
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <FormControl fullWidth variant="outlined">
                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">{props.route == 'user' ? "Email" : "Official Email"}</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  type='text'
                  value={email}
                  onChange={handleEmailChange}
                  name='comp'
                  label='Company Name'
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} >
              <FormControl fullWidth variant="outlined">
                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Password</InputLabel>
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
                />
              </FormControl>
            </Grid>

          </Grid>

          <Box className={classes.buttonBox} >
            {loading?<CircularProgress />:<Button onClick={handleSubmit}
              variant="outlined"
              color="primary"
              className={classes.Button}
            >
              Login </Button>}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
