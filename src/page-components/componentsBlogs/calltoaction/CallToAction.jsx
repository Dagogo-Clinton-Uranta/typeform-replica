import React from 'react'
import './calltoaction.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'



import starbucks from 'src/assets/images/angular.png'
import costa from 'src/assets/images/react.png'
import pr from 'src/assets/images/typescript.png'
import dunkin from 'src/assets/images/vue.png'
import coca from 'src/assets/images/microsoftwpf.png'
import idea from 'src/assets/images/html.png'

import { HiSpeakerWave } from "react-icons/hi2";

import { GiTwoCoins } from "react-icons/gi";
import { IoBriefcaseSharp } from "react-icons/io5";
import { FaArrowRight } from 'react-icons/fa'

const callToAction = () => {
  return (
    <section id='calltoaction-welcome'>
   


<center>

<div className="container-pm calltoaction__container-introductions">    
    <div className="calltoactionExplainer-introductions">
      

       <center>
   <h2 style={{fontSize:"1.7rem",width:"70%"}}>
    ARE YOU INTERESTED IN BUILDING RELIABLE BACK END SOLUTIONS TO NURTURE
    YOUR CLIENT RELATIONS ?
   </h2>


         <p style={{fontSize:"1.3rem"}}
          className="calltoactionExplainer-introductions-p">
         Our backend development services aim to provide much more than mere database
          and server interconnection to perform different operational jobs.
           We help organizations build a positive customer experience and outperform competitors. 
        </p>


         
     
      {/*<Link to= {'/page2'}>*/}
       <button className='btn btn-primary'>REQUEST A DEMO <FaArrowRight style={{marginLeft:"1rem",color:"black"}} /></button>
       {/*</Link>*/}
      </center>
    

   </div>
  </div> 

  </center>


 {/*  
   <div className="container-hp calltoaction__container">
   
      <div className="calltoaction__backend">

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

   


       <div className="calltoaction__backend">
      
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




       <div className="calltoaction__backend">
      
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

    

    </section>
  )
}

export default callToAction