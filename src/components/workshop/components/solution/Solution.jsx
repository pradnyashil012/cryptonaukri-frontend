import React, {useState} from 'react'
import './Solution.css'
// import { Switch, Route } from 'react-router-dom'

import Content from './Content'

const Solution = () => {

    const [content, setContent] = useState('Placement');

    const placementHandler = () => {
        setContent('Placement')
    }
    const mentorshipHandler = () => {
        setContent('Mentorship')
    }
    const experienceHandler = () => {
        setContent('Experience')
    }
    const learningHandler = () => {
        setContent('Learning')
    }
    const ecosystemHandler = () => {
        setContent('Ecosystem')
    }

  return (
    <div className='solution-content'>

        <p> <span className='hr1'>Your one stop </span><span className='hr2'>Solution</span> </p>

        <div className="solution-tabs">
            <button className={`tab ${content==='Placement'? `tab-selected` : ``}`} onClick={placementHandler}> Placement </button>
            <button className={`tab ${content==='Mentorship'? `tab-selected` : ``}`} onClick={mentorshipHandler}> Mentorship </button>
            <button className={`tab ${content==='Experience'? `tab-selected` : ``}`} onClick={experienceHandler}> Experience </button>
            <button className={`tab ${content==='Learning'? `tab-selected` : ``}`} onClick={learningHandler}> Learning </button>
            <button className={`tab ${content==='Ecosystem'? `tab-selected` : ``}`} onClick={ecosystemHandler}> Ecosystem </button>
        </div>
    
        <div className="solution-points">
            <Content content={content} />
        </div>

        <div style={{marginLeft:"0", marginBottom:"2rem"}} className="button">
          <a href='/register'><button>Register now !</button></a>
        </div>

    </div>
  )
}

export default Solution