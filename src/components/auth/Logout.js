import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify";
import { useNavigate, useLocation } from 'react-router-dom';

const Logout = () =>{

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies(["token"]);
    const token = cookies.token;
    const location = useLocation();

    useEffect(()=>{

        if(token){
            removeCookie("token");
            localStorage.clear();
            toast.success("Succesfully Logged out !!");
            navigate('/');
            return;
        }else{
            toast.error("Please Login first !!");
            navigate('/');
        }
        
    },[])

    return <>Logging out...</>;

}

export default Logout;