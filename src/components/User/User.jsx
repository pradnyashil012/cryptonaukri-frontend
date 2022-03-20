import React, { useEffect, useState } from 'react';
import {
    TextField,
    Modal,
    Typography,
    Box, 
    Button,
} from '@mui/material';
import { AccountCircle } from "@material-ui/icons";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const styles = {
    "modal":{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth:500,
        bgcolor: 'background.paper',
        boxShadow: 540,
        borderRadius: 2,
        p: 4,
        mt:10,
    }
}

const User = () =>{

    const token = localStorage.getItem('token');

    const [user, setUser] = useState();
    const navigate = useNavigate();

    const getUser = async() =>{
        if(token){
            console.log(token.split('"')[1]);
            
            const response = await axios.get('https://cryptonaukribackend.herokuapp.com/api/v1/user/loggedInUserDetails', {
                                headers: {
                                "Authorization": `Bearer ${token.split('"')[1]}`,
                                }
                            });
            console.log(response.data);
            setUser(response.data);
        }
        else{
            toast.error("Please Login first !!");
            navigate('/');
        }
    }
    
    useEffect(()=>{
        if(!token){
            toast.error("Please Login first !!");
            navigate('/');
        }
        getUser();
    },[])

    return (
        <>
            {user?<Box sx={styles['modal']}>
                <Typography variant="h5" gutterBottom align={'center'}>{user.firstName +" "+ user.lastName}</Typography><br />
                📧 {user.email}<br />
                📍 {user.location}
            </Box>:<></>}
        </>
    );
}

export default User;