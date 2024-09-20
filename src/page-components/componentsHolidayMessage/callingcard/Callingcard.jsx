import React from 'react'
import './callingcard-devops.css'

import plainmacbook from 'src/assets/images/latop-charts.jpeg'
import bluescreenlaptop from 'src/assets/images/bluescreen-laptop.jpeg'
import chartmonitoring from  'src/assets/images/latop-charts.jpeg'

import mobileAndWeb from  'src/assets/images/mobile&web.jpeg'
import macbookAndCup from  'src/assets/images/plain-macbook.jpeg'

import code from 'src/assets/images/code.jpeg'

import grid1 from 'src/assets/images/grid1.png'
import grid2 from 'src/assets/images/grid2.png'
import grid3 from 'src/assets/images/grid3.png'
import grid4 from 'src/assets/images/grid4.png'



import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Callingcard = () => {


const navigate= useNavigate()


  return (

    <>


    <section id='callingcard'>


  
    <div className="container-pm callingcard__container-devops">    
  
    <div className="callingcardExplainer-devops">
    {/*<h2 style={{fontWeight:"800"}}>OUR DEVOPS SERVICES</h2>*/}

     {/* <p className="callingcardExplainer-introductions-p">
     
      </p>
        */}
 

   </div>
   
  </div>   





  
     
  <div className="container-pm callingcard__container-callingcard-devops1">
      


      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={mobileAndWeb} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}>ANDROID APP DEVELOPMENT</h2>

         <p className="callingcardExplainer-callingcard-p">
         Our renowned Android mobile app development experts can build highly robust
          and reliable Android apps that can function successfully on any Android platform.
        </p>

    </div>
     
  
   
</div>






<div className="container-pm callingcard__container-callingcard-devops2">
      
      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={bluescreenlaptop} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}> IOS APP DEVELOPMENT</h2>

         <p className="callingcardExplainer-callingcard-p">
         We are the top iOS app development companies in India that cater to global businesses
          with excellent Apple apps that dominate the stores with top listings
        </p>

    </div>
     
    
   
</div>



<div className="container-pm callingcard__container-callingcard-devops1">
      


      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={chartmonitoring} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}>REACT NATIVE APP DEVELOPMENT</h2>

         <p className="callingcardExplainer-callingcard-p">
         Our expert React Native app development service has proven its worth in delivering 
         an experience as a native app to both Apple and Android users at a low investment.
        </p>

    </div>
     
  
   
</div>




<div className="container-pm callingcard__container-callingcard-devops2">
      
      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
   


     <div className="image-grid">
  <div className="img-i1"><img src={grid1}/></div>
  <div className="img-i2"><img src={grid2}/></div>
  <div className="img-i3"><img src={grid3}/></div>
  <div className="img-i4"><img src={grid4}/></div>
</div>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}> CROSS PLATFORM APP DEVELOPMENT</h2>

         <p className="callingcardExplainer-callingcard-p">
         We can help you save time and investment in mobile app 
         development yet enjoy high ROI with our expert
          cross platform mobile application development services.
        </p>

    </div>
     
    
   
</div>




<div className="container-pm callingcard__container-callingcard-devops1">
      


      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={bluescreenlaptop} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}>FLUTTER APP DEVELOPMENT</h2>

         <p className="callingcardExplainer-callingcard-p">
         Our Flutter app development services help you increase ROI using a high performing,
          single code base to cater to customers across all popular platforms and devices.
        </p>

    </div>
     
  
   
</div>





<div className="container-pm callingcard__container-callingcard-devops2">
      
      {<div className='callingcardCTA-callingcard-open-sips'>
    
 
          <img  className='CTAboximg-callingcard' src={code} alt="search image"/>
    
      </div>}



    <div className="callingcardExplainer-devops" >
      <h2 style={{fontWeight:"800"}}> PROGRESSIVE WEB APP DEVELOPMENT</h2>

         <p className="callingcardExplainer-callingcard-p">
         Deliver an immersive experience to your customers with our 
         progressive web app development services without investing in core mobile app development.
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

export default Callingcard