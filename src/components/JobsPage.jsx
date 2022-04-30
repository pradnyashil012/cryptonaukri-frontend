import { Container, Box, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import JobCard from './Job-Card/JobCard';
import JobCardLoading from './Job-Card/JobCardLoading';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
    body:{
        marginTop:'70px'
    }
}));

const JobsPage = (e) => {
    const classes = useStyles();
    const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [datarr, setDataArr] = React.useState([]);


    const navigate = useNavigate();

    useEffect(async ()=>{
        if(!localStorage.getItem('token')){
            navigate('/devlogin');
            toast.error('Please login first !!');
        }
        setLoading(true);
        const response = await Axios.get('https://cryptonaukribackend.herokuapp.com/api/v1/jobs/findJob')
        .then((res)=>{
            const resp = res.data;
            console.log(resp.data);
            setDataArr(resp.data);
            console.log(dataArr);
            setLoading(false);
            
        })
        .catch((err)=>{
            setLoading(false);
        });
    } ,[]);

    return (
        <div className={classes.body}>
            <Container>
                <Box sx={{
                    paddingTop: '20px'
                }}>
                    <h1 style={{ margin: '10px 0' }}>Discover jobs</h1>
                    {loading?
                        <>
                            <JobCardLoading />
                            <JobCardLoading />
                            <JobCardLoading />
                        </>:<>
                            {
                                dataArr.reverse().map((data) => {
                                    return(
                                        <JobCard 
                                            type={"job"}
                                            key={data._id} 
                                            position={data.jobTitle} 
                                            cmp={data.postedByDetails.companyName} 
                                            exp={data.experience} 
                                            opn={data.openings}
                                            sr={data._id} 
                                        />
                                    );
                                })
                            }
                    </>}

                    
                </Box>
            </Container>
        </div>
    )
}
export default JobsPage;

