import React from 'react'
import vodafone_logo from "../../assets/backbone/vodafone.png"
import truscholar_logo from "../../assets/backbone/truscholar.png"
import byjus_logo from "../../assets/backbone/byjus.png"
import cryptonaukri_logo from "../../assets/backbone/cryptonaukri.png"
// import bullet from "../../assets/backbone/bullet.png"
import Bullet from '../Bullet/Bullet'

const Bcontent = ({content}) => {

    const Educator = [
        <p className='m-0 text-lg'>  Training Director and Blockchain Trainer at <b className='flex'>BYJUS Future School <img src={byjus_logo} alt="byjus logo" className='ml-3 h-8' /> </b></p>,
        <p className='m-0 text-lg'>  Educator at Blockchain Council</p>,
        <p className='m-0 text-lg'>  Educator at Simplilearn</p>,
        <p className='m-0 text-lg'>  Blockchain (Ethereum, Hyperledger) Web3 | Solidity</p>,
        <p className='m-0 text-lg'>  <b>B.Tech</b> -GLA University</p>,
        <p className='m-0 text-lg'>  <b>M.Tech</b> -SMU Gangtok</p>,
        
    ]
    const Mentor = [
        <p className='m-0 flex text-lg'>  Blockchain Code Developer at <b> <img src={truscholar_logo} alt="byjus logo" className='h-6 ml-3' /> </b></p>,
        <p className='m-0 text-lg'>  Hyperledger Indy | Hyperledger Fabric</p>,
        <p className='m-0 text-lg'>  Ethereum | SSI</p>,
    ]
    const Counsellor = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut velit ac nulla dignissim dignissim vel ac elit. Pellentesque cursus tortor a tellus ornare, in tempor elit placerat. Cras ut urna justo. Etiam laoreet, tellus tincidunt ornare vestibulum, nunc mi facilisis quam, non viverra diam purus eget urna. In posuere, massa non viverra elementum, ante ipsum lobortis tellus,</p>
    )
    const Placementcell = [
        <p className='m-0 flex text-lg'>  <b>Founder</b> - <img src={cryptonaukri_logo} alt="byjus logo" className='h-8 ml-3' /></p>,
        <p className='m-0 text-lg'>  <b>B.Tech</b> -IIIT Nagpur</p>,
    ]
    // const Placementcell = [
    //     <p className='m-0 text-lg'>  Software Engineer -<b>vodafone <img src={vodafone_logo} alt="byjus logo" style={{height:"1.5rem"}} /> </b></p>,
    //     <p className='m-0 text-lg'>  <b>B.E</b> -Bhartiya Vidhyapeeth College of Engineering for women, Pune</p>,   
    // ]


    if (content === 'Educator')
    {
        // return (<div>{Educator}</div>);
        return <Bullet menuItem={Educator} />
    }
    else if (content === 'Mentor')
    {
        return <Bullet menuItem={Mentor} />;
    }
    else if (content === 'Counsellor')
    {
        return Counsellor;
    }
    // else if (content === 'Programmanager')
    // {
    //     return <Bullet menuItem={Programmanager} />
    // }
    else
    {
        return <Bullet menuItem={Placementcell} />
    }


}

export default Bcontent;