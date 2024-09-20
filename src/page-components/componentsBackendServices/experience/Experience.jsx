import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'



import starbucks from 'src/assets/images/php.png'
import costa from 'src/assets/images/java.png'
import pr from 'src/assets/images/node-js.png'
import dunkin from 'src/assets/images/python.png'
import coca from 'src/assets/images/rails.png'
import idea from 'src/assets/images/html.png'

import { HiSpeakerWave } from "react-icons/hi2";

import { GiTwoCoins } from "react-icons/gi";
import { IoBriefcaseSharp } from "react-icons/io5";

const Experience = () => {
  return (
    <section id='experience-welcome'>
   
   <h2 style={{fontSize:"2.2rem"}}>STACK OF TECHNOLOGIES USED FOR BACK END WEB DEVELOPMENT</h2>

  

<div className="container-pm experiencegrid__container-backend">
     
   <div className='experiencegrid-iconContainer-welcome'>
    <center>
   <img  src={starbucks} alt="" />
   </center>
   </div>
 
 
  <div className='experiencegrid-iconContainer-welcome'>
  <center>
  <img src={costa} alt="" />
  </center>
   </div>
  
   <div className='experiencegrid-iconContainer-welcome'>
  <center>
  <img src={pr} alt="" />
  </center>
  </div>


 

  <div className='experiencegrid-iconContainer-welcome'>
  
  <center>
  <img src={dunkin} alt="" />
  </center>
  </div>

  <div className='experiencegrid-iconContainer-welcome'>
  <center>
  <img src={coca} alt="" />
  </center>
  </div>
 

</div>

<center>


<div className="container-pm experience__container-introductions">    
    {/*
    <div className="experienceExplainer-introductions">
      <h2 style={{fontWeight:"800"}}> WIDE RANGING FRONT END APP DEVELOPMENT SERVICES</h2>

         <p className="experienceExplainer-introductions-p">
         We are a foremost front end development company that gives you access to the
          top 10% of tech talent possessing rich expertise and innovative mindset to
           offer a diverse range of front end web application development services. 
           We ensure a seamless experience for you and your clients with our reliable 
           advanced front end web development with React, Angular, Python, JavaScript,
            and other bleeding-edge technologies. 
        </p>

   </div>
  */}

  </div> 
  


  </center>


 {/*  
   <div className="container-hp experience__container">
   
      <div className="experience__backend">

     <div  className="small-image" >
    
      {<HiSpeakerWave style={{color:"#E88B1E",fontSize:"50px"}}/>}
     </div>

       <div className="large-desc"  >
         <h3 style= {{borderBottom:"1px solid white",paddingBottom:"10px",color:"#E88B1E"}}>AI Job Search</h3>
        
        <div className="large-desc-img">
         <img  src={bot} alt="" style={{margin:"0 auto",borderRadius:"10%"}}/>
         </div> 
       </div>
       
      </div>

   


       <div className="experience__backend">
      
      <div className="small-image">
     
     <GiTwoCoins style={{color:"#E88B1E",fontSize:"50px"}} />
    </div>
     
       <div className="large-desc">
         <h3 style= {{borderBottom:"1px solid white",paddingBottom:"10px",color:"#E88B1E"}}>Upskill Rewards</h3>
       
         <div className="large-desc-img">
         <img  src={brain} alt="" style={{margin:"0 auto",borderRadius:"10%"}}/>
         </div> 
      
      
        </div>

       </div>




       <div className="experience__backend">
      
      <div className="small-image">
     
     <IoBriefcaseSharp style={{color:"#E88B1E",fontSize:"50px"}} />
    </div>
     
       <div className="large-desc">
         <h3 style= {{borderBottom:"1px solid white",paddingBottom:"10px",color:"#E88B1E"}}>AI interview Prep</h3>
        

         <div className="large-desc-img">
         <img  src={bot} alt="" style={{margin:"0 auto",borderRadius:"10%"}}/>
         </div> 
        
        
        </div>

       </div>
     




 

   </div>*/}

     {/*
      <center>
      <Link to= {'/page2'}>
       <button className='btn btn-primary'>Demo</button>
       </Link>
      </center>
     */}

    </section>
  )
}

export default Experience