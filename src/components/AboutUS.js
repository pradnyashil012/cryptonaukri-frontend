import { Typography, Box, Container, } from '@material-ui/core';
import React from 'react';
import Footer from './Footer/Footer';
import { makeStyles } from '@material-ui/styles';
import { textAlign, width } from '@mui/system';
import { CenterFocusStrong } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    mainbox: {
        marginTop: '50px',
        padding: '40px',
        // border:'2px solid Black'

    },
    heading: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 0 10px #6292E8',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },
    input: {
        paddingTop: '150px',

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    detail: {
        paddingTop: '350px',

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
}))


const AboutUS = () => {
    const classes = useStyles();
    return (


        <>
            <Container>
                <Box className={classes.mainbox}>
                    <Box className={classes.heading}>
                        <Typography variant='h4'>
                            About Us
                        </Typography>
                    </Box>
                    <Box className={classes.input}>
                        <Typography variant='h6'><p>We are an ecosystem for Blockchain Developers where they can learn Blockchain development, can solve their problems using our community and can get the jobs using our job portal in Blockchain space startups and MNCs.</p>
                            <p>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at <strong>support@cryptonaukri.com</strong></p>
                        </Typography>

                    </Box >
                    <Box className={classes.detail}>

                        <Typography variant='h6'>

                        </Typography>
                    </Box>
                </Box>
            </Container>


        </>
    )
}

export default AboutUS;
