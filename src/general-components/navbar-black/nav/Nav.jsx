import React from 'react'
import './nav-black.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from 'react'
//import navIcon from 'src/assets/images/navicon.svg'
import navIcon from 'src/assets/images/logo-black-header.png'


import HamburgerMenu from './HamburgerMenu'
import { PiCaretDown } from 'react-icons/pi'


import ServicesPopupMenu from './servicespopupmenu'
import SolutionsPopupMenu from './solutionspopupmenu'
import OfferingsPopupMenu from './offeringspopupmenu'
import AboutPopupMenu from './aboutpopupmenu'


const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (

    <nav className='nav-pm-black'>
  
     <div className='navContainer-black' >
      <div style={{fontSize:"2rem",color:"white",fontWeight:"900",color:"black"}}>
        MONEY <span style={{color:"#FCCC44",marginLeft:"-3px"}}>  BEE</span>
        {/*<img src={navIcon} style={{width:"200px"}} alt="agency partner  logo"/>*/}
      </div>

    {/**THE UNDERLINE UNDER MONEYBEE */}
    <div style={{borderBottom:"1px solid lightgrey",width:"80%",position:"absolute",top:"3.5rem"}}></div>
    
      
      <div className='navLinks-black desktopDisp optionsBar' style={{opacity:"0",userSelect:"none"}} >    
        <div style={{display:"flex",alignItems:"center"}}><OfferingsPopupMenu/></div>
        
        <div style={{display:"flex",alignItems:"center"}}><ServicesPopupMenu/></div>
        <div style={{display:"flex",alignItems:"center",fontSize:"1.2rem",cursor:"pointer"}}>Products</div>
        <div style={{display:"flex",alignItems:"center"}}><SolutionsPopupMenu/></div>
        <div style={{display:"flex",alignItems:"center"}}><AboutPopupMenu/></div>
      </div>  

    
      <div className='navLinks-black desktopDisp'  style={{opacity:"0",userSelect:"none"}} >    
         <a href="/#"  onClick={()=>{setActiveNav('#')}} className={activeNav === 'projects'? 'active-black':''} >Sign In</a>
         <a href="/#"  onClick={()=>{setActiveNav('#')}}className={activeNav === '#'? 'active-black':''}  >Let's Talk</a>
        {/* <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#experience'? 'active':''}>Industries</a>
         <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#experience'? 'active':''}>About Us</a>
         <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#experience'? 'active':''}>Blog</a>*/}
      </div>  

      <HamburgerMenu />

    </div>
    </nav>
  )
}

export default Nav