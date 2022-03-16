import React, { useState } from "react";
import { Container, Grid, Typography, TextField, OutlinedInput, Button, Box, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useSearchParams, useNavigate } from
    "react-router-dom";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Otp from './otp/otp'

const useStyles = makeStyles((theme) => ({
    formContainer: {
        padding: '30px',
        margin: '20px 10%',
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
    first: {
        display: 'flex',
    },
    body: {
        marginTop: '100px',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        backgroundColor: 'white',
        padding: '2px 5px',
        marginTop: '-5px',
    },
    buttonBox: {
        textAlign: 'center',
        paddingTop: '20px'
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
}))

const BusReg = () => {

    const navigate = useNavigate();

    const [exec, setExec] = useState('');
    const [comp, setComp] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [gstin, setGstin] = useState('');
    const [hq, setHq] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [website, setWebsite] = useState('');
    const [pass, setPass] = useState('');
    const [state, setState] = useState('registration');
    const [otp, setOtp] = useState('');


    const [searchParams, setSearchParams] = useSearchParams();
    let urlParamId = searchParams.get("id");
    const APIUrl = `https://cryptonaukri-backend.herokuapp.com`;
    const otpAPI = `/business/authentication/verify-email`

    const handleExecChange = (e) => {
        setExec(e.target.value);
        // console.log(exec);
    }
    const handleCompChange = (e) => {
        setComp(e.target.value);
        // console.log(comp);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value);
        // console.log(desc);
    }
    const handleYearChange = (e) => {
        setYear(e.target.value);
        // console.log(year);
    }
    const handleGstinChange = (e) => {
        setGstin(e.target.value);
        // console.log(gstin);
    }
    const handleHqChange = (e) => {
        setHq(e.target.value);
        // console.log(hq);
    }
    const handlePhoneNoChange = (e) => {
        setPhoneNo(e.target.value);
        // console.log(phoneNo);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
        // console.log(pass);
    }
    const handleWebsiteChange = (e) => {
        setWebsite(e.target.value);
        // console.log(website);
    }
    const classes = useStyles();

    const handleCallback = (IncomingState) => {
        setState(IncomingState);
        console.log('handlecallback is called !!')
        console.log(state);
    }

    console.log(state)
    console.log('this is state')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (!exec || !email || !pass || !comp || !desc || !year || !gstin || !hq || !phoneNo || !website) {
                return toast.error('Enter all values !');
            }

            // var webFromMail = email.split('@')
            // // console.log(webFromMail[1])
            // //.log(website.split("."))
            // if (webFromMail[1] !== website) {
            //     return toast.error('Use official Email of the Company !');
            // }

            if (state === 'registration') {

                const response = await Axios.post(`${APIUrl}/business/authentication/signup`, { exec, email, pass, comp, desc, year, gstin, hq, phoneNo, website })
                    .then((res) => {
                        const data = res.data;
                        // console.log(data)
                        if (data.code !== false) {
                            toast.success(data.message);
                            setState('verify')
                            // console.log('again in the function')
                        } else {
                            toast.error(data.message);
                        }

                    })
                    .catch((err) => {
                        console.log(err.response);
                    })

            } else if (state === 'verified') {
                toast.success('Account Created !!');
                navigate('/companyLogin')
                return toast.success('Try logging in !!');

            } else if (state === 'verify') {
                toast.info('Email is already sent to you !!');
            }
            // navigate('/login');

        } catch (error) {
            toast.error(error);
        }

    }
    const handleEdit = () => {

    }

    return (
        <div className={classes.body}>
            <Container>
                <div className={classes.heading} >
                    <Typography variant="h4" >
                        <Box sx={{
                            fontWeight: 'bold'
                        }}>
                            New Business SignUp
                        </Box>
                    </Typography>
                </div>
                <Box component='form' className={classes.formContainer}>
                    <Grid container spacing={3}>

                        <Grid item xs={8} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Company Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={comp}
                                    onChange={handleCompChange}
                                    name='comp'
                                    label='Company Name'
                                    required
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={4} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Website Link</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={website}
                                    onChange={handleWebsiteChange}
                                    name='website'
                                    required
                                />
                            </FormControl>
                        </Grid>


                        <Grid item xs={4} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Official Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    name='email'
                                    required
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={8} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Executive Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={exec}
                                    onChange={handleExecChange}
                                    name='exec'
                                    required
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} >
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    variant="outlined"
                                    id="outlined-multiline-static"
                                    label="Company Description"
                                    multiline
                                    rows={4}
                                    value={desc}
                                    onChange={handleDescChange}
                                    name='email'
                                    required
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Establishment Year</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='number'
                                    value={year}
                                    onChange={handleYearChange}
                                    name='year'
                                    required
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">GSTIN(Optional)</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={gstin}
                                    onChange={handleGstinChange}
                                    name='gstin'
                                    required
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={8} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Office Location</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={hq}
                                    onChange={handleHqChange}
                                    name='hq'
                                    required
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={4} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Executive's Phone</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='number'
                                    value={phoneNo}
                                    onChange={handlePhoneNoChange}
                                    name='phoneNo'
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel className={classes.label} htmlFor="outlined-adornment-name">CreatePass</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={pass}
                                    onChange={handlePassChange}
                                    name='phoneNo'
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={8} >
                            {state == 'verify'||state == 'verified' ?
                                <Otp APIUrl={otpAPI} Email={email} callBack={handleCallback} />
                                : <></>
                            }
                        </Grid>
                    </Grid>
                    <Box className={classes.buttonBox}>
                        <Button
                            onClick={urlParamId === null ? handleSubmit : handleEdit}
                            type='submit'
                            variant="outlined"
                            color="primary"
                            disabled={state==='verify'}
                            className={classes.Button}  >
                            {urlParamId === null ? <>{state === 'registration' ? 'send Otp' : 'Create Account'}</> : 'Update Company Details'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div >
    )
}
export default BusReg;