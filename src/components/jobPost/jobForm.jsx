import { Box, makeStyles, Typography, TextField, OutlinedInput, Button, InputAdornment, FormControlLabel, Checkbox, IconButton, Container, Select, InputLabel, MenuItem, FormControl, Snackbar, Grid, GridList, ButtonGroup, Paper, FormGroup } from '@material-ui/core';
import { useEffect, useState } from 'react';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useSearchParams } from "react-router-dom";
import Axios from 'axios';
import { Autocomplete } from '@mui/material';
import { fontWeight } from '@mui/system';


const useStyles = makeStyles((theme) => ({
    formContainer: {
        padding: '30px',
        margin: '20px 10%',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 0 10px silver'
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
    heading: {
        margin: '20px 10%',
        color: theme.palette.primary.main,
        fontWeight:'bolder',
        textAlign: 'center'
    },
    buttonBox: {
        textAlign: 'center',
        paddingTop: '20px'
    },
    vhcontainer: {
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        marginTop: '100px',
        minHeight:'80vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    btnBox: {
        display: 'flex',
        padding: '20px 0'
    },
    label:{
        backgroundColor:'white',
        padding :'2px 5px' ,
        marginTop:'-5px',
    }

}))

const JobForm = (theme) => {
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [contractDuration, setContractDuration] = useState('');
    const [locationType, setLocationType] = useState('');
    const [location, setLocation] = useState('');
    const [openings, setOpenings] = useState('');
    const [experience, setExperience] = useState('');
    const [ctc, setctc] = useState('');
    const [skills, setSkills] = useState('');
    const [description, setDescription] = useState('');
    const [payType, setPayType] = useState('');
    const [incentives, setIncentives] = useState('');
    const [salary, setSalary] = useState('');
    const [perks, setPerks] = useState('');
    const [probation, setProbation] = useState();
    const [probationSalary, setProbationSalary] = useState('');
    const [resp, setResp] = useState('');
    const [stipend, setStipend] = useState('');
    const [startDate, setStartDate] = useState('');
    const [btnState, setBtnState] = useState(2);


    const CurrentDate = new Date();
    const day = CurrentDate.getDate().toString();
    const month = (CurrentDate.getMonth() + 1).toString();
    const year = CurrentDate.getFullYear().toString();
    const date = (year + '-0' + month + '-' + day).toString();
    // console.log(date)

    const classes = useStyles();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    let urlParamId = searchParams.get("id");

    // useEffect(async (e) => {
    //     let id = searchParams.get("id");
    //     const response = await Axios.get(`https://cryptonaukri-backend.herokuapp.com/jobs/:${id}`)
    //         .then((res) => {
    //             setPosition(res.data[0].position)
    //             setCompany(res.data[0].company)
    //             setType(1);
    //             setExperience(res.data[0].experience)
    //             setOpenings(res.data[0].openings)
    //             setLink(res.data[0].link)
    //         })
    //         .catch((err) => {

    //         });
    // }, []);

    // useEffect(async (e) => {
    //     let id = searchParams.get("id");
    //     const response = await Axios.get(`https://cryptonaukri-backend.herokuapp.com/internships/:${id}`)
    //         .then((res) => {
    //             setPosition(res.data[0].position)
    //             setCompany(res.data[0].company)
    //             setType(2);
    //             setOpenings(res.data[0].openings)
    //             setLink(res.data[0].link)
    //         })
    //         .catch((err) => {
    //         });
    // }, []);

    // let admin = localStorage.getItem("admin");
    let admin = true;



    const handleBtn1Toggle = () => {
        setBtnState(1)
    }

    const handleBtn2Toggle = () => {
        setBtnState(2)
    }

    const handletitleChange = (event) => {
        setTitle(event.target.value)
    };

    const handletypeChange = (event) => {
        setType(event.target.value)
    };

    const handleCDurationChange = (event) => {
        setContractDuration(event.target.value)
    };

    const handleLocTypeChange = (event) => {
        setLocationType(event.target.value)
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value)
    };

    const handleOpnChange = (event) => {
        setOpenings(event.target.value)
    };

    const handleExpChange = (event) => {
        setExperience(event.target.value)
    };

    const handlectcChange = (event) => {
        setctc(event.target.value)
    };

    const handleDescChange = (event) => {
        setDescription(event.target.value)
    };

    const handleSkillChange = (event) => {
        setSkills(event.target.value)
    };

    const handlePayTypeChange = (event) => {
        setPayType(event.target.value)
    };

    const handleSalaryChange = (event) => {
        setSalary(event.target.value)
    };

    const handleIncentivesChange = (event) => {
        setIncentives(event.target.value)
    };

    const handlePerksChange = (event) => {
        setPerks(event.target.value)
    };

    const handleProbationChange = (event) => {
        setProbation(event.target.value)
    };

    const handleProbSalaryChange = (event) => {
        setProbationSalary(event.target.value)
    };

    const handleDateChange = (event) => {
        setStartDate(event.target.value)
    };

    const handleRespChange = (event) => {
        setResp(event.target.value)
    };

    const handleStipendChange = (event) => {
        setStipend(event.target.value)
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const date = new Date();
    //     console.log(date);

    //     if ((!position || !company || !openings || !experience || !link) && type == 1) {
    //         toast.error('Enter All the Values !');
    //     }

    //     if ((!position || !company || !openings || !link) && type != 1) {
    //         toast.error('Enter All the Values !');
    //     }


    //     try {

    //         if (type == 1) {
    //             const response = await Axios.post('https://cryptonaukri-backend.herokuapp.com/jobs', { position, company, experience, openings, link, date });

    //             const data = response.data;

    //             toast.success('jobCard Created!!');
    //             navigate('/')

    //         }
    //         else if (type == 2) {
    //             const response = await Axios.post('https://cryptonaukri-backend.herokuapp.com/internships', { position, company, openings, link, date });

    //             const data = response.data;

    //             toast.success('Internship Created!!');
    //             navigate('/')
    //         }


    //     } catch (error) {
    //         toast.error('jobCard Creation Failed!!');
    //     }

    // };
    // const handleEdit = async () => {

    //     if (type === 1) {

    //         const response = await Axios.patch(`https://cryptonaukri-backend.herokuapp.com/jobs/${urlParamId}`, { position, company, experience, openings, link });

    //         toast.success('jobCard Updated !!');
    //         navigate('/')

    //     } else if (type === 2) {

    //         const response = await Axios.patch(`https://cryptonaukri-backend.herokuapp.com/internships/${urlParamId}`, { position, company, openings, link });

    //         toast.success('InternshipCard Updated !!');
    //         navigate('/')

    //     }
    // }
    return (
        <div className={classes.body}>
            {admin ? <Container>
                <div className={classes.heading} >
                    <Typography variant="h4" >
                        <Box sx={{
                            fontWeight:'bold'
                        }}>
                            Post Job/Internship
                        </Box>
                    </Typography>
                </div>
                <Box component='form' className={classes.formContainer}>
                    <Box className={classes.btnBox}>
                        <ButtonGroup >
                            <Button onClick={handleBtn2Toggle} type='button' variant={btnState === 2 ? "contained" : "outlined"} color="primary" className={classes.btn}  >
                                Post Job
                            </Button>
                            <Button onClick={handleBtn1Toggle} type='button' variant={btnState === 1 ? "contained" : "outlined"} color="primary" className={classes.btn} >
                                Post Internship
                            </Button>
                        </ButtonGroup>
                    </Box>

                    {btnState === 2 ?
                        <Grid container spacing={3}>
                            <Grid item md={8} sm={2}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Job Title</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-name"
                                        type='text'
                                        value={title}
                                        onChange={handletitleChange}
                                        name='title'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Job Type</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        onChange={handletypeChange}
                                        name='type'
                                    >
                                        <MenuItem value={1}>Part Time</MenuItem>
                                        <MenuItem value={2}>Full Time</MenuItem>
                                        <MenuItem value={3}>Contract</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {type == 3 ?
                                <Grid item xs={12}>
                                    <Box >
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel className={classes.label} id="demo-simple-select-helper-label">Duration Of COntract</InputLabel>
                                            <Select
                                                variant='outlined'
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={contractDuration}
                                                onChange={handleCDurationChange}
                                                name='contractDuration'
                                            >
                                                <MenuItem value={1}>1 month</MenuItem>
                                                <MenuItem value={2}>2 months</MenuItem>
                                                <MenuItem value={3}>3 months</MenuItem>
                                                <MenuItem value={6}>6 months</MenuItem>
                                                <MenuItem value={9}>9 months</MenuItem>
                                                <MenuItem value={12}>1 year</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid> : <></>}
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Location type</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={locationType}
                                        onChange={handleLocTypeChange}
                                        name='locationType'
                                    >
                                        <MenuItem value={1}>Work From Home</MenuItem>
                                        <MenuItem value={2}>In Office</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={8}>
                                {locationType === 2 ?
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">City/Location</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='text'
                                            value={location}
                                            onChange={handleLocationChange}
                                            name='location'
                                        />
                                    </FormControl> : <></>}
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">No. Of Openings</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='number'
                                        value={openings}
                                        onChange={handleOpnChange}
                                        name='openings'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Experience</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={experience}
                                        onChange={handleExpChange}
                                        name='experience'
                                    >
                                        <MenuItem value={'Fresher'}>Fresher</MenuItem>
                                        <MenuItem value={'3 months'}>3 months</MenuItem>
                                        <MenuItem value={'6 months'}>6 months</MenuItem>
                                        <MenuItem value={'1 year'}>1 year</MenuItem>
                                        <MenuItem value={'2 years'}>2 years</MenuItem>
                                        <MenuItem value={'3 years'}>3 years</MenuItem>
                                        <MenuItem value={'4 years'}>4 years</MenuItem>
                                        <MenuItem value={'5 years'}>5 years</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">CTC range</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='text'
                                        placeholder='____ to ____'
                                        value={ctc}
                                        onChange={handlectcChange}
                                        name='ctc'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        variant="outlined"
                                        id="outlined-multiline-static"
                                        label="Job Description"
                                        multiline
                                        rows={4}
                                        value={description}
                                        onChange={handleDescChange}
                                        name='description'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Required Skils</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='text'
                                        placeholder='Add Comma Seperated Skills'
                                        value={skills}
                                        onChange={handleSkillChange}
                                        name='skills'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Payment type</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={payType}
                                        onChange={handlePayTypeChange}
                                        name='payType'
                                    >
                                        <MenuItem value={1}>Fixed Pay</MenuItem>
                                        <MenuItem value={2}>Variable Pay</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                {payType === 1 ?
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Salary</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='text'
                                            value={salary}
                                            onChange={handleSalaryChange}
                                            name='salary'
                                        />
                                    </FormControl> : <></>}
                                {payType === 2 ?
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Variable pay</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='text'
                                            value={salary}
                                            onChange={handleSalaryChange}
                                            name='salary'
                                        />
                                    </FormControl> : <></>}
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Other Incentives</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='text'
                                        placeholder='Add comma separated incentives'
                                        value={incentives}
                                        onChange={handleIncentivesChange}
                                        name='incentives'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Perks</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='text'
                                        placeholder='Add comma separated perks'
                                        value={perks}
                                        onChange={handlePerksChange}
                                        name='perks'
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Probation period</InputLabel>
                                    <Select
                                        variant='outlined'
                                        value={probation}
                                        onChange={handleProbationChange}
                                        name='probation'
                                    >
                                        <MenuItem value={0}>No probation</MenuItem>
                                        <MenuItem value={1}>1 week</MenuItem>
                                        <MenuItem value={2}>2 weeks</MenuItem>
                                        <MenuItem value={3}>3 weeks</MenuItem>
                                        <MenuItem value={4}>1 month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                {probation === undefined || probation === 0 ? <></> :
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Probation Salary</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='text'
                                            value={probationSalary}
                                            onChange={handleProbSalaryChange}
                                            name='probationSalary'
                                        />
                                    </FormControl>}
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Start Date</InputLabel>
                                    <Select
                                        variant='outlined'
                                        value={startDate}
                                        onChange={handleDateChange}
                                    >
                                        <MenuItem value={0}>Immidiately</MenuItem>
                                        <MenuItem value={1}>Next week</MenuItem>
                                        <MenuItem value={2}>After 2 weeks</MenuItem>
                                        <MenuItem value={3}>Next month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid> :
                        <Grid container spacing={3}>
                            <Grid item md={8} sm={2}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-name">Internship Title</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-name"
                                        type='text'
                                        onChange={handletitleChange}
                                        value={title}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Internships Type</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={handletypeChange}
                                        value={type}
                                    >
                                        <MenuItem value={1}>Part Time</MenuItem>
                                        <MenuItem value={2}>Full Time</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Location type</InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={handleLocTypeChange}
                                        value={locationType}
                                    >
                                        <MenuItem value={1}>Work From Home</MenuItem>
                                        <MenuItem value={2}>In Office</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                {locationType === 2 ?
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">City/Location</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='text'
                                            onChange={handleLocationChange}
                                            value={location}
                                        />
                                    </FormControl> : <></>}
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Openings</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='number'
                                        onChange={handleOpnChange}
                                        value={openings}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        variant="outlined"
                                        id="outlined-multiline-static"
                                        label="Internship Description"
                                        multiline
                                        rows={4}
                                        onChange={handleDescChange}
                                        value={description}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        variant="outlined"
                                        id="outlined-multiline-static"
                                        label="Intern's Day-to-day responsibilities"
                                        multiline
                                        rows={4}
                                        onChange={handleRespChange}
                                        value={resp}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Required Skils</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='text'
                                        placeholder='Add Comma Seperated Skills'
                                        onChange={handleSkillChange}
                                        value={skills}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Stipend </InputLabel>
                                    <Select
                                        variant='outlined'
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={stipend}
                                        onChange={handleStipendChange}
                                    >
                                        <MenuItem value={1}>Unpaid</MenuItem>
                                        <MenuItem value={2}>Fixed Stipend</MenuItem>
                                        <MenuItem value={3}>Performance Based</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                {stipend === 3 ?
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Expected Range</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='text'
                                            placeholder='____ to ____'
                                            value={salary}
                                            onChange={handleSalaryChange}
                                        />
                                    </FormControl> : <></>}
                                {stipend === 2 ?
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Stipend Amount</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='number'
                                            value={salary}
                                            onChange={handleSalaryChange}
                                        />
                                    </FormControl> : <></>}
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Incentives</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='text'
                                        placeholder='Add comma separated incentives'
                                        value={incentives}
                                        onChange={handleIncentivesChange}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Perks</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-location"
                                        type='text'
                                        placeholder='Add comma separated perks'
                                        value={perks}
                                        onChange={handlePerksChange}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Probation period</InputLabel>
                                    <Select
                                        variant='outlined'
                                        onChange={handleProbationChange}
                                        value={probation}
                                    >
                                        <MenuItem value={0}>No probation</MenuItem>
                                        <MenuItem value={1}>1 week</MenuItem>
                                        <MenuItem value={2}>2 weeks</MenuItem>
                                        <MenuItem value={3}>3 weeks</MenuItem>
                                        <MenuItem value={4}>1 month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                {probation === 0 || probation === undefined ? <></> :
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel className={classes.label} htmlFor="outlined-adornment-location">Probation Salary</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-location"
                                            type='text'
                                            value={probationSalary}
                                            onChange={handleProbSalaryChange}
                                        />
                                    </FormControl>}
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel className={classes.label} id="demo-simple-select-helper-label">Start Date</InputLabel>
                                    <Select
                                        variant='outlined'
                                        value={startDate}
                                        onChange={handleDateChange}
                                    >
                                        <MenuItem value={0}>Immidiately</MenuItem>
                                        <MenuItem value={1}>Next week</MenuItem>
                                        <MenuItem value={2}>After 2 weeks</MenuItem>
                                        <MenuItem value={3}>Next month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                    }

                    <Box className={classes.buttonBox}>
                        {btnState === 2 ?
                            <Button
                                //  onClick={urlParamId === null ? handleSubmit : handleEdit}
                                type='button' variant="outlined" color="primary" className={classes.Button}  >
                                {urlParamId === null ? 'Create Job Card' : 'Update Job Card'}
                            </Button> :
                            <Button
                                //  onClick={urlParamId === null ? handleSubmit : handleEdit}
                                type='button' variant="outlined" color="primary" className={classes.Button}  >
                                {urlParamId === null ? 'Create internship Card' : 'Update internship Card'}
                            </Button>}
                    </Box>
                </Box>
            </Container>

             : 

             <Container>
                <Box className={classes.vhcontainer}>
                    <Box sx={{ padding: '10px' }} className={classes.buttonBox}>
                        <Typography variant="h4">You are not authorised to this Page</Typography>
                    </Box>
                    <Box className={classes.buttonBox}>
                        <Button onClick={() => { navigate('/'); }} type='button' variant="outlined" color="primary" className={classes.Button}  >
                            return Home
                        </Button>
                    </Box>
                </Box>
            </Container>
            };

        </div >
    )
}
export default JobForm;