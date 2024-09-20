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
      <h2 style={{fontWeight:"800",textAlign:"center"}}> WHAT IS BACKEND DEVELOPMENT?</h2>

         <p className="expectationsExplainer-introductions-p">
         It is the practice of developing server side applications to
          deliver high performing, secure, and swift functionalities that 
          elevate overall customer satisfaction and other benefits. Backend
           development using Python, NodeJS, and other cutting edge technologies
            create a bridge between frontend and backend to streamline interaction 
            between the database and other applications for delivering optimal performance
             and managing operations seamlessly. 
        Our back end development company specializes in unfolding the potential
         of server side applications to bring out the best value of your backend solutions and applications. 
        </p>

   </div>
  </div>    





    <div className="container-pm expectations__container-expectations">
      


      {<div className='expectationsCTA-expectations'>
    
 
          <img  className='CTAboximg-expectations' src={laptopAndDrafts} alt="search image"/>
    
      </div>}



    <div className="expectationsExplainer-expectations">
      <h2 style={{fontWeight:"800"}}> BACKEND DEVELOPMENT SERVICES TO AMPLIFY GROWTH AND SCALABILITY</h2>

         <p className="expectationsExplainer-expectations-p">
         With established domain expertise in building complex server side
          codes and libraries, optimizing performance, managing architectural 
          uniformity, and balancing data processing, we take pride in offering
           a one-stop solution for all your back end development requirements.
        </p>

    </div>
     
   
      

   
   
</div>

    </section>



</>
  )
}

export default Expectations