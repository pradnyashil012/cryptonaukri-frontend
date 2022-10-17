import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom"; 
import {GrLinkedinOption, GrTwitter, GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
    <footer className="w-full py-12 bg-white text-black">
      <div className="container mx-auto md:grid md:grid-cols-7 ">
        <div className="md:col-span-2">
          <img src={logo} alt="" className=""/>
          <p className="text-black leading-6 pl-2 mt-4 font-light ">Follow us at</p>
          <div className="flex justify-center md:justify-start gap-3 text-xl   mt-4 ml-2">
 
            <a href="https://www.linkedin.com/company/cryptonaukri/" rel="noreferrer" target="_blank"><GrLinkedinOption className="text-black hover:text-blue-600"/></a>
            <a href="https://twitter.com/CryptoNaukri" rel="noreferrer" target="_blank"><GrTwitter className="text-black hover:text-blue-600"/></a>
            <a href="https://www.instagram.com/cryptonaukri/" rel="noreferrer" target="_blank"><GrInstagram className="text-black hover:text-blue-600"/></a>
          </div>
        </div>
        <div className="md:col-span-2"></div>
        <div className="text-center md:text-left mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl  md:text-left">About</h2>
          <div className="mt-2 md:mt-12 md:text-left  font-light">
            {" "}
            <a href="/about-us" className="text-md text-black text-[16px]   my-2">
              About us 
            </a>
             
          </div>
        </div>
        <div className="text-center  mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl  md:text-left">Partner with us</h2>
          <div className="mt-2 md:mt-8  font-light gap-2 md:text-left">
            {" "}
           
            <a href="https://web3hack.tech/" className="text-md  text-black text-[16px]   my-2">
             Promotions and Events
            </a>
          </div>
        </div>
        <div className="text-center md:text-left mt-8 md:mt-4">
          <h2 className="  font-semibold text-xl md:text-left">Support</h2>
          <div className="mt-2 md:mt-8 flex flex-col font-light md:text-left">
            {" "}
            <a target="_blank" href="/contact-us" className="text-md  text-black text-[16px]  my-2">
              Contact us
            </a>
            <a target="_blank" href="/privacy" className="text-md  text-black text-[16px]   my-2">
              Privacy Policy
            </a>
            <a target="_blank" href="/refundpolicy" className="text-md  text-black text-[16px]   my-2">
              Refund Policy
            </a>
            <a target="_blank" href="/dcma" className="text-md  text-black text-[16px]   my-2">
             DCMA
            </a>
            <a target="_blank" href="/terms" className="text-md   text-black text-[16px]  my-2">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
