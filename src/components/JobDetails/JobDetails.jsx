import React, { useState } from "react";
import { Container, Grid, Box, makeStyles, Typography, ButtonGroup, Button, Card, CardHeader, CardContent, CardActions, List, ListItem, Paper, MenuList, MenuItem, Divider } from "@material-ui/core";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainbox: {
    marginTop: '100px',

  },
  leftNav: {
    //   border:'2px solid black',
    width: '29%',
    height: '500px',
    //   position:'fixed',
  },
  fixedWidthContainer: {
    marginLeft: '2px',
    width: '70%',
    // border:'2px solid red',
    height: '500px',
    overflowY: 'scroll'
  },
  list: {
    height: '100%',
  },
  G: {
    height: '20%',
    alignItems: 'center'
  },
  Button: {
    color: 'blue',
    padding: '0px',
    height: '100%',
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },

  },
  card: {
    marginTop: '5px',
    margin: '3px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: '15px',
  }
}))

const JobDetails = () => {

  const navigate = useNavigate();
  const classes = useStyles();


  return (
    <div className={classes.mainbox}>
      <Container>
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
          <Box sx={{
            padding: '20px',

          }}>
            <Typography variant="h5">
              <Box sx={{
                fontWeight: 'bold'
              }}>
                Block-Chain Developer
              </Box>
            </Typography>
            <Typography variant="h6">
              <Box sx={{
                fontWeight: 'regular'
              }}>
                CryptoNaukri
              </Box>
            </Typography>

            <Box sx={{
              fontWeight: 'regular',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingTop: '20px'
            }}>
              <div>

                <Typography variant="p">
                  <Box sx={{
                    fontWeight: 'bold',
                  }}>
                    Listing Date
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

          </Box>
        </Paper>

        <Typography variant="h5">
          <Box sx={{
            fontWeight: 'bold',
            padding:'10px'
          }}>
            Applicants
          </Box>
        </Typography>

        <Paper>
          <Box sx={{
            marginTop: '10px',
            padding: '10px'
          }}>
            <Typography variant="h6">
              <Box sx={{
                fontWeight: 'regular',
              }}>
                1. Ayush Bawane
              </Box>
            </Typography>
          </Box>
        </Paper>
        <Paper>
          <Box sx={{
            marginTop: '10px',
            padding: '10px'
          }}>
            <Typography variant="h6">
              <Box sx={{
                fontWeight: 'regular',
              }}>
                2. Pradnyashil Gajbhiye
              </Box>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default JobDetails
