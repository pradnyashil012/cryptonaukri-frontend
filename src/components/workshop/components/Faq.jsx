import React from 'react'
import faq from '../assets/faq.png'
import whatsapp from '../assets/whatsapp.png'

import Accordion from './accordion/Accordion'

import './Faq.css'

const Faq = () => {
  return (
    <div className='faq-container'>
        <div className="faq-title">
            <p>Whether you are a working professional or a student,</p>
            <p>You can be in top 1% Web3 developers!</p>
        </div>

        <img src={faq} alt='faq' />

        <div className="faq-questions" id="Faqs">
            <div className="faq-contact">
                <p><b>FAQs</b></p>
                <p>If you have any further questions, Contact us at :</p>
                <a href='https://wa.me/918788305490' style={{color: "black"}} className="flex flex-col items-center">
                   <img src={whatsapp} alt='whatsapp' />
                   <p>+91 8788305490</p>
                </a>
                <div style={{marginLeft:"0", marginTop:"1rem"}} className="button">
                    <a href='/register'><button>Register now !</button></a>
                </div>
            </div>
            <div className="faq-accordion">
                <Accordion />
            </div>
        </div>
    </div>
  )
}

export default Faq