import React from 'react'
import './about.css'
import mobileAndWeb from 'src/assets/images/mobile&web.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const About = () => {


const navigate= useNavigate()


  return (

    <>


    <section id='about'>
    <div className="container-pm about__container-welcome">
      

     
     {/*<div className='aboutCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='aboutCTA-welcome'>
    
 
<img  className='CTAboximg-welcome' src={mobileAndWeb} alt="search image"/>

   
    
    </div>}



    <div className="aboutExplainer-welcome">
      <h1 style={{fontWeight:"800",fontSize:"2.2rem"}}> MOBILE DIALER</h1>

         <p className="aboutExplainer-welcome-p">
         We have developed a highly advanced and feature 
         rich mobile SIP dialer for iOS and Android devices.
          This white label SIP Softphone is compatible with 
          all modern Softswitch solutions, PBX systems, 
          and other business tools to help you build a complete 
          communication ecosystem for your enterprise. 
        </p>

      {/*
       <div className = "about-btn-placement" >
        <button   onClick={()=>{navigate('/login')}} className="btn ">
           Get Started 
         </button>

         <p  onClick={()=>{navigate('/dashboard/home')}} className="btn-invisible" >See How It Works</p>
       </div>
       */}


      </div>
     
   
      

   
   
</div>

    </section>


</>
  )
}

export default About