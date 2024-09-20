import React from 'react'
import './expectations-evoip.css'
import macbookAndLeaf from 'src/assets/images/macbook-leaf.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ExpectationsLong = () => {


const navigate= useNavigate()


  return (

    <>


    <section id='expectations-evoip'>

  {/*
  <div className="container-pm expectations__container-introductions">    
  
    <div className="expectationsExplainer-introductions">
    <h3 style={{fontWeight:"800"}}> MAJOR UTILITIES OF A VOICE BROADCASTING SOLUTION</h3>
    
      <p className="expectationsExplainer-introductions-p">
      A call broadcasting system is a general purpose solution and can be used in a variety of applications for different use cases.
       <br/><br/>

       Brand Awareness Sending Notifications Alerts And Announcements Horning Promotional
        Codes And Offers Collecting Survey Results And Feedback Healthcare Industry Fundraising 
        And Nonprofits Political Campaigns Communicating With Clients And Employees Reminding
         Appointments Business Communication Community Engagement Education Institutions
      <br/><br/>
      
      </p>

 

   </div>
   
  </div>    
  */}




    <div className="container-pm expectations__container-expectations-open-sips" >
      





    <div className="expectationsExplainer-rn" >
      <h2 style={{fontWeight:"800"}}> COMPATIBLE DEVICES FOR ENTERPRISE HOSTED VOICE SOLUTIONS</h2>

         <p className="expectationsExplainer-expectations-p">
        
         <br/>
         <br/>
      
         Unlock the versatility of enterprise hosted VoIP communication solutions with a wide range of compatible devices.
          This flexibility ensures you can connect and communicate effectively from virtually any device, anywhere. 
         <br/>

         <ul style={{position:"relative",left:"2rem"}}>
        <li>  Smartphones and tablets (via mobile apps) </li>
      
        <li> IP phones/ SIP phones  </li>
      
        <li> Laptops/ Desktop computers (via Softphones or  <br/> 
         Software providing a Cloud PBX system/ Hosted PBX) </li>
         </ul>
         <br/>
         <br/>

      
        </p>

    </div>
     


    {<div className='expectationsCTA-expectations-free-switch'>
    
 
    <img  className='CTAboximg-expectations-free-switch' src={macbookAndLeaf} alt="search image"/>

   </div>}
   
      

   
   
</div>

    </section>



</>
  )
}

export default ExpectationsLong