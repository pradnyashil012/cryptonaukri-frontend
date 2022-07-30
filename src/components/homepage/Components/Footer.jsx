import React from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgFacebook } from 'react-icons/cg'
import {GrLinkedinOption, GrTwitter, GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
    <footer className="w-full py-12 bg-black">
      <div className="container mx-auto grid grid-cols-7">
        <div className="col-span-2">
          <img src={logo} alt="" />
          <p className="text-white leading-6 pl-2 mt-4 font-light ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur reprehenderit enim rem itaque hic unde pariatur ratione ullam, dolores iure animi, odio eligendi.</p>
          <div className="flex justify-start gap-3 text-xl text-white mt-4 ml-2">
            <a href="#" rel="noreferrer" target="_blank"><CgFacebook/></a>
            <a href="#" rel="noreferrer" target="_blank"><GrLinkedinOption/></a>
            <a href="#" rel="noreferrer" target="_blank"><GrTwitter/></a>
            <a href="#" rel="noreferrer" target="_blank"><GrInstagram/></a>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div>
          <h2 className="text-white font-semibold text-xl">About</h2>
          <div className="mt-8 font-light">
            {" "}
            <Link to="/" className="text-md  block text-white my-2">
              How it works
            </Link>
            <Link to="/" className="text-md   block text-white my-2">
              Careers
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold text-xl">Partner with us</h2>
          <div className="mt-8 font-light gap-2">
            {" "}
            <Link to="/" className="text-md block text-white my-2">
             Partnership Program
            </Link>
            <Link to="/" className="text-md   block text-white my-2">
             Affiliate Program
            </Link>
            <Link to="/" className="text-md   block text-white my-2">
             Intrigations Community
            </Link>
            <Link to="/" className="text-md   block text-white my-2">
             Promotions and Events
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold text-xl">Support</h2>
          <div className="mt-8 font-light">
            {" "}
            <Link to="/" className="text-md  block text-white my-2">
              Contact us
            </Link>
            <Link to="/" className="text-md   block text-white my-2">
              Privacy Policy
            </Link>
            <Link to="/" className="text-md   block text-white my-2">
             DCMA
            </Link>
            <Link to="/" className="text-md   block text-white my-2">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
