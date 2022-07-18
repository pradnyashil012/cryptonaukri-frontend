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
import {FiHome} from 'react-icons/fi';
import {GrLocation} from 'react-icons/gr';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdOutlineOutbond, MdPeopleOutline, MdDateRange, MdMapsHomeWork} from 'react-icons/md'
import {GiMoneyStack} from 'react-icons/gi'
import {BiLinkExternal} from 'react-icons/bi'

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
        console.log(response.data);
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

  // class="mx-auto flex w-full max-w-3xl flex-col bg-gray-50 px-6 dark:bg-gray-900 md:px-0"

  return (
    <div className='w-full bg-gray-800 text-white'>
    {jobInfo && stage === 1 ? (
        <div className="px-3 pt-28 mx-auto w-full max-w-4xl md:px-0 pb-5">
          <div className='text-2xl'>
            {
            jobtype == 'job' ? 
              <>{jobInfo.jobTitle}</> :
              <>{jobInfo.internshipTitle}</>
            }
          </div>
          <div className='text-base text-gray-300 flex items-center'><MdMapsHomeWork/><span className='ml-1.5'>{jobInfo.postedByDetails.companyName}</span></div>
          <div className='mt-3 flex items-center'>
            {
              jobInfo.isRemote === true ?
              <FiHome /> :
              <HiOutlineLocationMarker />
            }
            <p className='ml-1'>{jobInfo.location}</p>
          </div>
          {
            jobtype == 'job' ? 
            <div className='flex items-center justify-between mt-2'>
              <div className='flex flex-col items-start justify-center'>
                <div className='flex items-center'><GiMoneyStack/><p className='ml-1'>CTC</p></div>
                <div className='text-sm text-gray-300'>
                  {(jobInfo.ctc)?.toLocaleString('en-US',{style:'currency', currency:'INR'})}
                </div>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <div className='flex items-center'><MdOutlineOutbond /><p className='ml-1'>Fixed Pay</p></div>
                <div className='text-sm text-gray-300'>
                  {
                    jobInfo.fixedPay !== undefined ?
                    <>{jobInfo.fixedPay}</> :
                    "NA"
                  }
                </div>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <div className='flex items-center'><MdPeopleOutline/><p className='ml-1'>Applicants</p></div>
                <div className='text-sm text-gray-300'>{jobInfo.numberOfApplicants}</div>
              </div>
            </div> : 
            <div className='flex items-center justify-between mt-2'>
              <div className='flex flex-col items-start justify-center'>
                <div className='flex items-center'><GiMoneyStack/><p className='ml-1'>Stipend</p></div>
                <div className='text-sm text-gray-300'>
                  {(jobInfo.stipend.amount)?.toLocaleString('en-US',{style:'currency', currency:'INR'})}
                </div>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <div className='flex items-center'><MdDateRange /><p className='ml-1'>Duration</p></div>
                <div className='text-sm text-gray-300'>
                  {jobInfo.duration===""?"NA":jobInfo.duration}
                </div>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <div className='flex items-center'><MdPeopleOutline/><p className='ml-1'>Applicants</p></div>
                <div className='text-sm text-gray-300'>{jobInfo.usersApplied.length}</div>
              </div>
            </div>
          }
          <div className='mt-2'>
            <div className='text-sm'>Posted by <span className='text-gray-300'>{jobInfo.postedByDetails.executiveName}</span> on <span className='text-gray-300'>{jobPostedTime[0]}</span></div>
          </div>
          <div className='w-full my-2 text-gray-300 border-t'></div>
          <div className='mt-3'>
            <div className='text-xl'>About Company</div>
            {
              jobtype === 'job' ?
              <a href={jobInfo.postedByDetails.websiteLink} target="_blank" className='text-cyan-600 w-fit'>
                <div className='flex items-center w-fit'><span className='mr-1'>Website</span><BiLinkExternal/></div>
              </a> :
              <a href={jobInfo.postedBy.websiteLink} target="_blank" className='text-cyan-600 w-fit'>
                <div className='flex items-center w-fit'><span className='mr-1'>Website</span><BiLinkExternal/></div>
              </a>
            }
            {
              jobInfo.postedBy.description === undefined ?
              <div className='text-base text-gray-300'>NA</div> :
              <div className='text-base text-gray-300'>{jobInfo.postedBy.description}</div>
            }
          </div>

          <div className='mt-3'>
            <div className='text-xl'>Perks</div>
            {
              jobtype === 'job' ?
              <div className='flex flex-wrap gap-2 mt-2'>
                {
                  jobInfo.healthInsurance ?
                  <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>Health Insurance</div> : null
                }
                {jobInfo.informalDress ? 
                  <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>Informal Dress</div> : null 
                }
                {jobInfo.incentives ? 
                  <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>Incentives</div> : null
                }
              </div> :
              <div className='flex flex-wrap gap-2 mt-2'>
              {
                jobInfo.perks.certificate ?
                <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>Certificate</div> : null
              }
              {jobInfo.perks.food ? 
                <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>Food</div> : null 
              }
              <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>Work Hours: {jobInfo.perks.workHours}</div>
              {jobInfo.perks.letterOfRecommendation ? 
                <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>Letter Of Recommendation</div> : null
              }
              {jobInfo.perks.isPPO ? 
                <div className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>PPO</div> : null
              }
            </div>
            }
          </div>
          
          <div className='mt-3'>
            <div className='text-xl'>{jobtype === 'job' ? "Job Description" : "Responsibilities"}</div>
            {
              jobtype === 'job' ?
              <div className='text-base text-gray-300'>
                {
                  jobInfo.jobDescription === "" ?
                  "NA" : jobInfo.jobDescription === undefined ? "NA" : <>{jobInfo.jobDescription}</>
                }
              </div> : 
              <div className='text-base text-gray-300'>
                {
                  jobInfo.responsibilities === "" ?
                  "NA" : jobInfo.responsibilities === undefined ? "NA" : <>{jobInfo.responsibilities}</>
                }
              </div>
            }
          </div>

          <div className='mt-3'>
            <div className='text-xl'>Required Skills</div>
            <div className='flex gap-2 flex-wrap'>
              {
                jobInfo.skills.map((skill, index)=>{
                  return (
                    <div key={index} className='grow-0 shrink py-1 px-2 rounded-2xl bg-slate-500 text-white text-sm w-fit'>{skill}</div>
                    )
                  })
                }
            </div>
          </div>

          <div className='mt-3'>
            <div className='text-xl'>Number of openings</div>
            <div className='text-base text-gray-300'>{jobInfo.openings}</div>
          </div>

          {/* style={{border: "1px solid #043771", backgroundColor: "#043771"}} */}
          {/* border border-cyan-900 hover:bg-blue-900 */}
          {/* style={{border: '1px solid #06366C'}} */}
          <div className='mt-3'>
            {
              token ?
              <>
              {
                applied ?
                  <button className='px-3 py-1.5 rounded-md bg-blue-800 hover:bg-blue-900'>ALREADY APPLIED</button> :
                  <button onClick={() => {
                    handleStage2();
                  }} className='px-3 py-1.5 rounded-md bg-blue-800 hover:bg-blue-900'>APPLY</button>
                  
              }
              </> :
              <>
                <button onClick={() => {
                  navigate(`/auth/devlogin?redirectid=${jobid}&redirecttype=${jobtype}`)
                  }} className='px-3 py-1.5 rounded-md bg-blue-800 hover:bg-blue-900'>LOGIN TO APPLY</button>
              </>

            }
          </div>
        </div>
      ) : (
        <></>
      )}
      {stage === 2 ? (
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
