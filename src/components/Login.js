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


  const [password, setPass] = useState('')
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const API = 'http://localhost:3001'

  const [values, setValues] = React.useState({
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

      if (props.route == 'company') {
        // console.log(email)
        // console.log(password)
        try {
          const response = await Axios.post(`${API}/business/authentication/login`, { email, password });
          console.log(email, password)
          const data = response.data;
          if (data.login) {
            localStorage.setItem('login', true);
            localStorage.setItem('cUser', data.cUser);
            localStorage.setItem('businessAdmin', true);
            toast.success(data.message);
            navigate('/')
          }
          else {
            toast.error(data.message)
          }
        } catch (error) {
          toast.error('Login Failed ,please try again !!')
        }

      }
      else
        if (props.route == 'user') {
          // try {
          //   const response = await Axios.post(`https://cryptonaukri-backend.herokuapp.com/login`, { email, password });
          //   const data = response.data;
          //   if (data.login) {
          //     localStorage.setItem('login', true);
          //     localStorage.setItem('cUser', data.cUser);
          //     toast.success(data.status);
          //     if (data.admin) {
          //       localStorage.setItem('Busineadmin', true);
          //     }
          //     navigate('/')
          //   }
          //   else {
          //     toast.error(data.status)
          //   }
          // } catch (error) {
          //   toast.error('Login Failed ,please try again !!')
          // }

          try {
            const response = await Axios.post(`${API}/user/authentication/login`, { email, password });
            console.log(email, password)
            const data = response.data;
            if (data.login) {
              localStorage.setItem('login', true);
              localStorage.setItem('cUser', data.cUser);
              toast.success(data.message);
              navigate('/')
            }
            else {
              toast.error(data.message)
            }
          } catch (error) {
            toast.error('Login Failed ,please try again !!')
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
            <Button onClick={handleSubmit}
              variant="outlined"
              color="primary"
              className={classes.Button}
            >
              Login </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
