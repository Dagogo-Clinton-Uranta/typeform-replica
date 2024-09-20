import React from 'react'
import './shortdesc.css'
import laptopAndDrafts from 'src/assets/images/laptop&drafts.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Nav from 'src/general-components/navbar-black/nav/Nav'

const ShortDescOne = () => {


const navigate= useNavigate()


  return (

    <>


    <section id='expectations-vbs'  >

    <Nav/>

    <div className="container-pm expectations__container-expectations-webdev">
      


    <div className="expectationsExplainer-loan-application">
      <h2 style={{fontWeight:"800"}}>Your Loan Has Been Funded [Loan ID]</h2>

         <p className="expectationsExplainer-expectations-p">
         Figma ipsum component variant main layer. Duplicate auto community 
         select arrow shadow mask library align frame. Duplicate bold team 
         star undo. Editor device pencil pencil effect. Effect pen boolean effect community select.
        </p>

      
      <p>
      If you didn’t request this email, there’s nothing to worry about — you can safely ignore it.
      </p>

    </div>
     
   
      

   
   
</div>

    </section>



</>
  )
}

export default ShortDescOne