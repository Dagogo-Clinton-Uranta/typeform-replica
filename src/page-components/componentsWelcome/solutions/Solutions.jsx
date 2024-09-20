import React from 'react'
import './solutionshome.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'



import opencart from 'src/assets/images/opencart.png'

import dynamics from 'src/assets/images/dynamics.png'
import php from 'src/assets/images/php.png'

import node from 'src/assets/images/node.png'
import magento from 'src/assets/images/magento.png'
import webflow from 'src/assets/images/webflow.png'
import shopify from 'src/assets/images/shopify.png'
import react from 'src/assets/images/react.png'
import laravel from 'src/assets/images/laravel.png'
import javascript from 'src/assets/images/javascript.png'
import angular from 'src/assets/images/angular.png'
import wordpress from 'src/assets/images/wordpress.png'

const Solutions = () => {
  return (
    <section id='solutionshome'>
   
   

   <center style={{maxWidth:"70%", margin:"0 auto"}}>
   <h1>Innovative Digital Solutions That Accelerate Your Growth</h1>
  
   From WordPress and Shopify to Magento and more custom applications, our design and development teams work with every major programming
language. Whatever your business case, we’ll lead you toward the fastest, most-scalable return on investment.
   
   </center>
   
   <div className="container solutionshome__container">
   
     
        <div className='solutions-iconContainer'>
         <center>
        <img  src={dynamics} alt="" />
        </center>
        </div>
      
      
       <div className='solutions-iconContainer'>
       <center>
       <img src={php} alt="" />
       </center>
        </div>
       
      

       <div className='solutions-iconContainer'>
       <center>
       <img src={node} alt="" />
       </center>
       </div>


       <div className='solutions-iconContainer'>
       <center>
       <img src={magento} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       
       <center>
       <img src={webflow} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={shopify} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={react} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={laravel} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={javascript} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={angular} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       
       <center>
       <img src={wordpress} alt="" />
       </center>
      
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={opencart} alt="" />
       </center>
       </div>

     
          

   </div>

     
     
    </section>
  )
}

export default Solutions