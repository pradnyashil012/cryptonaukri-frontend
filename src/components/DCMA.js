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
    
    const DCMA = () => {
        const classes = useStyles();
        return (
    
    
            <>
                <Container>
                    <Box className={classes.mainbox}>
                        <Box className={classes.heading}>
                            <Typography variant='h4'>
                                DCMA 
                            </Typography>
                        </Box>
                        
                        <Box className={classes.detail}>
    
                        <Typography variant='h6'>
                        <p>If we Have added some content that belong to you or your organization by mistake, We are sorry for that. We apologize for that and assure you that this wont be repeated in future. If you are rightful owner of the content used in our Website, Please mail us with your Name, Organization Name, Contact Details, Copyright infringing URL and Copyright Proof (URL or Legal Document) at <strong>support@cryptonaukri.com</strong></p>
                        </Typography>
                        </Box>
                    </Box>
                </Container>
                
    
            </>
        )
    }
    

export default DCMA;