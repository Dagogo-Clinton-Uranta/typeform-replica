import React from 'react'
import './expectations.css'
import laptopAndDrafts from 'src/assets/images/laptop&drafts.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Expectations = () => {


const navigate= useNavigate()


  return (

    <>


    <section id='expectations'>


  <div className="container-pm expectations__container-introductions">    
    <div className="expectationsExplainer-introductions">
      <h2 style={{fontWeight:"800"}}> FRONT END WEB DEVELOPMENT: HARMONIZING CUSTOMER AND BUSINESS EXPECTATIONS</h2>
                    
         <p className="expectationsExplainer-introductions-p">
         We craft sleek, compelling, and operational websites and applications that deliver seamless
          user experience with our advanced front end web development with React and other front end 
          web development technologies and frameworks. Through our tailored front end web application
           development services, we build engaging user interfaces for the web, fast single-page applications,
            eye-catching websites, intuitive mobile apps, and all other types of front ends. 
        </p>

   </div>
  </div>    





    <div className="container-pm expectations__container-expectations">
      


      {<div className='expectationsCTA-expectations'>
    
 
          <img  className='CTAboximg-expectations' src={laptopAndDrafts} alt="search image"/>
    
      </div>}



    <div className="expectationsExplainer-expectations">
      <h2 style={{fontWeight:"800"}}> BEST FRONT END DEVELOPMENT COMPANY THAT CREATES DIGITAL EXPERIENCES</h2>
            
         <p className="expectationsExplainer-expectations-p">
         We have proficiency in designing and developing personalized, goal oriented, visionary,
          and stunning from the ends. Our front end web application development practices focus 
          on building and nurturing relations with all sorts of users: surfing visitors, first 
          time users, returning users, and even bouncing users. We aim to unite the power of
           operational functionalities and features with visual components and appealing designs
            with our front end app development expertise. 
        </p>

    </div>
     
   
      

   
   
</div>

    </section>



</>
  )
}

export default Expectations