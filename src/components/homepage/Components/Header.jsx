import React from "react";
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import RegularButton from "./RegularButton";
import { useState } from "react";
import { IoClose, IoCloudyNight, IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import "../Styles/Header.css";
import { useCookies } from "react-cookie";
import {CgProfile} from "react-icons/cg"
import {MdOutlineSpaceDashboard, MdLogout} from 'react-icons/md';
import {AiFillCaretDown, AiOutlineUser} from 'react-icons/ai'
const Header = () => {
  // this state will control the display of menu icons and menubar in mobile devices
  const navigate = useNavigate();
  const login = localStorage.getItem("login")
  const [menuDisplay, setMenuDisplay] = useState(true);
  const [registerDropdownDisplay, setRegisterDropdownDisplay] = useState(false);
  const [loginDropdownDisplay, setLoginDropdownDisplay] = useState(false);
  const [ open, setOpen] = useState(false);
  return (
    <header className="w-full header-gradient py-3   sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          {" "}
          <img src={logo} className="w-[150px] md:w-[210px]" alt="" />
        </Link>

        <nav className=" justify-end items-center text-black gap-4 hidden md:flex">
          <a href="https://community.cryptonaukri.com/">COMMUNITY</a>
          <Link to="/internships">INTERNSHIPS</Link>
          <Link to="/jobs">JOBS</Link>

          {login ? (
            <>
            <div className="flex relative items-center text-gray-600 gap-2">
                              <div  className='cursor-pointer hover:text-black'>
                                <div onClick={()=> {setOpen(!open)}} className="flex items-center relative">
                                  <CgProfile size={30}/>
                                  <AiFillCaretDown size={13}  /> 
                                </div> 
                              </div> 

                              {/* Dropdown Content */}
                              
                              { open &&
                                <div className="bg-white absolute right-4 shadow-lg top-8 w-[153px] rounded-lg py-1">
                                  <div onClick={() => {navigate("/profile"); setOpen(!open)} } className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"><AiOutlineUser className="h-6 mr-2" /> Profile</div>
                                  <div onClick={()=>{navigate("/auth/logout")}} className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"><MdLogout className="h-6 mr-2" /> Sign out</div>
                                </div>
                              }
                            

                            {/* <div onClick={()=>logout()} className="cursor-pointer hover:text-black">Sign out</div> */}
                        </div>
            {/* <RegularButton to="/auth/logout"> Sign Out</RegularButton> */}
            </>
          ) : (
            <>
              <RegularButton
                className="relative"
                state={loginDropdownDisplay}
                setState={setLoginDropdownDisplay}
              >
                Login
                {loginDropdownDisplay && (
                  <div className="absolute w-[200px] top-12 left-0 py-2 px-4 text-left rounded-md bg-white text-[#0351A3] shadow-md z-30">
                    <Link to="/auth/devlogin" className="block hover:text-black">
                      Developer Login
                    </Link>
                    <Link
                      to="/company-login"
                      className="block hover:text-black"
                    >
                      Business Login
                    </Link>
                  </div>
                )}
              </RegularButton>

              <RegularButton
                state={registerDropdownDisplay}
                setState={setRegisterDropdownDisplay}
                className="relative"
              >
                {" "}
                Register
                {registerDropdownDisplay && (
                  <div className="absolute w-[200px] top-12 left-0 py-2 px-4 text-left rounded-md bg-white text-[#0351A3] shadow-md  z-20">
                    <Link to="/auth/devsignup" className="block hover:text-black">
                      Developer Register
                    </Link>
                    <Link
                      to="/company-signup"
                      className="block hover:text-black"
                    >
                      Business Register
                    </Link>
                  </div>
                )}
              </RegularButton>
            </>
          )}
        </nav>

        <h1
          className="text-[#6C94F7] md:hidden text-2xl"
          onClick={() => setMenuDisplay(!menuDisplay)}
        >
          {menuDisplay ? <IoMenuOutline /> : <IoClose />}
        </h1>
      </div>
      <MobileMenu state={menuDisplay} />
    </header>
  );
};

export default Header;
