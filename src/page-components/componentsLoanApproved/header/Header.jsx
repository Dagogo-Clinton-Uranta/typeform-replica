import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header-kz.css'


import { setRecruiter,setDemo } from 'src/redux/reducers/auth.slice'
import { useDispatch } from 'react-redux'
import Nav from 'src/general-components/navbar-black/nav/Nav'
/*import laptop from 'src/assets/images/laptop.svg'

import LoanSlider from './LoanSlider'*/



const Header = () => {

   const [input,setInput] = useState(1000)
   const navigate= useNavigate()
   const dispatch = useDispatch()

   const handleChange = (e) => {
    setInput(e.target.value);
    console.log("this is the parent speaking,we are in header")
  };

  return (
    
   
    <header className="header-kz">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-fl">
         <h2 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"3.2rem",color:"black"}}> 
          Call Center
           <br/>
          
         Solutions
         
          
          
          </h2>
   
         
            <p style={{maxWidth:"30%",marginBottom:"2rem",color:"black",fontSize:"1.2rem",lineHeight:"1.3"}}>
            Call Center Solution
           Strengthen your sales and customer engagement teams with powerful 
           inbound, outbound, and blended calling mechanisms integrated into the call center software.
           </p>
        
        {/*
           <div className="header-btn-placement" >
           
           
   
              <button onClick ={()=>{dispatch(setRecruiter(false));dispatch(setDemo(true));navigate('/dashboard/home')}} className="btn">
                Demo
              </button>
     
     
              <button onClick ={()=>{dispatch(setRecruiter(true));dispatch(setDemo(false)) ;navigate('/dashboard/recruiter-home')}}  className=" btn-recruiter">
                Recruiter
              </button>
         
            </div> 
      */ }

      </div>
     
    

    </div>
    </header>
    
  )
}

export default Header