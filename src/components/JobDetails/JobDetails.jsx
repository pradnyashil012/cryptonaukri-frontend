import React, { useState, useEffect } from "react";
import { Container, Grid, Box, makeStyles, Typography, ButtonGroup, Button, Card, CardHeader, CardContent, CardActions, List, ListItem, Paper, MenuList, MenuItem, Divider } from "@material-ui/core";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';

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

  var url_string = window.location.href;
  var url = new URL(url_string);
  var jobid = url.searchParams.get("id");

  const [jobInfo, setJobInfo] = useState("");
  const [usersData, setUsersData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  //console.log(jobid);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await Axios.get(
        `https://cryptonaukribackend.herokuapp.com/api/v1/jobs/findJob/${jobid}`
      );
      const jobdata = response.data.details;
      //console.log(jobdata);
      setUserLoading(true);
      jobdata.usersApplied.map(async(user, index)=>{
          const response2 = await Axios.get(`https://cryptonaukribackend.herokuapp.com/api/v1/user/userDetails?userID=${user.userAssociated}`)
          const duser = response2.data.details;
          jobdata.usersApplied[index].email = duser.email;
          jobdata.usersApplied[index].name = duser.firstName+" "+duser.lastName ;
          setUsersData(usersData=>[...usersData, duser.firstName]);
          console.log(usersData)
      });
      setUserLoading(false);
      console.log(jobdata)
      setJobInfo(jobdata);
      //setJobInfo(jobdata);
      setLoading(false);
      //console.log(jobdata);

      // jobdata.usersApplied.map((user, index)=>{
      //     fetchUserData(user.userAssociated);
      // })
      
    } catch(error) {
      setLoading(false);
      console.log(error.response);
      toast.error("Something went wrong !!!");
    }
  }, []);


  

  if(loading || !jobInfo){
    return <>Loading...</>
  }

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
                
                {jobInfo.jobTitle}
              </Box>
            </Typography>
            <Typography variant="h6">
              <Box sx={{
                fontWeight: 'regular'
              }}>
                {jobInfo.postedByDetails.companyName}
              </Box>
            </Typography>
            <Typography variant="p">
              <Box sx={{
                fontWeight: 'regular'
              }}>
                Details : {jobInfo.jobDescription}
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
                  {jobInfo.postedOn.split("T")[0]}
                  </Box>
                </Typography>
              </div>
              <div>

                <Typography variant="p">
                  <Box sx={{
                    fontWeight: 'bold',
                  }}>
                    Experince
                  </Box>
                  <Box sx={{
                    fontWeight: 'regular',
                  }}>
                    {jobInfo.experience}
                  </Box>
                </Typography>
              </div>
              <div>

                <Typography variant="p">
                  <Box sx={{
                    fontWeight: 'bold',
                  }}>
                    CTC
                  </Box>
                  <Box sx={{
                    fontWeight: 'regular',
                  }}>
                    {jobInfo.ctc}
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
                    {jobInfo.usersApplied.length}
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
        {jobInfo.usersApplied.length === 0?<>Oops you currently have 0 applicants for this job</>:<></>}
        {userLoading?<>Loading...</>:<>{
            jobInfo.usersApplied.map((user, index)=>{
              //console.log(user);
              console.log(user.email);
              //const  userDetails = user.userDetials;
              return <><Paper key={user.userAssociated}>
              <Box sx={{
                marginTop: '10px',
                padding: '10px'
              }}>
                <Typography variant="h6">
                  <Box sx={{
                    fontWeight: 'regular',
                  }}>
                    {index+1}. {user.name}
                  </Box>
                </Typography>
                <Typography variant="p">
                  <Box sx={{
                    fontWeight: 'regular',
                  }}>
                    {user.email}
                  </Box>
                </Typography><br />
                <Button 
                  type='button' 
                  onClick={()=>{setOpen(!open)}}
                  variant="outlined"
                  color="primary"
                >
                  {open?<>Close</>:<>Details</>}
                </Button>
                {
                  open?<>
                    <Typography variant="h6">
                      <Box sx={{
                        fontWeight: 'regular',
                      }}>
                        Q1. Why Hire
                      </Box>
                    </Typography>
                    <Typography variant="p">
                      <Box sx={{
                        fontWeight: 'regular',
                      }}>
                        Ans : {user.whyHire}
                      </Box>
                    </Typography>
                    <br />
                    <Typography variant="h6">
                      <Box sx={{
                        fontWeight: 'regular',
                      }}>
                        Q2. Candidate Availability 
                      </Box>
                    </Typography>
                    <Typography variant="p">
                      <Box sx={{
                        fontWeight: 'regular',
                      }}>
                        Ans : {user.candidateAvailability}
                      </Box>
                    </Typography>
                  </>:<></>
                }
              </Box>
            </Paper></>
          })
        }</>}
        
        
      </Container>
    </div>
  )
}

export default JobDetails
