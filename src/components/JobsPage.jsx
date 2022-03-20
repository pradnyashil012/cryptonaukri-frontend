import { Container, Box, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import JobCard from './Job-Card/JobCard';
import JobCardLoading from './Job-Card/JobCardLoading';
import Axios from 'axios';

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


    useEffect(async ()=>{
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
                                dataArr.map((data) => {
                                    return(
                                        <JobCard 
                                            type={"job"}
                                            key={data._id} 
                                            position={data.jobTitle} 
                                            cmp={"Company Name"} 
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

