import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import RegularButton from './RegularButton'
const Header = () => {
  return (
    <header className='w-full bg-[#00142A] py-3 shadow-md shadow-[#00142A]'>
      <div className='container mx-auto flex justify-between items-center'>
        <img src={logo} className='w-[300px]' alt="" />
        <nav className='flex justify-end items-center text-white gap-4 font-medium'>
          <Link to="#">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Community</Link>
          <Link to="#">Intermships</Link>
          <Link to="#">Contact</Link>
          <RegularButton >Join Us</RegularButton>
        </nav>
     
      </div>
    </header>
  )
}

export default Header