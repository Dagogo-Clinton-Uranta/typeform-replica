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
  
      




      <h2 style={{fontWeight:"800"}}>Urgent: Your Loan Payment is Past Due [Loan ID]</h2>

    
      <p className="expectationsExplainer-expectations-p">
         Figma ipsum component variant main layer. Duplicate auto community select 
         arrow shadow mask library align frame. Duplicate bold team star undo.
          Editor device pencil pencil effect. Effect pen boolean effect community select.
        </p>

  
   <div className="figures-table-container">
  
     <h4 className='bill-details'>Bill Details</h4>

      <div className="pastdue-figures-table">
     
     <p><div className="preapproved-figure-item">Bill Category:</div>  <div className="preapproved-figure-item">Infrastructure</div>  </p>

     <p> <div className="preapproved-figure-item">Account Name: </div>  <div className="preapproved-figure-item">Sater Moz</div>   </p>

     <p> <div className="preapproved-figure-item">Due Date:</div>  <div className="preapproved-figure-item">20 October 2023</div>  </p>

     <p> <div className="preapproved-figure-item">Bill Amount:</div>  <div style={{fontSize:"1.2rem",fontWeight:"bold"}} className="preapproved-figure-item">$120</div>  </p>
    
   </div>

      <button className='btn btn-primary' style={{width:"200px",display:"flex",justifyContent:"center"}}>
       Pay
       </button>

   

       <p className="expectationsExplainer-expectations-p">
       Giving you more places and ways to pay with Google Pay.Visit the Help Center, Facebook, or Twitter Page.
       </p>

   </div>







      

      




   
      



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