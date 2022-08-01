import React from 'react'
import Header from './Components/Header' 
import Footer from './Components/Footer'
import "./LandingPage.module.css"
import Hero from './Components/Hero'
import StartupIssue from './Components/StartupIssue'
import StartupSolution from './Components/StartupSolution'
import Discord from './Components/Discord'
import Goal from './Components/Goal'
const landingPage = () => {
  return (
      <div className='testing-homepage'>
      <Header /> 
      <Hero /> 
      <StartupIssue /> 
      <StartupSolution />
      <Goal /> 
      <Discord />
      <Footer /> 
    </div>
  )
}

export default landingPage
