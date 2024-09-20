import React from 'react'
import './featureshome-alternate-welcome.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'

import  troubleShooting from 'src/assets/images/troubleshooting.png'
import  integrations from 'src/assets/images/integrations.png'
import whiteLabelling from 'src/assets/images/troubleshooting.png'

const FeaturesAlternate = () => {
  return (
    <section id='features-alternatehome-welcome'>
   
   

  {/*
   <center style={{maxWidth:"70%", margin:"0 auto"}}>
   <h1>Turning Your Thoughts into Reality</h1>
   From problem-solving to execution, Agency Partner
    Interactive covers every phase of full-stack development.
   </center>
  */}


<div className="container-pm features-alternate__container">    
    <div className="features-alternate-HomeTitle" style={{paddingBottom:"0rem",paddingTop:"0rem"}}>
      <h2 style={{fontWeight:"800"}}> A COMPREHENSIVE CONTACT CENTER SOLUTION WITH VALUE ADDED ELEMENTS</h2>
     
        
         <p style={{textAlign:"center"}} className="features-alternate-HomeTitle-p">
         Our feature rich audio and video conferencing solutions are developed to eradicate all limitations
          caused due to geographical or time zone differences. It has several advantages to offer
           to businesses, enterprises, and peers.
        </p>
      
  

   </div>
  </div> 
   
   <div className="container-pm features-alternate-home-welcome__container" style={{marginTop:"0rem"}}>
   
      <div className="features-alternate-home-welcome__backend">
        
       <h4>END-TO-END DEVOPS SERVICES</h4>
       <p>
       From simple transition consulting to getting DevOps development,
        configuring automation, deploying one-click rollbacks,
         managing disaster recovery, and more; we are your all-in-one support for any DevOps needs.
       </p>
  
       
      </div>

       <div className="features-alternate-home-welcome__backend">
      
       <h4>EXPERIENCED DEV-OPS RESOURCES</h4>
       <p>
       We have a pool of talented and highly versatile DevOps engineers
        that have worked with unique requirements and numerous projects
         to empower our global customers. We use our experience to benefit our clients to maximize ROI.
       </p>
       </div>

       <div className="features-alternate-home-welcome__backend">
      
       <h4>RELIABLE SOFTWARE DEVELOPMENT</h4>
      
         <p>
         With our expertise in DevOps processes, tools, and standards, we can help you 
         define a more predictable software engineering roadmap.
          Always hit the market on or before time with more predictable and reliable processes.
        </p>

       </div>
          

   </div>

     
     
    </section>
  )
}

export default FeaturesAlternate