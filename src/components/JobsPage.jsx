import { Container, Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import JobCard from './Job-Card/JobCard';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    body:{
        marginTop:'70px'
    }
}));

const JobsPage = (e) => {
    const classes = useStyles();
    const [dataArr, setDataArr] = React.useState([]);
    // const [datarr, setDataArr] = React.useState([]);


    useEffect(async ()=>{
        const response = await Axios.get('https://cryptonaukri-backend.herokuapp.com/jobs')
        .then((res)=>{
            setDataArr(res.data);
        })
        .catch((err)=>{
        });
    } ,[]);

    return (
        <div className={classes.body}>
            <Container>
                <Box sx={{
                    paddingTop: '20px'
                }}>
                    <h1 style={{ margin: '10px 0' }}>Discover jobs</h1>

                    {
                        dataArr.slice(0).reverse().map((e) => {
                            return <JobCard position={e.position} cmp={e.company} exp={e.experience} opn={e.openings} link={e.link} srNo={e._id}/>
                        })
                    }
                </Box>
            </Container>
        </div>
    )
  
}
export default JobsPage;

