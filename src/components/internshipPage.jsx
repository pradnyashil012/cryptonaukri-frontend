import { Container, Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import InternshipCard from './internships/Internship-Card';
import JobCardLoading from './Job-Card/JobCardLoading';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    body:{
        marginTop:'70px'
    }
}));

const InternshipPage = () => {
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
                    <h1 style={{ margin: '10px 0' }}>Discover Internships</h1>
                    {loading?
                        <>
                            <JobCardLoading />
                            <JobCardLoading />
                            <JobCardLoading />
                        </>:<>
                            {
                                dataArr.slice(0).reverse().map((internship) => {
                                    //console.log(internship);

                                    return( 
                                        <InternshipCard 
                                            position={internship.jobTitle} 
                                            cmp={internship.postedByDetails.companyName} 
                                            opn={internship.openings}
                                            perks={internship.perks.split}
                                            key={internship._id}
                                            srId={internship._id}
                                            type={"internship"}
                                        />);
                                })
                            } 
                    </>}
                </Box>
            </Container>
        </div>
    )
}
export default InternshipPage;