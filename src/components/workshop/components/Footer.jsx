import React from "react";
import logo from "./Assets/logo.png";
import { Link } from "react-router-dom"; 
import {GrLinkedinOption, GrTwitter, GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
    <footer className="w-full py-12 bg-gray-100 text-black">
      <div className="container mx-auto md:grid md:grid-cols-7 ">
        <div className="md:col-span-2 ml-4">
          <img src={logo} alt="" className=""/>
          <p className="text-black leading-6 pl-2 mt-4 font-light ">Follow us at</p>
          <div className="flex justify-center md:justify-start gap-3 text-xl   mt-4 ml-2">
 
            <a href="https://www.linkedin.com/company/cryptonaukri/" rel="noreferrer" target="_blank"><GrLinkedinOption/></a>
            <a href="https://twitter.com/CryptoNaukri" rel="noreferrer" target="_blank"><GrTwitter/></a>
            <a href="https://www.instagram.com/cryptonaukri/" rel="noreferrer" target="_blank"><GrInstagram/></a>
          </div>
        </div>
        <div className="md:col-span-2"></div>
        <div className="text-center md:text-left mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl  md:text-left">About</h2>
          <div className="mt-2 md:mt-12 md:text-left gap-2  font-light">
            {" "}
            <a href="/about-us" className=" text-black">
              About us 
            </a>
             
          </div>
        </div>
        <div className="text-center  mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl  md:text-left">Partner with us</h2>
          <div className="mt-2 md:mt-8  font-light gap-2 md:text-left">
            {" "}
           
            <a href="https://web3hack.tech/" className="text-black">
             Promotions and Events
            </a>
          </div>
        </div>
        <div className="text-center md:text-left mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl md:text-left">Support</h2>
          <div className="mt-2 md:mt-8 flex flex-col font-light md:text-left">
            {" "}
            <a href="/contact-us" className="text-black">
              Contact us
            </a>
            <a href="/privacy" className="text-black">
              Privacy Policy
            </a>
            <a href="/refundpolicy" className="text-black">
              Refund Policy
            </a>
            <a href="/dcma" className="text-black">
             DCMA
            </a>
            <a href="/terms" className="text-black">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
