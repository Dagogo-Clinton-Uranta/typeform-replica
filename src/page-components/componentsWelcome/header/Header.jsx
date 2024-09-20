import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'
import Nav from '../../../general-components/navbar-black/nav/Nav'
import { setRecruiter,setDemo } from 'src/redux/reducers/auth.slice'
import { useDispatch } from 'react-redux'
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
    
   
    <header className="header-pm-welcome">
    <Nav/>
    <div className=" header__container-1">
      

      <div className="headerExplainer-welcome">
         <h2 style={{marginBottom:"0rem",fontWeight:"400",fontSize:"3.2rem"}}> 
           Front End
           <br/>
          

          Development
          <br/>
         
           Services
          
          
          </h2>
   
         
            <p style={{maxWidth:"40%",marginBottom:"-1rem",lineHeight:"1.7",fontSize:"1.1rem"}}>
            Building Long Lasting Experiences with Visual Treats That 
            Bring Back Visitors to Convert Them into Returning Customers. 
             Award winning team of front end web application development 
             and state-of-the-art infrastructure will unify with your vision
              to build enterprise grade front end designs that are striking,
               captivating, and pixel perfect.
              Get in Touch  
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