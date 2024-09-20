import React from 'react'
import './choice.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import agileDev from  'src/assets/images/agileDev.png'
import businessThinking from  'src/assets/images/businessThinking.png'
import interDisc from  'src/assets/images/interDisc.png'
import userCentric from  'src/assets/images/userCentric.png'
import userFriendly from  'src/assets/images/userFriendly.png'
import scalable from  'src/assets/images/scalable.png'

const Choice = () => {
  return (
    <section id='choice'>
   

   <div className="container-hp choice__container">

   <div className="word__container text-light">

<h1>Why Most Business Leaders Choose Agency Partner.</h1>

<p >
       Agency Partner Interactive is the preferred web applications
        agency in Dallas.We deliver custom web applications
         that optimize workflows to help businesses thrive.
         Our web apps – more than 100 and growing – serve companies
          in multiple industries.
      </p>
     
       <center>
       <button className="btn btn-primary">
         Explore
       </button>
       </center>

</div>


      <div className="choice__backend">

     <div  className="choice-small-image" >
      <img src={userCentric} alt="" />
     </div>

       <div className="large-desc text-light"  >
         <h3>User-Centric Approach</h3>
         <p>
         When working on startup MVPs, we focus on your end-users’ 
         needs and expectations, not just the specification.
          Continuous user testing and feedback implementation
           guarantee a product your users actually want.
         </p>
       </div>
       
      </div>

       <div className="choice__backend">
        
       <div className="choice-small-image">
      <img src={interDisc} alt="" />
     </div>
      
      
     <div className="large-desc text-light">
       <h3>Interdisciplinary Experience</h3>
       <p>
       Having worked on projects ranging through FinTech, LegalTech, IoT, 
       MedTech, etc, we’ve learned to adapt to new industries and
        project types quickly. We’ve found patterns and similarities 
        which help us switch between projects quickly.
       </p>
      </div>

       </div>

       <div className="choice__backend">
      
       <div className="choice-small-image">
      <img src={agileDev} alt="" />
     </div>
      
     <div className="large-desc text-light">
       <h3>Agile Development</h3>
       <p>
       We work with Scrum. We divide work into sprints,
        make constant improvements and adjust the project’s 
        scope when needed. This agile approach helps us
         control the timeline and budget while maintaining your product’s usability.
       </p>
      </div>

       </div>

       <div className="choice__backend">
       
       <div className="choice-small-image">
        <img src={businessThinking} alt="" />
      </div>
       
       
      <div className="large-desc text-light">
       <h3>Business Thinking</h3>
       <p>
       We’ve worked on our own startups, so we know your struggle.
        We want to be your partner and take a look at your product 
        from the business perspective. There’s a lot more to startups than just technology and we are eager to embrace it.
       </p>
      </div>

       </div>


       

   </div>

     
    

    </section>
  )
}

export default Choice