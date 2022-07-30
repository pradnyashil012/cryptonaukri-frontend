import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import RegularButton from "./RegularButton";
import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
const Header = () => {
  // this state will control the display of menu icons and menubar in mobile devices
  const [menuDisplay, setMenuDisplay] = useState(true);
  return (
    <header className="w-full bg-[#00142A] py-3 shadow-lg sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} className="w-[150px] md:w-[300px]" alt="" />
        <nav className=" justify-end items-center text-white gap-4 hidden md:flex">
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Community</Link>
          <Link to="#">Intermships</Link>
          <Link to="#">Contact</Link>
          <RegularButton>Join Us</RegularButton>
        </nav>
        <h1
          className="text-white md:hidden text-2xl"
          onClick={() => setMenuDisplay(!menuDisplay)}
        >
          {menuDisplay ?   <IoMenuOutline /> : <IoClose className="text-white" />}
        </h1>
      </div>
      <MobileMenu state={menuDisplay} /> 
    </header>
  );
};

export default Header;
