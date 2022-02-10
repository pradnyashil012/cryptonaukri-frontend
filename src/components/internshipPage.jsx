import { Container, Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import InternshipCard from './internships/Internship-Card';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    body:{
        marginTop:'70px'
    }
}));

const InternshipPage = () => {
    const classes = useStyles();
    const [dataArr, setDataArr] = React.useState([]);
    // const [datarr, setDataArr] = React.useState([]);


    useEffect(async () => {
        const response = await Axios.get('https://cryptonaukri-backend.herokuapp.com/internships')
            .then((res) => {
                setDataArr(res.data);
            })
            .catch((err) => {
            });
    }, []);
    return (
        <div className={classes.body}>
            <Container>
                <Box sx={{
                    paddingTop: '20px'
                }}>
                    <h1 style={{ margin: '10px 0' }}>Discover Internships</h1>
                    {
                        dataArr.slice(0).reverse().map((e) => {
                            return <InternshipCard position={e.position} cmp={e.company} opn={e.openings} link={e.link} srNo={e._id}/>
                        })
                    } 
                </Box>
            </Container>
        </div>
    )
}
export default InternshipPage;