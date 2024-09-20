import React from 'react'
import './expectations.css'
import laptopAndDrafts from 'src/assets/images/mobile&web.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Expectations = () => {


const navigate= useNavigate()


  return (

    <>


    <section id='expectations'>


  <div className="container-pm expectations__container-introductions">    
  
    <div className="expectationsExplainer-introductions">
      <h2 style={{fontWeight:"800"}}>
         CALL CENTER SOLUTION PROVIDER COMPANY</h2>

         <p className="expectationsExplainer-introductions-p">
         We have been working in the call center industry for decades and have invested in scrupulous research of the
          industry, business goals, customer demands, trending technologies, and more. We build the most powerful
           contact center software by taking advantage of our conscientious research and experience. It streamlines 
           and optimizes business processes. It supports the tenant model and has omnichannel customer support
            capabilities to cater to customers across all touch points. We have designed the most intuitive user
             experience and user interface of this call center software to elevate the experience of agents.
              We acknowledge the importance of agent experience to augment performance and productivity at the core. 
  </p>

   </div>
   
  </div>    





    <div className="container-pm expectations__container-expectations">
      


      {<div className='expectationsCTA-expectations'>
    
 
          <img  className='CTAboximg-expectations' src={laptopAndDrafts} alt="search image"/>
    
      </div>}



   {/* <div className="expectationsExplainer-expectations">
      <h2 style={{fontWeight:"800"}}>
       FOIP SOLUTION PROVIDER COMPANY
       </h2>

         <p className="expectationsExplainer-expectations-p">
         A multi tenant IP PBX signifies the concept of having multiple IP
          PBX solutions with a single software instance, which makes the 
          management of the software so easy. The instinctive GUI based
           panel to manage tenants and other elements such as DID numbers,
            extensions, rate plans, etc. is tremendously easy for the
             admin. The web based panels make access to software and 
             administration of business mobile and flexible. Now, with 
             a few taps or clicks from anywhere, you can control your 
             business communication tools and PBX service provider business.
        </p>

  </div> */}
     
   
      

   
   
</div>

    </section>



</>
  )
}

export default Expectations