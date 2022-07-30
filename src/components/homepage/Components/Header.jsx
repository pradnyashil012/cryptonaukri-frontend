import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import RegularButton from './RegularButton'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false)
  return ( 
    <header className='w-full bg-[#00142A] py-3 shadow-lg '>
      <div className='container mx-auto flex justify-between items-center'>
        <img src={logo} className='w-[150px] md:w-[300px]' alt="" />
        <nav className=' justify-end items-center text-white gap-4 font-medium hidden md:flex'>
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Community</Link>
          <Link to="#">Intermships</Link>
          <Link to="#">Contact</Link>
          <RegularButton >Join Us</RegularButton>
        </nav>
        <h1 className="text-white md:hidden text-xl" onClick={() => setMenuDisplay(!menuDisplay)}>{menuDisplay? (<GiHamburgerMenu/>): (<ImCross/>)}</h1>
      </div>
    </header>
  )
}

export default Header