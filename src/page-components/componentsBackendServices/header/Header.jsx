import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

import { setRecruiter,setDemo } from 'src/redux/reducers/auth.slice'
import { useDispatch } from 'react-redux'
import Nav from 'src/general-components/navbar-white/nav/Nav'
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
    
   
    <header className="header-bs">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-backend">
         <h2 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"3.2rem",color:"white"}}> 
           Backend  Development
      
          <br/>
         
           Services
          
          
          </h2>
   
         
            <p style={{maxWidth:"30%",marginBottom:"-1rem",lineHeight:"1.7",fontSize:"1.1rem",color:"white"}}>
            Seize Untapped Opportunities by Elevating Your App Performance with World Class Backend Development Services.
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