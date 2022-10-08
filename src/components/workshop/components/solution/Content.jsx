import React from 'react'
import Bullet from '../Bullet/Bullet'

const Content = ({content}) => {

    const Placement = [
            "Special placement cell",
            "National and International web3 startups will be hiring",
            "Placement will start after 2 months",
            "Will assist you get job in 3rd month",
    ]
    const Mentorship = [
            "Web3 developer will provide mentorship",
            "Mentor will be available for all the time",
            "Organised community of web3 developers will also be provided",
            "Web3 founders will be invited to discuss the web3 products",
    ]
    const Experience = [
            "Get experience by working on 10+ different web3 projects",
            "You can also build side projects and get mentorship",
            "Specific hours will be there to work on projects on weekdays for students",
            "For working professionals, mentorship will be provided on weekends",
    ]
    const Learning = [
            "Your educator is the Training Director and Blockchain Trainer at BYJUS Future School",
            "Blockchain Basics, Ethereum & Solidity, Hyperledger will be covered",
            "Live classes will be on weekends",
            "150+ hours of Applied Learning",
            "A dedicated web3 developer as a mentor",
    ]
    const Ecosystem = [
            "Participate in Hackathons",
            "Work in community get rank as web3 developer",
            "Work on real world DAOs open source projects to gain experience and earn bounties",
            "Build single digital portfolio as a web3 developer",
    ]

    if (content === 'Placement')
    {
        return <Bullet menuItem={Placement} />;
    }
    else if (content === 'Mentorship')
    {
        return <Bullet menuItem={Mentorship} />;
    }
    else if (content === 'Experience')
    {
        return <Bullet menuItem={Experience} />
    }
    else if (content === 'Learning')
    {
        return <Bullet menuItem={Learning} />
    }
    else
    {
        return <Bullet menuItem={Ecosystem} />;
    }


}

export default Content;