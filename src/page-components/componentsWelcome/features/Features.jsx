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
   
   <div className="container-pm featureshome-welcome__container">
   
      <div className="featureshome-welcome__backend">
        <div className='iconContainer-welcome'>
        <img src={troubleShooting} alt="" />
        </div>
       <h3>TROUBLE SHOOTING</h3>
       <p>
       Let our proficiency as a Linphone app development company
        help you troubleshoot the errors and bugs you are facing
         at any stage of development.
       </p>
  
       
      </div>

       <div className="featureshome-welcome__backend">
       <div className='iconContainer-welcome'>
       <img src={integrations} alt="" />
        </div>
       <h3>INTEGRATIONS</h3>
       <p>
         Take the amalgamated advantage of your VoIP
         infrastructure with our integration services.
         PBX, VoIP Softswitch, or any other APIs,
          we are here to integrate.
       </p>
       </div>

       <div className="featureshome-welcome__backend">
       <div className='iconContainer-welcome'>
       <img src={whiteLabelling} alt="" />
        </div>
       <h3>WHITE LABELLING</h3>
      
         <p>
         Leverage the advantage of your own branding elements
          implemented intuitively into this mobile VoIP
           solution by experts. A complete white label 
           app to better position your brand.
        </p>

       </div>
          

   </div>

     
     
    </section>
  )
}

export default Features