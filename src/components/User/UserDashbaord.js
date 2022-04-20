import React,{useState, useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { 
    FaEnvelope,
    FaLocationArrow,
    FaPhoneAlt,
    FaEdit,
    FaRegCopy,
    FaRegShareSquare,
    FaEye,
    FaPlus,
    FaInfoCircle
} from 'react-icons/fa';
const Profile = () =>{

    // will be swtiched to custom hooks later
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // state variables
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [activeTab, setActiveTab] = useState(1);


    // get user data
    const fetchUserData = () =>{
        setLoading(true);
        if(token){
            const response =  axios.get('https://cryptonaukribackendtest.herokuapp.com/api/v1/user/loggedInUserDetails', {
                                headers: {
                                "Authorization": `Bearer ${token}`,
                                }
                            });
            response.then((data)=>{
                console.log(data.data);
                setUser(data.data);
                setLoading(false);
            })
            setUser(response.data);   
        }
        else{
            setLoading(false);
            toast.error("Please Login first !!");
            navigate('/');
        }
    }

    // copy cuopon code
    const copyCode = (ccode) =>{
        try{
            navigator.clipboard.writeText(`https://www.cryptonaukri.com/userSignUp?code=${ccode}`);
            toast.success('Cuopon copied to clipboard');
        }catch(error){
            toast.error('Something went wrong!!')
        }
    }

    useEffect(()=>{
        if(!token){  // if not logged in return to home screen
            toast.error("Please Login first !!");
            navigate('/');
        }    
        fetchUserData(); // fetch user data if token is present
    },[])

    if(loading){
        return <>Loading...</>;
    }else{
        return <>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="
            mt-25
            bg-white
            m-auto 
            max-w-5xl
            p-4
            shadow-md
            rounded
        ">
            <span className="
                text-black 
                text-2xl 
                capitalize
                font-semibold
            ">👋 {user.firstName+" "+user.lastName}</span>

            <div className="
                rounded
                max-w-md
                p-1
                mt-2
            "> 
                <div className="
                    text-md
                    text-blue-600
                    flex
                    mt-2
                ">
                    <FaEnvelope className="m-2" /> 
                    <span className="mt-1">{user.email}</span> 
                </div>
                <div className="
                    text-md
                    text-blue-600
                    flex
                ">
                    <FaPhoneAlt className="m-2" /> 
                    <span className="mt-1">{user.phoneNumber}</span> 
                </div>

                <div className="
                    text-md
                    text-blue-600
                    flex
                    capitalize
                ">
                    <FaLocationArrow className="m-2" /> 
                    <span className="mt-1">{user.location}</span>
                </div>
                <div className="
                    flex
                    justify-around 
                    ring-2
                    ring-blue-600
                    rounded
                    p-1
                    max-w-min
                    mt-1
                    mr-1
                    ml-2
                ">
                    <span className="text-xl font-semibold text-blue-800">R732YYU</span>
                    <button className="
                        hover:bg-blue-800
                        rounded
                        text-blue-600 hover:text-white
                        p-1
                        text-xl
                        mr-1
                        ml-2"
                        onClick={()=>{copyCode('R732YYU')}}
                    ><FaRegCopy/></button>
                    <button className="
                        hover:bg-blue-800
                        rounded
                        text-blue-600 hover:text-white
                        p-1
                        text-xl
                        mr-1
                        ml-2
                    "><FaRegShareSquare/></button>
                </div>
                <span className="ml-1 text-xs flex text-gray-400 mt-2"><FaInfoCircle className="mr-1 ml-1" /> Share the cupon code to increase your free period time on this platform.</span>
                <div className="
                    mt-3 
                ">
                    <span className="text-xl mr-2">My Resume</span>
                    <div className="
                        flex
                        pl-2
                        pr-2
                        pt-1
                    ">
                        <FaEye className="text-xl ml-2 mr-2" />
                        <button className="
                            text-md text-2xl
                            ml-2 mr-2
                        "><FaEdit/></button>
                        <button className="
                            text-md text-2xl
                            ml-2 mr-2
                        "><FaPlus/></button>
                    </div>
                </div>
            </div>
            
            <div className="
                p-4 
                mt-2 
                shadow-md 
                shadow-slate-300
                rounded
            ">
                <span className="text-xl font-semibold">My Applications</span>
                <div className="flex items-stretch">
                    <button 
                        onClick={()=>setActiveTab(1)}
                        className={`w-full px-2 py-2 text-xl text-bold border-b-2  ${activeTab===1?'text-blue-500 font-semibold  border-blue-500':'text-gray-300 border-gray-300'}`}
                    >Jobs</button>
                    <button 
                        onClick={()=>setActiveTab(2)}
                        className={`w-full px-2 py-2 text-xl text-bold border-b-2  ${activeTab===2?'text-blue-500 font-semibold  border-blue-500':'text-gray-300 border-gray-300 '}`}
                    >Internships</button>
                </div>
                <div className="p-2 text-xl">
                    {activeTab===1?<>This is jobs</>:<></>}
                    {activeTab===2?<>This is Internship</>:<></>}
                </div>
            </div>
        </div>
        
        </>
    }
}

export default Profile