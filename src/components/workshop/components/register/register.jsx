import React, { useState } from "react";
import {MdOutlineArrowBackIosNew} from "react-icons/md"

import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [org, setOrg] = useState('');
    const [number, setNumber] = useState();
    const [exp, setExp] = useState('Beginner');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [referral, setReferral] = useState('');

    const[submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!submitted) {setSubmitted(true)}
      if(submitted && name && email && org && number && exp && city && state) {
        
        const data = {
          Name: name,
          Email: email,
          Organisation: org,
          Contact: number,
          Experience: exp,
          City: city,
          State: state,
          Referral: referral,
        }

        axios.post('https://sheet.best/api/sheets/62f3c87d-f9a6-465d-bc16-6d5904f3857e',data).then((response)=>{
          // console.log(response);
          setName("");
          setEmail("");
          setNumber(0);
          setExp("Beginner");
          setCity("");
          setOrg("");
          setState("");
          setReferral("");
          setSubmitted(false);
          toast.success("Form submitted successfully!");
        })
      } else{
        toast.error("Please fill all the values");
      }
    }
 
    return (
      <>
        <form className="mt-16 w-full text-[14px]">

        <div className="w-full bg-gray-100 flex flex-col items-center justify-center py-12 ">
            <h1 className="text-3xl px-3 mt-3 text-center font-extrabold text-[#003979] mb-2">
              Please fill the below form to register for
            </h1>
            <h1 className="text-3xl px-3 text-center font-extrabold text-[#003979] mb-2">
              web3 Bootcamp
            </h1>
        < div className="bg-white mt-8 rounded-2xl">
         <div className='w-full md:w-[48rem] py-16 flex flex-col items-center shadow-2xl rounded-2xl px-10 md:px-0'>

            <div className='my-4 '> 
              <p className='ml-2 mb-2 text-[16px]'>Your Name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className='text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {submitted && !name ? <span className='text-red-600 mb-3'>Please enter your name</span> : null}

            <div className='my-4 '>
             <p className='ml-2 mb-2 text-[16px]'>Your Email</p>
             <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {submitted && !email ? <span className='text-red-600 mb-3'>Please enter your e-mail</span> : null}
        
             <div className='my-4'>
               <p className='ml-2 mb-2 text-[16px]'>Organisation/Institute</p>
               <input onChange={(e) => setOrg(e.target.value)} value={org} className='text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
             </div>
             {submitted && !org ? <span className='text-red-600 mb-3'>Please enter your organisation</span> : null}

            <div className='my-4 '>
              <p className='ml-2 mb-2 text-[16px]'>Phone Number</p>
              <input onChange={(e) => setNumber(e.target.value)} type="number" value={number} className='text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {submitted && !number ? <span className='text-red-600 mb-3'>Please enter your contact number</span> : null}
        


        {/* <div className='w-full md:px-28'>
            <InputField size="large" value={desc} onChange={handleDescChange} placeholder='Description' rows={4} />
        </div> */}

  
            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>Your experience level</p>
                <select
                  defaultValue="Experience Level"
                  onChange={(e) => setExp(e.target.value)}
                  value={exp}
                  placeholder="Experiance"
                  className="text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
            </div>
            {/* {submitted && !exp ? <span className='text-red-600 mb-3'>Please enter your experience level</span> : null} */}

            <div className='my-4 '>
                <p className='ml-2 mb-2 text-[16px]'>City</p>
                <input onChange={(e) => setCity(e.target.value)} value={city} className='text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
            </div>
            {submitted && !city ? <span className='text-red-600 mb-3'>Please enter your city</span> : null}
    

          <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>State</p>
            <input onChange={(e) => setState(e.target.value)} value={state} className='text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div>
          {submitted && !state ? <span className='text-red-600 mb-3'>Please enter your state</span> : null}

          <div className='my-4 '>
            <p className='ml-2 mb-2 text-[16px]'>Referral</p>
            <input onChange={(e) => setReferral(e.target.value)} value={referral} className='text-gray-700 px-6 h-[45px] w-[15rem] md:w-[24rem] border outline-1 outline-blue-200 border-blue-900 rounded-md' />
          </div>
       

        <button onClick={handleSubmit} className={`border-2 w-[12rem] mr-4 border-[#003979] text-[#003979]  font-semibold rounded-full px-12 py-3 mt-7 inline-block hover:bg-[#003979] hover:text-white`}>SUBMIT</button>
        </div>
        </div>

        </div>
        </form>
        <ToastContainer />     
        </>
    )
}
export default Register;
