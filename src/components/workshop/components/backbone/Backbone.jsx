import React,{useState} from 'react'
import './Backbone.css'
import Bcontent from './Bcontent';

import Educator from '../../assets/backbone/educator.jpg'
import Mentor from '../../assets/backbone/mentor.jpg'
import Placement from '../../assets/backbone/placement.jpg'
import Manager from '../../assets/backbone/manager.jpeg'
import {BsLinkedin} from "react-icons/bs"
import linkIcon from "../../assets/backbone/linkedin_icon.png"

const Backbone = () => {

    const [content, setContent] = useState('Educator');
    const [source, setSource] = useState(Educator);
    const [name, setName] = useState('Kajal Singh');
    const [Linkedin ,setLinkedin] = useState('https://www.linkedin.com/in/kajal-singh-3527a742');

    const educatorHandler = () => {
        setContent('Educator')
        setSource(Educator)
        setName('Kajal Singh')
        setLinkedin('https://www.linkedin.com/in/kajal-singh-3527a742')
    }
    const mentorHandler = () => {
        setContent('Mentor')
        setSource(Mentor)
        setName('Akshay Kurhekar')
        setLinkedin('https://www.linkedin.com/in/akshay-kurhekar-64438a168')
    }
    // const counsellorHandler = () => {
    //     setContent('Counsellor')
    //     setSource(Educator)
    //     setName('Master Oogway')
    // }
    const programmanagerHandler = () => {
        setContent('Programmanager')
        setSource(Manager)
        setName('Pradnyashil Gajbhiye')
        setLinkedin('https://www.linkedin.com/in/pradnyashil-gajbhiye')
    }
    const placementcellHandler = () => {
        setContent('Placementcell')
        setSource(Manager)
        setName('Pradnyashil Gajbhiye')
        setLinkedin('https://www.linkedin.com/in/pradnyashil-gajbhiye')
    }

  return (
    <>
      <div className="backbone-container">
        <span className='hr1'>Meet Your Backbone</span>

        <div className="backbone-content">
            <div className="backbone-tabs">
                <button className={`tab dist ${content==='Educator'? `selected` : ``}`} onClick={educatorHandler}> Educator </button>
                <button className={`tab dist ${content==='Mentor'? `selected` : ``}`} onClick={mentorHandler}> Mentor </button>
                {/* <button className={`tab dist ${content==='Counsellor'? `selected` : ``}`} onClick={counsellorHandler}> COUNSELLOR </button> */}
                {/* <button className={`tab dist ${content==='Programmanager'? `selected` : ``}`} onClick={programmanagerHandler}> MANAGER </button> */}
                <button className={`tab dist ${content==='Placementcell'? `selected` : ``}`} onClick={placementcellHandler}> Placement Cell </button>
            </div>

            <div className='backbone-main'>    
                <div className="backbone-points">
                    <div className='mt-4 flex items-center'>
                        <h1 className='font-bold text-2xl'>{name}</h1>
                        <a href={Linkedin} target="_blank" className="ml-3 mb-2"><img src={linkIcon} className="h-7" alt="Linkedin Icon" /></a>
                    </div>
                    <Bcontent content={content} />
                </div>

                <div className="backbone-image">
                    <img src={source} alt={content} />
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Backbone
