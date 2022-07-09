import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import Footer from "./Footer/Footer";
import { makeStyles } from "@material-ui/styles";

const Contact = () => {
  return (
    <div className="bg-gray-800 pt-16">
      <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-4 max-w-7xl m-auto">
        <div className="mt-8 text-2xl font-bold tracking-wider underline underline-offset-4">
          Contact Us
        </div>
        <div className="mt-5 text-lg text-center px-20">
          <p>
            If you have any query regrading Site, Advertisement and any other
            issue, please feel free to contact at{" "}
            <b className="tracking-wider text-cyan-600">support@cryptonaukri.com</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// ** old material ui

// const useStyles = makeStyles((theme) => ({
//     mainbox: {
//         marginTop: '50px',
//         padding: '60px',

// const classes = useStyles();

//     },
//     heading: {
//         color: 'white',
//         backgroundColor: theme.palette.primary.main,
//         borderRadius: '5px',
//         padding: '10px',
//         boxShadow: '0 0 10px #6292E8',
//         alignItems:'center',
//         justifyContent:'center',
//         textAlign:'center'

//     },

//     detail: {
//         paddingTop:'150px',

//         alignItems:'center',
//         justifyContent:'center',
//         textAlign:'center'
//     },
// }))

{
  /* <>
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
</> */
}
