import React from 'react'
import './callingcard-devops.css'

import plainmacbook from 'src/assets/images/latop-charts.jpeg'
import bluescreenlaptop from 'src/assets/images/bluescreen-laptop.jpeg'
import chartmonitoring from  'src/assets/images/chart-monitoring.jpeg'

import eyedeco from 'src/assets/images/eye-deco.jpeg'


import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const CallingcardTwo = () => {


const navigate= useNavigate()


  return (

    <>


    <section id='callingcard'>


  
    <div className="container-pm callingcard__container-devops">    
  
    <div className="callingcardExplainer-devops">
    <h2 style={{fontWeight:"800"}}>AN IDEAL CONTACT CENTER SOLUTION WITH TENANT SUPPOTY</h2>

     {/* <p className="callingcardExplainer-introductions-p">
     
      </p>
        */}
 

   </div>
   
  </div>   
  
     
  <div className="container-pm callingcard__container-callingcard-devops2">
      


      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={plainmacbook} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}>SINGLE TENANT CALL CENTER SOLUTION</h2>

         <p className="callingcardExplainer-callingcard-p">
         Take a lead in your niche with competitive features incorporated
          into the best call center software. Deliver jaw dropping 
          customer experience, improve conversation rate, increase sales 
          rate, and leverage other advantages by optimizing business processes
           using our top rated call center software. Keep track of all agents,
            customers, calls, and other entities and administer the operations with utmost efficiency.
        </p>

    </div>
     
   
      

   
   
</div>




    <div className="container-pm callingcard__container-callingcard-devops1">
      


      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={eyedeco} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}> MULTI TENANT CALL CENTER SOLUTION</h2>

         <p className="callingcardExplainer-callingcard-p">
         Stop dreaming and start earning with the most powerful multi tenant call center
          software. The most scalable multi tenant call center system with integrated
           billing to run your own business with any of the preferred modes from SaaS, 
           PaaS, or UCaaS. The omnichannel communication, signup APIs, and several never 
           seen before features make it one of the most competitive multi tenant contact center solutions. 
        </p>

    </div>
     
   
      

   
   
</div>






{/*IT MANAGED SERVICES */}
{/*
  <div className="container-pm callingcard__container-callingcard-devops3">
      


      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={chartmonitoring} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}>IT MANAGED SERVICES</h2>

         <p className="callingcardExplainer-callingcard-p">
         We stay on top of the technologies and market changes to assist
          our clients in omni-direction. As the best DevOps development company,
        </p>

    </div>
     
   
      

   
   
</div>
*/}



    </section>



</>
  )
}

export default CallingcardTwo