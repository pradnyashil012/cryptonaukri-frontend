import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import RegularButton from "./RegularButton";
import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import '../Styles/Header.css'
const Header = () => {
  // this state will control the display of menu icons and menubar in mobile devices
  const [menuDisplay, setMenuDisplay] = useState(true);
  return (
    <header className="w-full header-gradient py-3   sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} className="w-[150px] md:w-[210px]" alt="" />
        <nav className=" justify-end items-center text-black gap-4 hidden md:flex uppercase">
          <a href='https://community.cryptonaukri.com/'>Community</a>
          <Link to='/internships'>Internships</Link>
          <Link to='/jobs'>Jobs</Link>
        
          <Link to='/login'><RegularButton>Login</RegularButton></Link>
          <RegularButton>Register</RegularButton>
        </nav>
       
        <h1
          className="text-[#6C94F7] md:hidden text-2xl"
          onClick={() => setMenuDisplay(!menuDisplay)}
        >
          {menuDisplay ?   <IoMenuOutline /> : <IoClose  />}
        </h1>
      </div>
      <MobileMenu state={menuDisplay} /> 
    </header>
  );
};

export default Header;
