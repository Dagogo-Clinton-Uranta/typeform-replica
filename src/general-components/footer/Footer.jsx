import React, { useState } from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

import {FaPhoneVolume} from 'react-icons/fa6'


import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import { IconButton, InputAdornment, TextField } from '@mui/material'
import Button from 'src/theme/overrides/Button'
import { Link, useNavigate } from 'react-router-dom';
import navIcon from 'src/assets/images/logo-white.png'




const Footer = () => {

  const [email,setEmail]  = useState('')
 const navigate = useNavigate()

  return (
    <footer>

    {/*
      <div className="footer-img">
        < img src={navIcon} href="#" className='footer__logo'/>
       </div>

      <div className= "footer_divider"></div>

    */} 

      <div className='permalinks'>

     {/* 
      <div className="footer-first">
         
      <div  onClick ={()=>{navigate('/home')}} style={{fontSize:"1.6rem",color:"white",fontWeight:"900",color:"#E88B1E",cursor:"pointer"}}>
        Job Prep
       
      </div>
       <ul>
        <li>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"0.6rem",fontSize:"1.4rem"}}>
           <FaSquareFacebook/>
           <FaInstagram/>
           
           <FaXTwitter/>
           <BsLinkedin/>
           <FaYoutube/>


          </div>
          
          </li>
        
       
      </ul>
     </div>*/}

       {/*1 */}
      <div className="footer-first">
      <div className='footerColumn-head'>Our Blog</div>
     {/*
     <ul >
     <li><a style={{textDecoration:"underline"}} href="#"> <FaPhoneVolume  style={{fontSize:"1.3rem",marginRight:"10px"}}/> +91 7624079397</a></li>
       <li><a style={{textDecoration:"underline"}} href="#"> <FaEnvelope style={{fontSize:"1.3rem",marginRight:"10px"}} />contact@moneybee.com</a></li>
       <li><a href="#"> <FaLocationDot style={{fontSize:"1.2rem",marginRight:"10px"}} /> India, UK, USA</a></li>
       
      
     </ul>
     */} 
     </div>

        {/*2 */}
      <div className="footer-second">
      <div className='footerColumn-head'>Unsubscribe</div>
    {/*
     <ul >
     <li><a href="#">About</a></li>
       <li><Link to ={'/contact-us'} >Contact</Link></li>
       <li><a href="#">Blogs</a></li>
     
      
     </ul>
     */}
     </div>


    {/*3 */}
    
      <div className="footer-third">
      <div className='footerColumn-head'>Policies</div>
     {/*
      <ul >
      <li><a href="#">Downloads</a></li>
        <li><a href="#">Forum</a></li>
        
      
      </ul>
    */}
      </div>

    {/*
      <div className="footer-last">
        
      <li className='footerColumn-head newsletter-head' ><b>Join Our Newsletter</b></li>
      <ul>
        
        <li>

        <TextField style={{width:"22rem",borderRadius:"0%"}}
                      name="email footer"
                      required
                      placeholder={"Enter Email Address"}
                      type={ 'text'}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        style: { height: '2.5rem',backgroundColor:"#1E1E1E" },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton  style={{color:"white",backgroundColor:"black",width:"max-content",fontSize:"16px",borderRadius:"0%",paddingLeft:"10px",paddingRight:"10px",marginRight:"-10px",height:"2.3rem"}} edge="end">
                              Subscribe
                            </IconButton>
                          </InputAdornment>


                        ),
                      }}
                     
                    />
        </li>

        <li className='newsletter-explainer'>
          * We'll send you weekly updates for your better tool management.
        </li>
         
        
      </ul>
      </div>
          */}

      </div>

     


      {
      <div className="footer__copyright">
       <p style={{textAlign:"center"}}>
        &copy;2024 Tetrad Technologies, LLC, a Salesforce company.415 Mission Street, San Francisco, CA 94108
       </p>


      </div>



     }



    {
      <div className="footer__copyright">
       <p style={{textAlign:"center"}}>
         All rights Reserved.
       </p>

       <div style={{display:"flex",justifyContent:"center",gap:"2rem",fontSize:"1.5rem"}}>
       <p><FaTwitter/></p>
       <p><FaFacebook/></p>
       <p><FaInstagram /></p>
       </div>

      </div>



     }

    </footer>
  )
}

export default Footer