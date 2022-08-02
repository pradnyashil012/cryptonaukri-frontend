import React from 'react'
import RegularButton from './RegularButton'

const Web3Hack = () => {
  return (
      <section className="md:h-[720px] bg-w3 w-full flex items-center justify-center ">
          <div className='flex flex-col items-center'>
          <h1 className='text-center uppercase text-[#003979] text-[72px] font-bold'>web3<span className='text-[#010824]'>hack</span></h1>
          <p className='text-2xl text-center leading-8 mt-6 w-[900px] mx-auto'>We are organizing a hackathon called “Web3Hack” to empower the Web3 Community. This hackathon is designed especially according to the needs of the community. Whether you are a beginner or an expert, here is a perfect chance to showcase your skills and witness a competitive yet including developer community around it.</p>
          <RegularButton to="https://web3hack.tech/" className="mt-8"> Register Now</RegularButton>
          </div>
    </section>
  )
}

export default Web3Hack