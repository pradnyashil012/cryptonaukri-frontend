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


    useEffect(async () => {
        setLoading(true);
        const response = await Axios.get('https://cryptonaukri-backend.herokuapp.com/internships')
            .then((res) => {
                setLoading(false); 
                setDataArr(res.data);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, []);
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
                                dataArr.slice(0).reverse().map((e) => {
                                    return <InternshipCard position={e.position} cmp={e.company} opn={e.openings} link={e.link} srNo={e._id}/>
                                })
                            } 
                    </>}
                </Box>
            </Container>
        </div>
    )
}
export default InternshipPage;