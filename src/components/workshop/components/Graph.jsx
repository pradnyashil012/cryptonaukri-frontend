import React from 'react'
import './Graph.css'

import graph from '../assets/graph.png'
import mancoin from '../assets/mancoin.png'

const Graph = () => {
  return (
    <div className='flex flex-col items-center md:flex-row md:justify-between md:flex-wrap px-8 py-8'>

        <div className="text-left md:w-[65%]">

            <div className='graph-para md:w-[70%]'>
                <p>
                    <span className='hr2'>Get a</span>
                    <span className='hr3'> Guaranteed job</span>
                    <span className='hr2'> of minimum</span>
                    <span className='hr3'> 6 LPA</span>
                </p>
            </div>

            <div className="flex flex-wrap">
                <div className="block"> Batch of 30 students</div>
                <div className="block"> Weekend oriented classes</div>
                <div className="block"> Quick doubt resolution</div>
                <div className="block"> Live Classes</div>
                <div className="block"> Web3 certification after learning</div>
                <div className="block"> Job placement</div>
                <div className="block"> 8 Projects</div>
            </div>

            <div className="button mt-4">
                <a href="/register" className='text-[15px]'><button>Register now !</button></a>
            </div>

        </div>

        
            <div className="graph-image mt-8 md: mr-8 md:mt-0">
                <img src={graph} alt='graph' />
            </div>

            {/* <div className=''>
                <img src={mancoin} className="h-[14rem] md:mt-0 mt-8" alt='mancoin' />
            </div> */}
       



    </div>
  )
}

export default Graph