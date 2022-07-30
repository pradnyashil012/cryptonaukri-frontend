import React from 'react'
import Header from './Components/Header'
import heroImg from "./Assets/herobg.png"
import Footer from './Components/Footer'
import "./LandingPage.module.css"
const landingPage = () => {
  return (
      <div className='testing-homepage'>
      <Header /> 
      <main className='min-h-screen min-w-screen  bg-gradient-to-r from-[#000101] to-[#04162C] relative '> <img src={heroImg} className="absolute top-10 opaicity-30" alt='' /> <h1>Testing text</h1> </main>
      <Footer /> 
    </div>
  )
}

export default landingPage
