import React, { useState } from "react";
import { Container, Grid, Typography, TextField, OutlinedInput, Box, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

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
        marginTop: '100px'
    },
}))

const BusReg = () => {

    const [exec, setExec] = useState('');
    const [comp, setComp] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [gstin, setGstin] = useState('');
    const [hq, setHq] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [website, setWebsite] = useState('');

    const handleExecChange = (e) => {
        setExec(e.target.value);
        console.log(exec);
    }
    const handleCompChange = (e) => {
        setComp(e.target.value);
        console.log(comp);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value);
        console.log(desc);
    }
    const handleYearChange = (e) => {
        setYear(e.target.value);
        console.log(year);
    }
    const handleGstinChange = (e) => {
        setGstin(e.target.value);
        console.log(gstin);
    }
    const handleHqChange = (e) => {
        setHq(e.target.value);
        console.log(hq);
    }
    const handlePhoneNoChange = (e) => {
        setPhoneNo(e.target.value);
        console.log(phoneNo);
    }
    const handleWebsiteChange = (e) => {
        setWebsite(e.target.value);
        console.log(website);
    }
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Container>
                <div className={classes.heading} >
                    <Typography variant="h4" >
                        <Box sx={{
                            fontWeight: 'bold'
                        }}>
                            Business Registration
                        </Box>
                    </Typography>
                </div>
                <Box component='form' className={classes.formContainer}>
                    <Grid container spacing={3}>

                        <Grid item xs={8} >
                            <FormControl fullWidth variant="contained">
                                <InputLabel htmlFor="outlined-adornment-name">Company Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={comp}
                                    onChange={handleCompChange}
                                    name='comp'
                                    label='Company Name'
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={4} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Website Link</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={website}
                                    onChange={handleWebsiteChange}
                                    name='website'
                                />
                            </FormControl>
                        </Grid>


                        <Grid item xs={4} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Official Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    name='email'
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={8} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Executive Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={exec}
                                    onChange={handleExecChange}
                                    name='exec'
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
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                            <FormControl fullWidth variant="outlined">
                                <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Establishment Year</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='number'
                                    value={year}
                                    onChange={handleYearChange}
                                    name='year'
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={6} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">GSTIN(Optional)</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={gstin}
                                    onChange={handleGstinChange}
                                    name='gstin'
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={8} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Office Location</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='text'
                                    value={hq}
                                    onChange={handleHqChange}
                                    name='hq'
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={4} >
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-name">Executive's Phone</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-name"
                                    type='number'
                                    value={phoneNo}
                                    onChange={handlePhoneNoChange}
                                    name='phoneNo'
                                />
                            </FormControl>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div >
    )
}
export default BusReg;