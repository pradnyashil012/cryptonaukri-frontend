import React from 'react'

const Refundpolicy = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh]'>
        <b className='text-3xl'>Refund policy for web3 bootcamp</b>
        <br/><br/>
        <div>
            <p className='flex items-center'><div className='border h-2 w-2 mr-3 bg-black rounded-full'></div> Rs. 30,000 per seat is program fee</p>
            <p className='flex items-center'><div className='border h-2 w-2 mr-3 bg-black rounded-full'></div>Installments are made to help you manage finances easily</p>
            <p className='flex items-center'><div className='border h-2 w-2 mr-3 bg-black rounded-full'></div>Refunds can be made if you cancel the seat before 5 days of Bootcamp starts</p>
            <p className='flex items-center'><div className='border h-2 w-2 mr-3 bg-black rounded-full'></div>As we need that much time to fill the vacant seat</p>
        </div>
    </div>
  )
}

export default Refundpolicy