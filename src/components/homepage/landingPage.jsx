import React from 'react'
import Header from './Components/Header' 
import Footer from './Components/Footer'
import "./LandingPage.module.css"
import Hero from './Components/Hero'
const landingPage = () => {
  return (
      <div className='testing-homepage'>
      <Header /> 
      <Hero /> 
      <Footer /> 
    </div>
  )
}

export default landingPage
