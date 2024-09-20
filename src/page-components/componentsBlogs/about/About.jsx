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
      <h1 style={{fontWeight:"800",fontSize:"2.2rem"}}> LEVEL UP EFFICIENCY WITH, ROBUST BACKEND SOLUTIONS</h1>

         <p className="aboutExplainer-welcome-p">
         Our cherry-picked backend developers are highly proficient
          in building enduring and high performance server side solutions.
           Our company is renowned for offering all-inclusive back end 
           development offerings for mobile, desktop, web, AI, AR/VR, 
           and IoT solutions. Our goal is to build products that secure
            a stable market position and deliver a steady return on investment from the onset.  
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