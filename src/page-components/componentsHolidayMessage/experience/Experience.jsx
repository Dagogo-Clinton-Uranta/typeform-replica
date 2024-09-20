import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'



import objectivec from 'src/assets/images/objectivec.png'
import swift from 'src/assets/images/swift-logo.png'


import { HiSpeakerWave } from "react-icons/hi2";

import { GiTwoCoins } from "react-icons/gi";
import { IoBriefcaseSharp } from "react-icons/io5";

const Experience = () => {
  return (
    <section id='experience-welcome'>
   
   {/*<h2 style={{fontSize:"2.2rem"}}>TECHNOLOGY STACK WE USE</h2>*/}

  

{/*<div className="container-pm experiencegrid__container-android">
     
   <div className='experiencegrid-iconContainer-welcome'>
    <center>
   <img  src={objectivec} alt="" />
   </center>
   </div>
 
 
  <div className='experiencegrid-iconContainer-welcome'>
  <center>
  <img src={swift} alt="" />
  </center>
   </div>
  
 


</div>*/}

<center>
<div>
      <h1 style={{fontWeight:"800",fontSize:"2.2rem"}}>LINPHONE APP DEVELOPMENT COMPANY</h1>

         <p className="aboutExplainer-welcome-p" style={{maxWidth:"60%"}}>
         We are one of the leading technologies companies that have a dexterous team 
         of VoIP and mobile app developers. Moreover, we have the most innovative 
         and creative UI UX designers onboard to deliver impressive layouts of our 
         systems and mobile apps. We have been working in this industry for ages
          and this has given us the potency to build the best Linphone app. 
          Our multitalented team with versatility in Linphone app development 
          can deliver a tailored SIP Softphone app using this open source to let
           you achieve your business goals.
        </p>

      </div>


  </center>



   

    </section>
  )
}

export default Experience