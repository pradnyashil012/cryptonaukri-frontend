import React from 'react'
import './Card.css'

const Card = ({children}) => {
  return (
    <div className='items-center shadow-xl rounded-[15px] py-8 px-8 bg-white'>
        <div className='relative border-b pb-4'>
          <b className='text-lg font-bold'>Upfront with 70% off !</b>
          <p className='text-sm my-2'>Original fee: ₹1,00,000</p>
          <p className='text-sm mb-4 my-2'>Upfront fee: ₹30,000</p>   {/* Pay after placement */}
          <p className='absolute left-[6rem] z-20 text-gray-400 bg-white px-2'> OR </p>
        </div>


        <div className='mt-8'>
          <b className='text-lg font-bold'>Pay after placement !</b>
          <p className='text-sm my-2'>Pay <b>Only 10K</b> for registration</p>
          <p className='text-sm my-2'>Remaining 90% after your placement</p>
        </div>
    </div>
  )
}

export default Card