import React from 'react'
import {GoPrimitiveDot} from 'react-icons/go'
const Problem = ({image, side, title, list, paragraph, backgroundColor}) => {
  return (
      <section className={`bg-[${backgroundColor}]`} >
          <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 py-24 gap-24'>
              {side && (
                  <div
                      className='flex w-full h-full justify-center items-center'>
                      <img src={image} alt="" />
                  </div>
              )}
              <div className='py-12 text-left flex flex-col justify-center h-full'>
                  <h2 className='text-[#004AAD] text-[52px] font-bold'>{title}</h2>

                  <h2 className='text-xl leading-6 font-normal text-black mt-6'><span className='mb-4'>{paragraph}</span>
                  {
                      list.map(text => <h3 className='flex items-center gap-2 ml-4 my-2'><GoPrimitiveDot/>{ text}</h3>)
                  }</h2>
              </div>
              {!side && (
                  <div
                      className='flex w-full h-full justify-center items-center'>
                      <img src={image} alt="" />
                  </div>
              )}
          </div>
   </section>
  )
}

export default Problem