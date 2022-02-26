import React from 'react';
import { Box, Paper, Typography, Button, makeStyles, CardActions, } from '@material-ui/core';
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
    width: '70%',
    height: '100%',
    backgroundColor: 'white',
    padding: '15px',
    fontWeight: 'light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.between('xs', 770)]: {
      width: '100%'
    },
  },
  rightBottom: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
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
}));

const JobCard = (props) => {
  let position = props.position;
  let company = props.company;
  let experience = props.exp;
  let openings = props.opn;
  
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

  const handleApply = ()=>{
    if (login) {
      window.open(`${props.link}`, "_blank");
    }else{
      toast.info('LogIn First !!');
    }
  }

  const classes = useStyles();
  return (
    <div>
      <Box className={classes.jobCardContainer}>
        <Box className={classes.jobCard}>
          <Box className={classes.left}>
            <Box
              className={classes.leftImg}
              component={'img'}
              src="img/job.png"
              alt="nhi mili bhai image"
            />
          </Box>
          <Box className={classes.right}>
            <Box>
              <Box className={classes.headcontain} >
                <Box >
                  <Typography className={classes.cardHead} variant={'h4'}>
                    <Box sx={{
                      fontWeight: '500',
                    }}>
                      {props.position}
                    </Box>
                  </Typography>
                  <Typography className={classes.cardComp} variant='h5'>
                    <Box sx={{
                      fontWeight: 'bold',
                    }}>
                      {props.cmp}
                    </Box>
                  </Typography>
                </Box>

                {localStorage.getItem("admin") ?
                  <Box className={classes.editbtn} >
                    <CardActions>
                      <Typography variant='button' >
                        <Button className={classes.btn} onClick={() => { handleEdit(props.srNo) }} size='small' color="primary" variant='contained' >
                          {<Edit />}
                        </Button></Typography>
                      <Typography variant='button'>
                        <Button className={classes.btn} onClick={() => { handleDelete(props.srNo) }} size='small' color="primary" variant='contained'>{<Delete />}</Button>
                      </Typography>
                    </CardActions>
                  </Box> : <></>
                }
              </Box>

            </Box>
            <Box className={classes.rightBottom}>
              <Box>
                <Box>
                  <Typography variant='p'>
                    <Box sx={{
                      fontWeight: 'regular',
                    }}>
                      Experience : <strong>{props.exp}</strong>
                    </Box>
                  </Typography>
                  <Typography variant='p'>
                    <Box sx={{
                      fontWeight: 'regular',
                    }}>
                      Openings : <strong>{props.opn}</strong>
                    </Box>
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button onClick={handleApply} className={classes.applyBtn} variant="outlined" color="primary">
                  Apply Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box >
    </div >
  )
}

export default JobCard 
