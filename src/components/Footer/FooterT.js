import React from "react";

import { 
    FaFacebookSquare,
    FaLinkedin,
    FaTwitterSquare,
    FaInstagramSquare
} from 'react-icons/fa';
const Footer = () =>{
    return(<div className="bg-gray-900">
        <br />
        <br />
    <footer className="max-w-7xl  m-auto mt-25 flex justify-between flex-wrap sm:flex-nowrap p-5 sm:p-4 text-center bg-gray-900">
        <div className="text-left">
            <p className="text-white text-xl">About</p>
            <ul className="text-gray-500 text-md">
                <li><a href="">How it works</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="text-left">
            <p className="text-white text-xl">Partner with Us</p>
            <ul className="text-gray-500 text-md">
                <li><a href="">Partnership Program</a></li>
                <li><a href="">Affilate Program</a></li>
                <li><a href="">Integrations Community</a></li>
                <li><a href="">Promotions and Events</a></li>
            </ul>
        </div>
        <div className="text-left">
            <p className="text-white text-xl">Support</p>
            <ul className="text-gray-500 text-md">
                <li><a href="">Help</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Privcay Policy</a></li>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Trust and Safety</a></li>
            </ul>
        </div>
        <div className="text-left mt-4">
            <p className="text-white text-xl">Follow us at</p>
            <br />
            <div class="flex gap-2">
                <a href=""><FaFacebookSquare className="text-xl text-white transform transition hover:scale-110" /></a>
                <a href=""><FaLinkedin className="text-xl text-white transform transition hover:scale-110" /></a>
                <a href=""><FaTwitterSquare className="text-xl text-white transform transition hover:scale-110" /></a>
                <a href=""><FaInstagramSquare className="text-xl text-white transform transition hover:scale-110" /></a>
            </div>
        </div>
    </footer>
    </div>);
}

export default Footer;