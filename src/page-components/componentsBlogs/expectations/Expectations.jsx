import React from 'react'
import './blog.css'
import laptoppointer from 'src/assets/images/laptop-pointer.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const blog = () => {





  return (

    <>


    <section id='blog'>






    <div className="container-pm blog__container-blog">
      


      {<div className='blogCTA-blog'>
    
 
          <img  className='CTAboximg-blog' src={laptoppointer} alt="search image"/>
    
      </div>}



    <div className="blogExplainer-blog">
      <h3 style={{fontWeight:"500"}}>
        July 05, 2024
        <br/>
        Integration Of Sentiment Analysis With Call 
        <br/>
        Center Solutions To Improve Agent Performance
      
      </h3>
       
        
         <Link style={{textDecoration:'none'}} to={'/latest-blogs'}>
         <p className="blogExplainer-blog-p">
        Read More {">>"}
        </p>
        </Link>
        

        <p  style={{color:"white",borderRadius:"1.4rem",backgroundColor:"#333333",paddingLeft:"10px",paddingRight:"10px",width:"max-content"}}>
       Web Developer
        </p>

    </div>

</div>


 {/*line divider between each blog */}
 <div style={{width:"85%",borderBottom:"2px solid gray",margin:"0 auto"}}>
 </div>




 <div className="container-pm blog__container-blog">
      


      {<div className='blogCTA-blog'>
    
 
          <img  className='CTAboximg-blog' src={laptoppointer} alt="search image"/>
    
      </div>}



    <div className="blogExplainer-blog">
      <h3 style={{fontWeight:"500"}}>
        June 28, 2024
        <br/>                      
        Beyond Phone Calls: Unveiling The Full Potential
        <br/>
        Of Unified Communications As A Service

      
      </h3>

     

         <Link style={{textDecoration:'none'}} to={'/latest-blogs'}>
         <p className="blogExplainer-blog-p">
        Read More {">>"}
        </p>
        </Link>

        <p  style={{color:"white",borderRadius:"1.4rem",backgroundColor:"#333333",paddingLeft:"10px",paddingRight:"10px",width:"max-content"}}>
       Web Developer
        </p>

    </div>

</div>


 {/*line divider between each blog */}
 <div style={{width:"85%",borderBottom:"2px solid gray",margin:"0 auto"}}>
 </div>



 <div className="container-pm blog__container-blog">
      


      {<div className='blogCTA-blog'>
    
 
          <img  className='CTAboximg-blog' src={laptoppointer} alt="search image"/>
    
      </div>}



    <div className="blogExplainer-blog">
      <h3 style={{fontWeight:"500"}}>
        April 12, 2024
        <br/>
        VoIP Development: The Beginner’s Guide To
        <br/>
        Voice Over IP In 2024

      
 
      
      </h3>

         <Link style={{textDecoration:'none'}} to={'/latest-blogs'}>
         <p className="blogExplainer-blog-p">
        Read More {">>"}
        </p>
        </Link>

        <p  style={{color:"white",borderRadius:"1.4rem",backgroundColor:"#333333",paddingLeft:"10px",paddingRight:"10px",width:"max-content"}}>
       Web Developer
        </p>

    </div>

</div>


 {/*line divider between each blog */}
 <div style={{width:"85%",borderBottom:"2px solid gray",margin:"0 auto"}}>
 </div>



 <div className="container-pm blog__container-blog">
      


      {<div className='blogCTA-blog'>
    
 
          <img  className='CTAboximg-blog' src={laptoppointer} alt="search image"/>
    
      </div>}



    <div className="blogExplainer-blog">
      <h3 style={{fontWeight:"500"}}>
        April 05, 2024
        <br/>
        AI Driven VoIP Development To Redefine
        <br/>
        The Role Of IVR

      

      
      </h3>

         <Link style={{textDecoration:'none'}} to={'/latest-blogs'}>
         <p className="blogExplainer-blog-p">
        Read More {">>"}
        </p>
        </Link>

        <p  style={{color:"white",borderRadius:"1.4rem",backgroundColor:"#333333",paddingLeft:"10px",paddingRight:"10px",width:"max-content"}}>
       Web Developer
        </p>

    </div>

</div>


 {/*line divider between each blog */}
 <div style={{width:"85%",borderBottom:"2px solid gray",margin:"0 auto"}}>
 </div>



 <div className="container-pm blog__container-blog">
      


      {<div className='blogCTA-blog'>
    
 
          <img  className='CTAboximg-blog' src={laptoppointer} alt="search image"/>
    
      </div>}



    <div className="blogExplainer-blog">
      <h3 style={{fontWeight:"500"}}>
        March 11, 2024
        <br/>
        
       Why Is High Availability Important 
        <br/>
        For VoIP Platforms? 


        
      
      </h3>

         <Link style={{textDecoration:'none'}} to={'/latest-blogs'}>
         <p className="blogExplainer-blog-p">
        Read More {">>"}
        </p>
        </Link>

        <p  style={{color:"white",borderRadius:"1.4rem",backgroundColor:"#333333",paddingLeft:"10px",paddingRight:"10px",width:"max-content"}}>
       Web Developer
        </p>

    </div>

</div>








 {/*line divider between each blog */}
 <div style={{width:"85%",borderBottom:"2px solid gray",margin:"0 auto",marginBottom:"5rem"}}>
 </div>

    </section>



</>
  )
}

export default blog