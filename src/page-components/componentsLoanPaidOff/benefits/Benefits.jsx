import React from 'react'
import './featureshome-welcome.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'

import  troubleShooting from 'src/assets/images/troubleshooting.png'
import  integrations from 'src/assets/images/integrations.png'
import whiteLabelling from 'src/assets/images/troubleshooting.png'

const Features = () => {
  return (
    <section id='featureshome-welcome'>
   
   

  {/*
   <center style={{maxWidth:"70%", margin:"0 auto"}}>
   <h1>Turning Your Thoughts into Reality</h1>
   From problem-solving to execution, Agency Partner
    Interactive covers every phase of full-stack development.
   </center>
  */}


<div className="container-pm experience__container-introductions">    
    <div className="experienceExplainer-introductions" style={{paddingBottom:"0rem",paddingTop:"0rem",marginTop:"-4rem"}}>
      <h2 style={{fontWeight:"800"}}>KEY BENEFITS</h2>

         <p  style={{textAlign:"center"}} className="experienceExplainer-introductions-p">
         Our retail switch is built with well researched features to
          augment communication and lower costs to aid businesses to
           enjoy the true benefits of using a powerful VoIP communication system.
        </p>
  

   </div>
  </div> 
   
   <div className="container-pm featureshome-welcome__container" style={{marginTop:"0rem"}}>
   
      <div className="featureshome-welcome__backend-vc">
        <div className='iconContainer-welcome'>
        <img src={troubleShooting} alt="" />
        </div>
       <h3>TROUBLESHOOTING</h3>
       <p>
       Let our proficiency as a Linphone app
        development company help you troubleshoot
         the errors and bugs you are facing at
          any stage of Linphone development.
       </p>
  
       
      </div>

       <div className="featureshome-welcome__backend-vc">
       <div className='iconContainer-welcome'>
       <img src={integrations} alt="" />
        </div>
       <h3>INTEGRATIONS</h3>
       <p>
       Take the amalgamated advantage of your VoIP infrastructure
        with our integration services. PBX, VoIP Softswitch,
         or any other APIs, we are here to integrate with Linphone.
       </p>
       </div>

       <div className="featureshome-welcome__backend-vc">
       <div className='iconContainer-welcome'>
       <img src={whiteLabelling} alt="" />
        </div>
       <h3>WHITE LABELLING</h3>
      
         <p>
         Leverage the advantage of your own branding elements
          implemented intuitively into this mobile VoIP 
          solution by experts. A complete white label app
          to better position your brand.
        </p>

       </div>
          

   </div>

     
     
    </section>
  )
}

export default Features