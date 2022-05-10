import React,{useState} from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{

    const navigate = useNavigate();

    const [showLinks, setShowLinks] = useState(false);
    
    const token = localStorage.getItem('token');

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return(
        <>
            <nav className="flex justify-between max-w-7xl m-auto p-2 sm:p-5 text-white shadow bg-gray-900">
                <img className="object-fill h-10 w-40 mt-2 shadow-lg shadow-indigo-500/40" src="https://i.ibb.co/kQmGYgB/crypto-final-logo-png-14-1.png" />
                <div className=" mt-3 text-md font-semibold hidden sm:block">
                    <a className="mr-4 hover:text-purple-400 hover:underline hover:decoration-dashed" href="/aboutus">About</a>
                    <a className="mr-4 hover:text-purple-400 hover:underline hover:decoration-dashed " href="/jobspage">Jobs</a>
                    <a className="mr-4 hover:text-purple-400 hover:underline hover:decoration-dashed" href="/internships">Internship</a>
                    <a className="mr-4 hover:text-purple-400 hover:underline hover:decoration-dashed" href="https://community.cryptonaukri.com/" target="_blank" rel="noopener noreferrer">Community</a>
                </div>
                {token?
                <div class="flex p-2 gap-3">
                    <a class="mt-2 p-1 hover:bg-gray-700 rounded text-3xl" href="/aboutme"><FaUserCircle /></a>
                    <button onClick={()=>{logout()}} class="mt-2 text-2xl hover:text-red-800" href=""><FaSignOutAlt /></button>
                </div>:<div className="flex gap-4 font-semibold">
                    <div className="group mt-2 ">
                        <button className=" sm:text-lg text-sm hover:text-purple-400 transform transition hover:scale-110 mt-2" href="">Login</button>
                        <div className="group-hover:block dropdown-menu absolute hidden h-auto text-center right-20 mt-1 mb-1 bg-gray-800 w-auto">
                            <a className="p-2 mr-4 mt-3 w-full text-purple-300 font-semibold hover:text-purple-400 hover:underline hover:decoration-dashed" href="/devlogin">Developer Login</a><br/>
                            <a className="p-2 mr-4 mt-3 w-full text-white font-semibold hover:text-purple-400 hover:underline hover:decoration-dashed" href="/companyLogin">Business Login</a>
                        </div>
                    </div>
                    <div className="group mt-2 ">
                        <button 
                            style={{background: 'linear-gradient(95.73deg, #D21ACF 0%, #00EFFF 100%)', borderRadius: '4px 4px 4px 20px'}} 
                            className="p-2 sm:text-lg text-sm hover:text-gray-100 transform transition hover:scale-110" 
                            >Sign Up</button>
                        <div className="group-hover:block dropdown-menu absolute hidden h-auto  right-10 mt-1 bg-gray-800 p-2">
                            <a className="mr-4 mt-3 text-purple-300 font-semibold hover:text-purple-400 hover:underline hover:decoration-dashed" href="https://www.cryptonaukri.com/devsignup">Developer Signup</a><br/>
                            <a className="mr-4 mt-3 text-white font-semibold hover:text-purple-400 hover:underline hover:decoration-dashed" href="https://www.cryptonaukri.com/companySignUp">Business Signup</a>
                        </div>
                    </div>
                </div>}
                {showLinks?<>
                    <svg
                        className="h-8 w-8 text-gray-600 mt-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={()=>{setShowLinks(false);}}
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </>:<>
                    <button className="space-y-2 block sm:hidden" onClick={()=>{setShowLinks(true);}}>
                            <div className="w-8 h-0.5 bg-gray-200"></div>
                            <div className="w-8 h-0.5 bg-gray-200"></div>
                            <div className="w-8 h-0.5 bg-gray-200"></div>
                    </button>
                </>}
            </nav>
            {showLinks?
                <div class="bg-gray-900 p-2">
                    <div class="flex flex-col text-center rounded mr-3 ml-3 bg-gray-800 text-white shadowlg shadow-gray-500/40">
                        <a className="mr-4 mt-3 hover:text-purple-400 hover:underline hover:decoration-dashed" href="/aboutus">About</a>
                        <a className="mr-4 hover:text-purple-400 hover:underline hover:decoration-dashed " href="/jobspage">Jobs</a>
                        <a className="mr-4 hover:text-purple-400 hover:underline hover:decoration-dashed" href="/internships">Internship</a>
                        <a className="mr-4 mb-3 hover:text-purple-400 hover:underline hover:decoration-dashed" href="https://community.cryptonaukri.com/" target="_blank" rel="noopener noreferrer">Community</a>
                    </div>
                </div>:<></>}
        </>
    );
}

export default Navbar;