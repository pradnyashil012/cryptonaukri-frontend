import React from 'react'
import {Link} from "react-router-dom"
const RegularButton = ({ children, to }) => {
    return (
       <button className='bg-[#003979] px-4 py-2 rounded-md font-medium border-2  border-[#003979] text-white   hover:text-[#003979] hover:bg-[#00142A] hover:border-2 hover:border-[#003979]'> <Link to={to || "#"}>{ children}</Link></button>
  )
}

export default RegularButton