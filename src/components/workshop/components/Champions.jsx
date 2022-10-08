import React from 'react'
import menwomentwo from '../assets/menwomentwo.png'

import './Champion.css'
import CarouselItem from './carousel/Carousel'

const Champions = () => {
  return (
    <>
    <div className="champion-title">
        <span className='hr1'>Our Champions</span>
        <CarouselItem />
    </div>

    <div className="switching-fast">
        <div className="switch-title">
            <p>Industry is rapidly switching to <span>Web3!</span></p>
        </div>

        <div className="swtich-content">
            <img src={menwomentwo} alt='menwomen' />
            <div className="points">
                <span className='hr2'>Thinking about switching career?</span>
                <p style={{fontSize: 22, marginTop: 7}}>Pick Web3 development!</p>
                {/* <br/> */}
                <p style={{fontSize: 22}}>What is holding you back?</p>
                <div style={{marginLeft:"0", marginTop:"1rem"}} className="button">
                    <a href='/register' className='text-[16px]'><button>Register now!</button></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Champions