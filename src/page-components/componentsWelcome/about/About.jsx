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
      <h1 style={{fontWeight:"800"}}> You Think Design, We Craft Front Ends</h1>

         <p className="aboutExplainer-welcome-p">
         We are a one-stop-shop for all your front end web application development demands
          and needs. We provide exquisite, streamlined, and contemporary user interfaces
           for all types of front ends that can convert your goals into tangible outcomes.
            We ensure user centric and SEO friendly design and development processes to 
            ensure all-inclusive benefits to maximize your value over money. Upgrade 
            strategies with seamless, engaging, and contemporary brand value driven frontends. 
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