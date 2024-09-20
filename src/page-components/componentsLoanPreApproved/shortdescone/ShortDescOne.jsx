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
  
      




      <h2 style={{fontWeight:"800"}}>Congratulations! You’re Pre-Approved for a Loan</h2>



      <div className="preapproved-figures-table">
     
     <p><div className="preapproved-figure-item">Pre-Approved Loan Amount</div>  <div className="preapproved-figure-item">$10,000</div>  </p>

     <p> <div className="preapproved-figure-item">Interest Rate </div>  <div className="preapproved-figure-item">15%</div>   </p>

     <p> <div className="preapproved-figure-item">Loan Term</div>  <div className="preapproved-figure-item">48 months</div>  </p>
    
   </div>









         <p className="expectationsExplainer-expectations-p">
         We are excited to inform you that you have been pre-approved for a loan! This is an important step toward achieving your financial goals, and we are here to help you through the process.
        </p>

      
       <p className="expectationsExplainer-expectations-p">
       To move forward and secure and finalize your loan, we need some additional information. Please upload the required documents by clicking the link below.
       </p>




   
       <button className='btn btn-outline' style={{marginTop:"1.5rem"}}>
       Upload Documents
       </button>



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