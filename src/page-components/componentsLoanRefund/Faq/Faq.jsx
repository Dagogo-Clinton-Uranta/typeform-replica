import React from 'react'
import './faqhome.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'
import SimpleAccordion from './SimpleAccordion'
import { Link } from 'react-router-dom'

const Faq = () => {
 
  const q7 =`Why choose a Personal Loan?`
const q1 = `How Much Does It Cost?`
const q2 = `Do you Provide Recommendations?`
const q3 = `What are the unique features?`
const q4 =  `Who will see my information?`
const q5 = `What products or services will I receive offers for?`





const a7 = `Poor Credit Quick Loans™ offers a fast and flexible form to help connect you to a lender and complete an application with them. A personal loan can be used for many reasons and can be a quick and easy way to receive funds up front. If a lender from our network or one of the other third-party lender networks we use offers you a loam, you’ll be able to review the loan terms before accepting or declining the offer. Payments are due over a fixed period of times and often carry a fixed interest rate.

If no lenders offer you a loan, we may pass some of your limited contact information to other partners so you can receive offers for debt relief, credit repair, credit monitoring, or similar services.`


const a1 = `The cost of the development project depends on the features and scope of work. Depending on the complexity of features, existing solutions environment, etc., the cost can vary`
const a2 = `The cost of the development project depends on the features and scope of work. Depending on the complexity of features, existing solutions environment, etc., the cost can vary`
const a3 = `The cost of the development project depends on the features and scope of work. Depending on the complexity of features, existing solutions environment, etc., the cost can vary` 
const a4 = `First we show all the information you submit to the lenders in our direct network that have expressed an interest in making loans to consumers like you. If none of them want to pay us to be connected with you, we send all of your information to our extended network of non-lender third-party lender networks so they can try to find a lender in their network that is willing to pay us to be connected with you. All of the parties described above, and, in many cases, their service providers, will see all of your information to try to find or make you a loan.

After we try to connect you with a lender, we may show you other ads. If you click these ads, we may share your contact info with these advertisers so they can contact you about their products or services. We may also send you additional marketing communications. If so, the service providers we use for this marketing may see your contact information to facilitate this additional marketing to you.

Learn more in our ${<Link style={{color:"lightblue"}} to={'/addisclosure'}>Ad Disclosure</Link>} and ${<Link style={{color:"lightblue"}} to={'/privacypolicy'}>Privacy Policy</Link>}.` 

const a5 = `What products or services will I receive offers for?
When you use our service, we first try to connect you with a lender, either through our direct network of lenders or through our extended network of lenders. Then we may show you additional ads or offers for lenders and/or other credit-related products or services like debt relief, credit repair, credit monitoring. You are also added to our marketing list and may receive additional marketing communications from lenders or these other credit-related providers.

Learn more in our ${<Link style={{color:"lightblue"}} to={'/addisclosure'}>Ad Disclosure</Link>}`


  
  return (
    <section className='container-pm' id='faqhome'>
   
   <h2>Frequently Asked Questions</h2>

  
   <div className="container faqhome__container">
   
     <SimpleAccordion className ="faqhome__item" header={q1} body={a1}/>
     <SimpleAccordion className ="faqhome__item" header={q2} body={a2}/>
     <SimpleAccordion className ="faqhome__item" header={q3} body={a3}/>
    
     
      

          

   </div>

     
     
    </section>
  )
}

export default Faq