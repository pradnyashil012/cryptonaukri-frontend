import React, { useState, useEffect } from 'react';
import {
  Box,
  Modal,
  Paper,
  Typography,
  Button,
  makeStyles,
  CardActions,
  Container,
  Chip,
} from '@material-ui/core';
import { spacing } from '@mui/system';
import { Delete, Edit } from '@material-ui/icons';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from '@mui/material/Skeleton';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    backgroundColor: theme.palette.primary.main,
    boxShadow: 540,
    borderRadius: 2,
    p: 4,
    mt: 10,
  },
  jobCardContainer: {
    [theme.breakpoints.between('xs', 770)]: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
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
      padding: 0,
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
      width: '100%',
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
      width: '100%',
    },
  },
  applyBtn: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
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
      margin: '0',
    },
  },

  btn: {
    border: 'blue solid 1px',
    '&:hover': {
      border: 'blue solid 1px',
      backgroundColor: 'white',
      color: 'blue',
    },
  },
  body: {
    marginTop: '100px',
  },
  Chip: {
    margin: '5px',
  },
  Chip2: {
    margin: '5px',
    backgroundColor: 'blue',
  },
}));

const ApplyJob = (props) => {
  const token = localStorage.getItem('token');
  const API = process.env.REACT_APP_API_ENDPOINT;
  var url_string = window.location.href;
  var url = new URL(url_string);
  var jobid = url.searchParams.get('id');
  var jobtype = url.searchParams.get('type');
  // const jobDescription = jobdesc.split("::");
  // console.log(jobDescription);

  // let position = props.position;
  // let company = props.company;
  // let experience = props.exp;
  // let openings = props.opn;

  const [applied, setApplied] = useState(false);
  const [open, setOpen] = useState(false);
  const [jobInfo, setJobInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(1);
  const [avl, setAvl] = useState('');
  const [whyHire, setWhyHire] = useState('');
  const [resumeLink, setResumeLink] = useState('');

  const login = localStorage.getItem('login');
  const navigate = useNavigate();

  const jobAPI = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/jobs/`;
  const internAPI = `${process.env.REACT_APP_API_ENDPOINT}/api/v1/internship/`;

  useEffect(() => {

    const fetchJob = async () => {
      try {
        setLoading(true);
        var endpoint = '';
        jobtype === 'internship'
          ? (endpoint = internAPI + 'findInternship')
          : (endpoint = jobAPI + 'findJob');
        console.log(endpoint);
        const response = await axios.get(`${endpoint}/${jobid}`);
        //console.log(response.data.details);
        const jobdata = response.data.details;
        setJobInfo(jobdata);
        //console.log(jobdata);
        //console.log(jobInfo);
        setLoading(false);
      } catch (error) {
        //console.log(error.response);
        toast.error('Something went wrong !!');
      }
    };
    fetchJob();
  }, []);

  var jobPostedTime = jobInfo ? jobInfo.postedOn.split('T') : '';
  //console.log(jobPostedTime);

  const response = axios.get(`${API}/api/v1/user/loggedInUserDetails`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  response.then((data) => {
    // console.log(data);
    setResumeLink(data?.data?.userResume?.links?.otherLinks[0]);
    // setUser(data.data);
  });

  const handleStage2 = () => {
    if (resumeLink.length > 1) {
      setStage(2);
      console.log(resumeLink.length);
    } else {
      toast.error('Please update your resume link in your profile first 😔');
    }
  };

  const handleApply = async () => {
    //console.log("ok apply krneka idhhr handle kari bhai !!");
    //console.log(whyHire, avl);
    var token = localStorage.getItem('token');

    try {
      var endpoint = '';
      jobtype === 'internship'
        ? (endpoint = internAPI + 'applyInternship')
        : (endpoint = jobAPI + 'applyJob');

      if (jobtype === 'internship') {
        const response = await axios.post(
          endpoint,
          {
            internshipAssociated: jobInfo._id,
            whyHire: whyHire,
            candidateAvailability: avl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.code === 'INTERNSHIP_APPLIED') {
          toast.success('You have success fully applied for the job !!');
          setStage(3);
        }
      } else {
        const response = await axios.post(
          endpoint,
          {
            jobAssociated: jobInfo._id,
            whyHire: whyHire,
            candidateAvailability: avl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //console.log(response);
        if (response.data.code === 'JOB_APPLIED') {
          toast.success('You have success fully applied for the job !!');
          setStage(3);
        }
      }
    } catch (error) {
      //console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  const classes = useStyles();

  if (loading) {
    return (
      <div className={classes.body}>
        <Box className={classes.jobCardContainer}>
          <Container>
            <Box className={classes.right}>
              <Box>
                <Box className={classes.headcontain}>
                  <Box>
                    <Typography className={classes.cardHead} variant={'h4'}>
                      <Box
                        sx={{
                          fontWeight: '500',
                        }}
                      >
                        <Skeleton variant='text' />
                      </Box>
                    </Typography>
                    <Typography className={classes.cardComp} variant='h5'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        <Skeleton variant='text' />
                      </Box>
                    </Typography>
                    Posted by <Skeleton variant='text' />
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    fontWeight: 'regular',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                  }}
                >
                  <div>
                    <Typography variant='p'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Posted On
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 'regular',
                        }}
                      >
                        <Skeleton variant='text' />
                      </Box>
                    </Typography>
                  </div>
                  <div>
                    {jobtype === 'job' ? (
                      <>
                        <Typography variant='p'>
                          <Box
                            sx={{
                              fontWeight: 'bold',
                            }}
                          >
                            Fixed Pay
                          </Box>
                          <Box
                            sx={{
                              fontWeight: 'regular',
                            }}
                          >
                            <Skeleton variant='text' />
                          </Box>
                        </Typography>
                      </>
                    ) : (
                      <Typography variant='p'>
                        <Box
                          sx={{
                            fontWeight: 'bold',
                          }}
                        >
                          Duration
                        </Box>
                        <Box
                          sx={{
                            fontWeight: 'regular',
                          }}
                        >
                          <Skeleton variant='text' />
                        </Box>
                      </Typography>
                    )}
                  </div>
                  <div>
                    <Typography variant='p'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        CTC
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 'regular',
                        }}
                      >
                        <Skeleton variant='text' />
                      </Box>
                    </Typography>
                  </div>
                  <div>
                    <Typography variant='p'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Applications
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 'regular',
                        }}
                      >
                        <Skeleton variant='text' />
                      </Box>
                    </Typography>
                  </div>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      About Company
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      <Skeleton variant='text' />
                      <Skeleton variant='text' />
                      <Skeleton variant='text' />

                      <br />
                      <br />
                      <Skeleton variant='text' />
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      About Job
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      <Skeleton variant='text' />
                      <Skeleton variant='text' />
                      <Skeleton variant='text' />
                      <Skeleton variant='text' />
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      Required Skill(s)
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      <Skeleton variant='text' />
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      No. of Openings
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      <Skeleton variant='text' />
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    );
  }

  return (
    <div className={classes.body}>
      {jobInfo && stage === 1 ? (
        <Box className={classes.jobCardContainer}>
          <Container>
            <Box className={classes.right}>
              <Box>
                <Box className={classes.headcontain}>
                  <Box>
                    <Typography className={classes.cardHead} variant={'h4'}>
                      <Box
                        sx={{
                          fontWeight: '500',
                        }}
                      >
                        {jobInfo.jobTitle}
                      </Box>
                    </Typography>
                    <Typography className={classes.cardComp} variant='h5'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        <a href={jobInfo.postedByDetails.websiteLink} target="_blank" rel="noopener noreferrer">{jobInfo.postedByDetails.companyName}</a>
                      </Box>
                    </Typography>
                    Posted by {jobInfo.postedByDetails.executiveName}
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    fontWeight: 'regular',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    flexWrap: 'wrap',
                    gap: '4%',
                  }}
                >
                  <div>
                    <Typography variant='p'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Posted On
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 'regular',
                        }}
                      >
                        {jobPostedTime[0]}
                      </Box>
                    </Typography>
                  </div>
                  <div>
                    {jobtype == 'job' ? (
                      <>
                        <Typography variant='p'>
                          <Box
                            sx={{
                              fontWeight: 'bold',
                            }}
                          >
                            Fixed Pay
                          </Box>
                          <Box
                            sx={{
                              fontWeight: 'regular',
                            }}
                          >
                            {(jobInfo.fixedPay)?.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'INR',
                          })}
                          </Box>
                        </Typography>
                      </>
                    ) : (
                      <Typography variant='p'>
                        <Box
                          sx={{
                            fontWeight: 'bold',
                          }}
                        >
                          Duration
                        </Box>
                        <Box
                          sx={{
                            fontWeight: 'regular',
                          }}
                        >
                          {jobInfo.duration}
                        </Box>
                      </Typography>
                    )}
                  </div>
                  <div>
                    <Typography variant='p'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        {jobtype === 'internship' ? <>Stipend</> : <>CTC</>}
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 'regular',
                        }}
                      >

                        {jobtype==='internship'?<>{
                          (jobInfo.stipend.amount)?.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'INR',
                          })
                          }</>:<>{
                            (jobInfo.ctc)?.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'INR',
                            })
                          }</>}
                      </Box>
                    </Typography>
                  </div>
                  <div>
                    <Typography variant='p'>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Applicants
                      </Box>
                      <Box
                        sx={{
                          fontWeight: 'regular',
                        }}
                      >
                        {jobInfo.numberOfApplicants}
                      </Box>
                    </Typography>
                  </div>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      About Company
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      {jobInfo.postedBy.description}

                      <br />
                      <br />
                      {jobInfo.healthInsurance ? (
                        <Chip
                          className={classes.Chip}
                          label={'Health Insurance'}
                        />
                      ) : (
                        <></>
                      )}
                      {jobInfo.informalDress ? (
                        <Chip
                          className={classes.Chip}
                          label={'Informal Dress'}
                        />
                      ) : (
                        <></>
                      )}
                      {jobInfo.incentives ? (
                        <Chip className={classes.Chip} label={'Incentives'} />
                      ) : (
                        <></>
                      )}
                      {jobInfo.isRemote ? (
                        <Chip className={classes.Chip} label={'Remote'} />
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      About Job
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      {jobInfo.responsibilities || jobInfo.jobDescription}
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      Required Skill(s)
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      {jobInfo.skills.map((skill) => {
                        console.log(skill)
                        return <><Chip className={classes.Chip} label={skill} /></>;
                      })}
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant='h6'>
                    <Box
                      sx={{
                        fontWeight: 'bold',
                        padding: '5px',
                      }}
                    >
                      No. of Openings
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box
                      sx={{
                        fontWeight: 'regular',
                        padding: '5px',
                      }}
                    >
                      {jobInfo.openings}
                    </Box>
                  </Typography>
                </Box>

                {token ? (
                  <Box
                    sx={{
                      textAlign: 'center',
                      marginTop: '20px',
                    }}
                  >
                    {applied ? (
                      <Button
                        onClick={handleApply}
                        className={classes.applyBtn}
                        disabled
                        variant='outlined'
                        color='primary'
                      >
                        Already Applied
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          handleStage2();
                        }}
                        className={classes.applyBtn}
                        variant='outlined'
                        color='primary'
                      >
                        Apply
                      </Button>
                    )}
                  </Box>
                ) : (
                  <>
                    <Box
                      sx={{
                        textAlign: 'center',
                        marginTop: '20px',
                      }}
                    >
                      <Button
                        onClick={() => {
                          navigate(
                            `/auth/devlogin?redirectid=${jobid}&redirecttype=${jobtype}`
                          );
                        }}
                        className={classes.applyBtn}
                        variant='outlined'
                        color='primary'
                      >
                        Login to apply
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Container>
          <br />
          <br />
          <br />
          <br />
        </Box>
      ) : (
        <></>
      )}
      {stage == 2 ? (
        <>
          <Box className={classes.jobCardContainer}>
            <Container>
              <Box className={classes.right}>
                <Typography className={classes.cardComp} variant='h5'>
                  <Box
                    sx={{
                      fontWeight: 'semibold',
                    }}
                  >
                    Answer the following to questions to move forward
                  </Box>
                </Typography>
                <br />

                {/* <TextField
                  sx={{ marginTop: 3 }}
                  fullWidth
                  label="Resume Link ?"
                  id="taskDescription"
                  placeholder="Update the link in your profile and it will auto-filled next time"
                  multiline
                  rows={2}
                  maxRows={1}
                  value={resumeLink}
                  onChange={(e) => {
                    setResumeLink(e.target.value);
                  }}
                />
                <br /> */}
                <TextField
                  sx={{ marginTop: 3 }}
                  fullWidth
                  label='Why Should we hire you?'
                  id='taskDescription'
                  placeholder='Be creative, think what makes you different.'
                  multiline
                  rows={2}
                  maxRows={4}
                  value={whyHire}
                  onChange={(e) => {
                    setWhyHire(e.target.value);
                  }}
                />
                <br />
                <TextField
                  sx={{ marginTop: 3 }}
                  fullWidth
                  label='When can you start working ?'
                  id='taskDescription'
                  placeholder='Can you join immediately?. Tell us more about you availiblity'
                  multiline
                  rows={2}
                  maxRows={4}
                  value={avl}
                  onChange={(e) => {
                    setAvl(e.target.value);
                  }}
                />
                <br />
                <Button
                  sx={{ maxWidth: '200px' }}
                  onClick={() => {
                    handleApply(1);
                  }}
                  className={classes.applyBtn}
                  variant='contained'
                  color='primary'
                >
                  Submit
                </Button>
                <br />
                <Button
                  sx={{ maxWidth: '200px' }}
                  onClick={() => {
                    setStage(1);
                  }}
                  className={classes.applyBtn}
                  variant='outlined'
                  color='primary'
                >
                  Back
                </Button>
              </Box>
            </Container>
          </Box>
        </>
      ) : (
        <></>
      )}
      {stage === 3 ? (
        <>
          <Box className={classes.jobCardContainer}>
            <Container>
              <Box className={classes.right}>
                <Typography className={classes.cardComp} variant='h4'>
                  <Box
                    sx={{
                      fontWeight: 'bold',
                      color: 'green',
                    }}
                  >
                    🎉🎉🎉 Congratulationss! you have successfully applied for
                    the job.
                  </Box>
                </Typography>
                <Typography className={classes.cardComp} variant='h6'>
                  <Box
                    sx={{
                      fontWeight: '',
                      color: 'green',
                    }}
                  >
                    Rest be assured your application will be sent to the
                    recruiter
                  </Box>
                </Typography>
                <br />
                <Button
                  sx={{ maxWidth: '200px' }}
                  onClick={() => {
                    setStage(1);
                  }}
                  className={classes.applyBtn}
                  variant='outlined'
                  color='primary'
                >
                  Back
                </Button>
              </Box>
            </Container>
          </Box>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ApplyJob;
