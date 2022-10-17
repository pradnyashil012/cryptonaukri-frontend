import React from 'react'

const Content = ({content}) => {

    const Placement = (
        <ul >
            <li>Special placement cell</li>
            <li>National and International web3 startups will be hiring</li>
            <li>Placement will start after 2 months</li>
            <li>Will assist you get job in 3rd month</li>
        </ul>
    )
    const Mentorship = (
        <ul >
            <li>Web3 developer will provide mentorship</li>
            <li>Mentor will be available for all the time</li>
            <li>Organised community of web3 developers will also be provided</li>
            <li>Web3 founders will be invited to discuss the web3 products</li>
        </ul>
    )
    const Experience = (
        <ul >
            <li>Get experience by working on 4 different web3 projects</li>
            <li>You can also build side projects and get mentorship</li>
            <li>Specific hours will be there to work on projects on weekdays for students</li>
            <li>For working professionals, mentorship will be provided on weekends</li>
        </ul>
    )
    const Learning = (
        <ul >
            <li>IIT Bombay Alumni will be educator</li>
            <li>Blockchain Basics, Ethereum & Solidity, Hyperledger will be covered</li>
            <li>Live classes will be on weekends</li>
            <li>100+ hours of learning</li>
            <li>A dedicated web3 developer as a mentor</li>
        </ul>
    )
    const Ecosystem = (
        <ul >
            <li>Participate in Hackathons</li>
            <li>Work in community get rank as web3 developer</li>
            <li>Work on real world DAOs open source projects to gain experience and earn bounties</li>
            <li>Build single digital portfolio as a web3 developer</li>
        </ul>
    )

    if (content === 'Placement')
    {
        return (<div>{Placement}</div>);
    }
    else if (content === 'Mentorship')
    {
        return (<div>{Mentorship}</div>);
    }
    else if (content === 'Experience')
    {
        return Experience;
    }
    else if (content === 'Learning')
    {
        return Learning;
    }
    else
    {
        return Ecosystem;
    }


}

export default Content;