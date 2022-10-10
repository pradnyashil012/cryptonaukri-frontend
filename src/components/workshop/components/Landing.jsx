import React from 'react'
import './Landing.css'

import menwomen from '../assets/menwomen.png'
import bluehex from '../assets/bluehex.png'
import whitehex from '../assets/whitehex.png'
import blubo from '../assets/blubo.png'
import blubn from '../assets/blubn.png'
import Curriculum from './curriculum/Curriculum'

const Landing = () => {
  return (
    <>
    <div className='background px-12 h-[100rem] mt-44 md:mt-12 md:h-[40rem] flex flex-col items-center justify-center'>
      <div>
        <p className='text-3xl md:text-[60px] m-0 md:mb-6 font-bold'>It's right time to learn </p>
      </div>
        <div className='flex flex-wrap my-8 md:flex-row'>
          <p className='text-[#003979] text-xl m-0 mr-4 md:text-[55px] font-bold'>WEB3</p>
          <p className='text-[#006DF6] text-xl m-0 md:text-[55px] font-bold'>DEVELOPMENT</p>
        </div>
          <p className='mt-8 md:text-xl'>We are on the mission to convert 1M+ Web3 enthusiasts to Web3 developers by 2025</p>
        <div className="button md:mt-8">
          <a href='/register' className='text-[15px] '><button>Register now !</button></a>
        </div>
    </div>

    <div id='Curriculum'>
      <Curriculum />
    </div>

    <div className='flex flex-col border-3 items-center text-center justify-center py-12'>
      <p className='font-bold text-5xl text-[#003979]'>Connect for free consultation</p>
      <p>Schedule online meet now!</p>
      <a href="https://calendly.com/cryptonaukri/cryptonaukri-web3-development-bootcamp-discussion" target="_blank" className='border-2 mt-1 border-[#003979] text-[#003979] font-semibold rounded-md px-12 py-2 inline-block hover:bg-[#003979] hover:text-white hover:cursor-pointer'>Schedule now !</a>
    </div>

    <div className="revolution">
      <img src={bluehex} alt="hex" />
      <div className='revolution-text'>
        <h3>Web3 development can bring revolution in your salaries!</h3>
      </div>
    </div>

    <div className="career">
      <div className="career-text">
        <p>Come make your <span className='hr3'>Career</span></p> 
        <p>in <span className='hr3'>Web3</span></p>
      </div>
      <div className="image">
        <img src={whitehex} alt="hex" />
      </div>
    </div>

    <div className="second-batch py-12">
      <img src={blubo} alt="blubo" />
      <div className='second-batch-text'>
        <p><span className='hr2'>Second batch for</span> <span className='hr3'>Web3</span> <span className='hr2'>Enthusiasts</span></p>
        <p>A project orientated program for working professionals and students on weekends </p>
      </div>
      <img src={blubn} alt="blubn" />
    </div>
    </>
  )
}

export default Landing