import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgFacebook } from 'react-icons/cg'
import {GrLinkedinOption, GrTwitter, GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
    <footer className="w-full py-12 bg-white text-black">
      <div className="container mx-auto md:grid md:grid-cols-7 ">
        <div className="md:col-span-2">
          <img src={logo} alt="" className=""/>
          <p className="text-black leading-6 pl-2 mt-4 font-light ">Follow us at</p>
          <div className="flex justify-center md:justify-start gap-3 text-xl   mt-4 ml-2">
            <a href="#" rel="noreferrer" target="_blank"><CgFacebook/></a>
            <a href="#" rel="noreferrer" target="_blank"><GrLinkedinOption/></a>
            <a href="#" rel="noreferrer" target="_blank"><GrTwitter/></a>
            <a href="#" rel="noreferrer" target="_blank"><GrInstagram/></a>
          </div>
        </div>
        <div className="md:col-span-2"></div>
        <div className="text-center md:text-left mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl  md:text-left">About</h2>
          <div className="mt-2 md:mt-12 md:text-left  font-light">
            {" "}
            <Link to="/" className="text-md  block   my-2">
              How it works
            </Link>
            <Link to="/" className="text-md   block   my-2">
              Careers
            </Link>
          </div>
        </div>
        <div className="text-center  mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl  md:text-left">Partner with us</h2>
          <div className="mt-2 md:mt-8  font-light gap-2 md:text-left">
            {" "}
            <Link to="/" className="text-md block   my-2">
             Partnership Program
            </Link>
            <Link to="/" className="text-md   block   my-2">
             Affiliate Program
            </Link>
            <Link to="/" className="text-md   block   my-2">
             Intrigations Community
            </Link>
            <Link to="/" className="text-md   block   my-2">
             Promotions and Events
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl md:text-left">Support</h2>
          <div className="mt-2 md:mt-8 font-light md:text-left">
            {" "}
            <Link to="/" className="text-md  block   my-2">
              Contact us
            </Link>
            <Link to="/" className="text-md   block   my-2">
              Privacy Policy
            </Link>
            <Link to="/" className="text-md   block   my-2">
             DCMA
            </Link>
            <Link to="/" className="text-md   block   my-2">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
