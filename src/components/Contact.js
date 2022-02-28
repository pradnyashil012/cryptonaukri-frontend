import React from 'react';
import { Typography, Box, Container, } from '@material-ui/core';
import Footer from './Footer/Footer'; 
import { makeStyles } from '@material-ui/styles';  

const useStyles = makeStyles((theme) => ({
    mainbox: {
        marginTop: '50px',
        padding: '60px',
        

    },
    heading: {
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 0 10px #6292E8',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
        
    },
    
    detail: {
        paddingTop:'150px',
        
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
}))
    
    const Contact = () => {
        const classes = useStyles();
        return (
    
    
            <>
                <Container>
                    <Box className={classes.mainbox}>
                        <Box className={classes.heading}>
                            <Typography variant='h4'>
                                Contact 
                            </Typography>
                        </Box>
                        
                        <Box className={classes.detail}>
    
                        <Typography variant='h5'>
                        <p>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at 
                             <strong> support@cryptonaukri.com</strong></p>
                        </Typography>
                        </Box>
                    </Box>
                </Container>
                
    
            </>
        )
    }
    

export default Contact;