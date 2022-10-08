import React from 'react'
import './Perks.css'
import Bullet from './Bullet/Bullet'

const Perks = () => {

  const perk_points = [
    "No 4-year degree",
    "Mostly remote",
    "Job market is global",
    "Demand is extremely high!",
    "You can choose to be anonymous",
  ]

  return (
    <div className='perks-container'>
        <div className="perks">
            {/* <span style={{fontWeight:700, fontSize: 45, color: "#003979"}}>Perks of learning WEB3</span> */}
            <span className='font-bold text-3xl md:text-4xl text-[#003979]'>Perks of learning Web3</span>
            <div className='list'>
              {/* <p style={{margin: 0}}><b>In less than a year you could:</b></p> */}
              <Bullet menuItem={perk_points} />
            </div>
        </div>
        
        <div className="perk-content">
            <p>Project orientated program which means you will be learning and working at the same time ! </p>
        </div>
    </div>
  )
}

export default Perks