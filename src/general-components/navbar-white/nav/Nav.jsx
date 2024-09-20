import React from 'react'
import './nav-white.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from 'react'
//import navIcon from 'src/assets/images/navicon.svg'
import navIcon from 'src/assets/images/logo-white-header.png'


import HamburgerMenu from './HamburgerMenu'
import { PiCaretDown } from 'react-icons/pi'
import OfferingsPopupMenu from './offeringspopupmenu'
import ServicesPopupMenu from './servicespopupmenu'
import SolutionsPopupMenu from './solutionspopupmenu'
import AboutPopupMenu from './aboutpopupmenu'


const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (

    <nav className='nav-pm'>
  
     <div className='navContainer' >
      <div style={{fontSize:"2rem",color:"white",fontWeight:"900",color:"#E88B1E"}}>
        {/*Snapplicant*/}
        {<img src={navIcon} style={{width:"200px"}} alt="agency partner  logo"/>}
      </div>
    

      <div className='navLinks desktopDisp optionsBar' >    
      <div style={{display:"flex",alignItems:"center"}}><OfferingsPopupMenu /></div>
        
        <div style={{display:"flex",alignItems:"center"}}><ServicesPopupMenu /></div>
        <div style={{display:"flex",alignItems:"center",fontSize:"1.2rem",cursor:"pointer !important"}}>Products</div>
        <div style={{display:"flex",alignItems:"center"}}><SolutionsPopupMenu /></div>
        <div style={{display:"flex",alignItems:"center"}}><AboutPopupMenu /></div>
      </div>  

    
      <div className='navLinks desktopDisp'  >    
         <a href="/"  onClick={()=>{setActiveNav('#')}} className={activeNav === 'projects'? 'active-white':''} >Sign In</a>
         <a href="/"  onClick={()=>{setActiveNav('#')}}className={activeNav === '#'? 'active-white':''}  >Let's Talk</a>
       
      </div>  

      <HamburgerMenu className="mobileDisp"/>

    </div>
    </nav>
  )
}

export default Nav