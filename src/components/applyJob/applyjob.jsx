import React, { useState } from 'react';
import { Box, Paper, Typography, Button, makeStyles, CardActions, Container, Chip, } from '@material-ui/core';
import { spacing } from '@mui/system';
import { Delete, Edit } from "@material-ui/icons";
import Axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyles = makeStyles((theme) => ({
    jobCardContainer: {
        [theme.breakpoints.between('xs', 770)]: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }
    },
    jobCard: {
        width: '100%',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '3px 3px 10px silver',
        transition: '100ms All linear',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.between('xs', 770)]: {
            flexDirection: 'column',
            maxWidth: '350px',
            height: 'auto',
        },
        '&:hover': {
            border: '1px solid #3F51B5',
            boxShadow: '3px 3px 15px gray',
            padding: 0
        },
    },
    left: {
        width: '30%',
        height: '100%',
        padding: '15px',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.between('xs', 770)]: {
            width: '100%'
        },
    },
    leftImg: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    right: {
        height: '100%',
        backgroundColor: 'white',
        padding: '25px',
        fontWeight: 'light',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '50px',
        borderRadius: '10px',
        boxShadow: '0 0 10px silver',
        [theme.breakpoints.between('xs', 770)]: {
            width: '100%'
        },
    },
    applyBtn: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        },

    },
    headcontain: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        [theme.breakpoints.between('xs', 770)]: {
            flexDirection: 'column',

        },
    },
    editbtn: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.between('xs', 770)]: {
            margin: '0'
        },
    },

    btn: {
        border: 'blue solid 1px',
        '&:hover': {
            border: 'blue solid 1px',
            backgroundColor: 'white',
            color: 'blue'
        },
    },
    body: {
        marginTop: '100px'
    },
    Chip: {
        margin: '5px'
    }
}));

const ApplyJob = (props) => {
    let position = props.position;
    let company = props.company;
    let experience = props.exp;
    let openings = props.opn;

    const [applied, setApplied] = useState(false);

    const login = localStorage.getItem("login")
    const navigate = useNavigate();

    const handleEdit = async (e) => {
        navigate(`/jobform?id=${e}`);

        // toast.success('jobCard Updated');
    };

    const handleDelete = async (e) => {

        if (window.confirm('sure to delete this card ?')) {
            const response = await Axios.delete(`https://cryptonaukri-backend.herokuapp.com/jobs/:${e}`)

            const data = response.data;
            const code = data.code;
            toast.success('jobCard Deleted');
            navigate('/')
        }
    };

    const handleApply = () => {
        console.log('ok apply krneka idhhr handle kari bhai !!')
    }

    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Box className={classes.jobCardContainer}>
                <Container>
                    <Box className={classes.right}>
                        <Box>
                            <Box className={classes.headcontain} >
                                <Box >
                                    <Typography className={classes.cardHead} variant={'h4'}>
                                        <Box sx={{
                                            fontWeight: '500',
                                        }}>
                                            BlockChain Developer
                                        </Box>
                                    </Typography>
                                    <Typography className={classes.cardComp} variant='h5'>
                                        <Box sx={{
                                            fontWeight: 'bold',
                                        }}>
                                            CryptoNaukri
                                        </Box>
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                        <Box>
                            <Box sx={{
                                fontWeight: 'regular',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                paddingTop: '20px',
                                paddingBottom: '20px',
                            }}>
                                <div>

                                    <Typography variant="p">
                                        <Box sx={{
                                            fontWeight: 'bold',
                                        }}>
                                            Posted On
                                        </Box>
                                        <Box sx={{
                                            fontWeight: 'regular',
                                        }}>
                                            20-feb-2022
                                        </Box>
                                    </Typography>
                                </div>
                                <div>

                                    <Typography variant="p">
                                        <Box sx={{
                                            fontWeight: 'bold',
                                        }}>
                                            Duration
                                        </Box>
                                        <Box sx={{
                                            fontWeight: 'regular',
                                        }}>
                                            3 months
                                        </Box>
                                    </Typography>
                                </div>
                                <div>

                                    <Typography variant="p">
                                        <Box sx={{
                                            fontWeight: 'bold',
                                        }}>
                                            Stipend
                                        </Box>
                                        <Box sx={{
                                            fontWeight: 'regular',
                                        }}>
                                            2000/month
                                        </Box>
                                    </Typography>
                                </div>
                                <div>

                                    <Typography variant="p">
                                        <Box sx={{
                                            fontWeight: 'bold',
                                        }}>
                                            Applications
                                        </Box>
                                        <Box sx={{
                                            fontWeight: 'regular',
                                        }}>
                                            2
                                        </Box>
                                    </Typography>
                                </div>
                            </Box>

                            <Box>
                                <Typography variant="h6">
                                    <Box sx={{
                                        fontWeight: 'bold',
                                        padding: '5px'
                                    }}>
                                        About Company
                                    </Box>
                                </Typography>
                                <Typography variant="p">
                                    <Box sx={{
                                        fontWeight: 'regular',
                                        padding: '5px'
                                    }}>
                                        SISL is providing state-of-the-art geospatial services to GIS companies worldwide. We are well experienced and equipped to deliver the services with high quality on time, related to software development services, lidar data processing, BIM services, highway/road assets mapping, and parcel mapping.
                                    </Box>
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6">
                                    <Box sx={{
                                        fontWeight: 'bold',
                                        padding: '5px'
                                    }}>
                                        About Job/Internship
                                    </Box>
                                </Typography>
                                <Typography variant="p">
                                    <Box sx={{
                                        fontWeight: 'regular',
                                        padding: '5px'
                                    }}>
                                        Selected intern's day-to-day responsibilities include: <br /><br />

                                        1. Developing new user-facing features using React and Redux<br />
                                        2. Building reusable components and front end tools for future use<br />
                                        3. Translating designs and wireframes into high-quality code<br />
                                        4. Optimizing components for maximum performance across a vast array of web-capable devices and browsers<br /><br />

                                        Requirements:<br /><br />

                                        1. If someone will perform well, we can offer full-time job opportunities with the company.<br />
                                        2. Should work from home  and must have a laptop.
                                    </Box>
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6">
                                    <Box sx={{
                                        fontWeight: 'bold',
                                        padding: '5px'
                                    }}>
                                        Required Skill(s)
                                    </Box>
                                </Typography>
                                <Typography variant="p">
                                    <Box sx={{
                                        fontWeight: 'regular',
                                        padding: '5px'
                                    }}>
                                        <Chip className={classes.Chip} label="JavaScript" />
                                        <Chip className={classes.Chip} label="HTML" />
                                        <Chip className={classes.Chip} label="Reactjs" />
                                        <Chip className={classes.Chip} label="Mongodb" />
                                        <Chip className={classes.Chip} label="PHP" />
                                    </Box>
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6">
                                    <Box sx={{
                                        fontWeight: 'bold',
                                        padding: '5px'
                                    }}>
                                        No. of Openings
                                    </Box>
                                </Typography>
                                <Typography variant="p">
                                    <Box sx={{
                                        fontWeight: 'regular',
                                        padding: '5px'
                                    }}>
                                        10
                                    </Box>
                                </Typography>
                            </Box>

                            <Box sx={{
                                textAlign: 'center',
                                marginTop: '20px'
                            }}>
                                {applied ?
                                 <Button onClick={handleApply} className={classes.applyBtn} disabled variant="outlined" color="primary">
                                    Already Applied
                                </Button> :
                                    <Button onClick={handleApply} className={classes.applyBtn} variant="outlined" color="primary">
                                        Apply
                                    </Button>}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box >
        </div >
    )
}

export default ApplyJob 
