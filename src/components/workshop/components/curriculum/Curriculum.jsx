import React from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"
import { useLocation } from "react-router-dom";
import {TiTick} from "react-icons/ti"
import {IoMdDownload} from "react-icons/io"

const Curriculum = () => {

    const content = [
        {
            title: "Blockchain Fundamentals",
            week:" Week 1",
            desc: [
                "Blockchain Basics",
                "Introduction to Bitcoin",
                "Introduction to Ethereum",
            ],
            last_point: "Intro to solidity, Smart Contracts",
          },

        {
            title: "Web3 Tools and Tokenomics",
            week:" Week 2",
            desc: [
                "Installation of Metamask, Ganache, hardhat, truffle etc",
                "Intermediate Level of Solidity",
            ],
            last_point: "ERC standards -ERC-20, ERC-721 etc",
          },

        {
            title: "Advance Web3 Programming",
            week:" Week 3",
            desc: [
                "Advance Solidity",
                "OOP in solidity",
            ],
            last_point: "Assignments based on react world projects",
          },

        {
            title: "Intro to React and Web3.js",
            week:" Week 4",
            desc: [
                "React.js Fundamentals",
                "Build Your first React App",
            ],
            last_point: "Intro to Web3.js",
          },

        {
            title: "Mastering DeFi",
            week:" Week 5",
            desc: [
                "DeFi Fundamentals",
                "Applications of DeFi",
            ],
            last_point: "Understanding DeFi projects",
          },

        {
            title: "Mastering NFTs",
            week:" Week 6",
            desc: [
                "Intro to NFTs",
                "Use cases of NFTs",
            ],
            last_point: "Understanding Top NFT collections",
          },

        {
            title: "Understanding Hyperledger",
            week:" Week 7",
            desc: [
                "Private Blockchain, Hyperledger",
            ],
            last_point: "Architecture, Consensus",
          },

        {
            title: "Tools And Installation",
            week:" Week 8",
            desc: [
                "Hyperledger, Installations, Docker",
            ],
            last_point: "Hyperledger Fabric",
          },

        {
            title: "Hyperledger Fabric in Depth",
            week:" Week 9",
            desc: [
                "Application of Hyperledger Fabric",
            ],
            last_point: "Case Study of Hyperledger projects",
          },

        {
            title: " Intro to Hyperledger indy",
            week:" Week 10",
            desc: [
                "Hyperledger Indy Basics",
            ],
            last_point: "Hyperledger Arc and Implementation",
          },

          
          {
              title: "Doubt Solving session",
              week:" Week 11",
              desc: [
                "",
            ],
            last_point: "",
            },

          {
              title: "Interview Training",
              week:" Week 12",
              desc: [
                "",
            ],
            last_point: "",
            },
        ]

    const location = useLocation();

  return (
    <div className=' px-4 border-t-2 pt-20 mb-12 md:px-20'>

        {location.pathname==="/" ? <></> : <>
            <div className='flex my-4'>
                <a href='/' className='text-black text-lg font-semibold'>{"< "}back</a>
            </div>
        </>}


        <h1 className='text-5xl mb-16 text-[#003979] font-bold'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='w-[80%]'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 10+ Web3 projects, doubt solving and many more!</p>
            <a href='WEB3Bootcamp_Cryptonaukri_Curriculum.pdf' download="WEB3Bootcamp_Cryptonaukri_Curriculum.pdf" ><button className='border-2 border-[#003979] m-0 hover:text-[#003979] rounded-xl px-4 py-3  hover:bg-white bg-[#003979] text-[15px] flex items-center text-white hover:cursor-pointer'>Curriculum <IoMdDownload className='ml-2'/></button></a>
        </div>

        <div className='flex flex-col md:flex-row items-center md:justify-center'>
            <div className='items-center text-center md:mr-12'>
                <p className='text-[#003979] font-semibold mb-2'>150+</p>
                <p className='font-semibold'>Hours of learning</p>
            </div>

            <div className='items-center md:mr-12 text-center'>
                <p className='text-[#003979] font-semibold mb-2'>10+</p>
                <p className='font-semibold'>WEB3 Projects</p>
            </div>

            <div className='items-center md:mr-12 text-center'>
                <p className='text-[#003979] font-semibold mb-2'>100%</p>
                <p className='font-semibold'>Placement</p>
            </div>

            <div className='items-center text-center'>
                <p className='text-[#003979] font-semibold mb-2'>Pay fee</p>
                <p className='font-semibold flex items-center'>After placement ! <div className='text-green-600 text-2xl'><TiTick /></div> </p>
            </div>

        </div>

        {/* Carousel div */}
        <div className='shadow-md mx-auto mt-20  w-full md:w-2/3'>
        {location.pathname==="/curriculum" ?<>            
            {content.map((item, i) => {
                return (
                <>
                    <div className='overflow-hidden border-t'>
                        <label>
                        <input className='absolute opacity-0 peer' type="checkbox"></input>
                        <div className='flex items-center cursor-pointer justify-between'>
                            <div className='p-5'>
                                <p className=' m-0 font-semibold'>{item.title}</p>
                                <div className='flex items-center mt-2 text-xs '><BsClock className='m-0 mr-1'/><p className='text-xs m-0'>{item.week}</p></div>
                            </div>
                            <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
                        </div>
                        {(i!=10 && i!=11) && item.desc.map((desc) => {
                            return(
                                <div className='bg-gray-300 peer-checked:border-b-2 border-white max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>{desc}</p></div>
                            );
                        })}
                        {(i!=10 && i!=11) && <div className='bg-gray-300 max-h-0 mb-4 peer-checked:max-h-20'><p className='p-5'>{item.last_point}</p></div>}
                        </label>
                    </div>
                </>)})}
                </>:
                <>
                {content.slice(0,2).map((item, i) => {
                return (
                <>
                    <div className='overflow-hidden border-t'>
                        <label>
                        <input className='absolute opacity-0 peer' type="checkbox"></input>
                        <div className='flex items-center cursor-pointer justify-between'>
                            <div className='p-5'>
                                <p className=' m-0 font-semibold'>{item.title}</p>
                                <div className='flex items-center mt-2 text-xs '><BsClock className='m-0 mr-1'/><p className='text-xs m-0'>{item.week}</p></div>
                            </div>
                            <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
                        </div>
                        {(i!=10 && i!=11) && item.desc.map((desc) => {
                            return(
                                <div className='bg-gray-300 peer-checked:border-b-2 border-white max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>{desc}</p></div>
                            );
                        })}
                        {(i!=10 && i!=11) && <div className='bg-gray-300 max-h-0 mb-4 peer-checked:max-h-20'><p className='p-5'>{item.last_point}</p></div>}
                        </label>
                    </div>
                </>)})}
                </>}

        </div>
                {location.pathname==="/curriculum" ? <></> : <>
                <div className='flex absolute mt-4 right-[24%]'>
                    <a href='/curriculum' className='text-red-400'>See more..</a>
                </div>
                </>}
    </div>
  )
}

export default Curriculum