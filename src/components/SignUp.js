import { Box, makeStyles, Typography, TextField, OutlinedInput, Button, InputAdornment, FormControlLabel, Checkbox, IconButton, Container, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from 'react';
import React from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        padding: '40px 20%'
    },
    inputContainer: {
        margin: '30px 0'
    },
    Button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        }
    },
    buttonBox: {
        textAlign: 'center'
    },
    heading: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 0 10px #6292E8'
    },
    body:{
        marginTop:'70px'
    }
}))

const SignUp = () => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [values, setValues] = React.useState({
        showPassword: false,
    });

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

        if (!name || !email || !password) {
            toast.error('Enter All the Values');
        }
        if (name && email && password) {
            try {

                const response = await Axios.post('https://cryptonaukri-backend.herokuapp.com/signup', { name, email, password });
                // const data = response.data;
                toast.success('Account Created !!');
                toast.success('U can Now LogIn!!');
                navigate('/login');

            } catch (error) {

                toast.error('Could not create account ,try again !!');
            }
        }

    };
    return (
        <div className={classes.body}>
            <Container>
                <Box component='form' className={classes.formContainer}>
                    <div className={classes.heading}>
                        <Typography variant='h4'>Create New Account!</Typography>
                    </div><hr />
                    <Box className={classes.inputContainer}>
                        <Typography variant='h6'>Your Fullname*</Typography>
                        <TextField id="outlined-basic" placeholder="Enter your Fullname" className={classes.input} fullWidth variant="outlined"
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            color="primary"
                        />
                    </Box>
                    <Box className={classes.inputContainer}>
                        <Typography variant='h6'>Email Address*</Typography>
                        <TextField id="outlined-basic" placeholder="Enter your email address" className={classes.input} fullWidth variant="outlined" value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            color="primary" />
                    </Box>
                    <Box className={classes.inputContainer}>
                        <Typography variant='h6'>Create Password*</Typography>
                        <OutlinedInput
                            variant="outlined"
                            placeholder="Enter Password"
                            name="password"
                            fullWidth
                            type={values.showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Box>

                    <Box className={classes.buttonBox}>
                        <Button onClick={handleSubmit} variant="outlined" color="primary" className={classes.Button}  >
                            Create Account
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
export default SignUp;