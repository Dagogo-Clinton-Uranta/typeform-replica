import React,{useEffect,useRef} from 'react'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'



import './client-testimonials.css'

import retail from 'src/assets/images/avatar5.png'
import quotation from 'src/assets/images/quotation.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ClientTestimonials = () => {

const onlyWidth = useWindowWidth()

 

  return (
    <section id='client-testimonials'>
      
   <center style={{maxWidth:"60%", margin:"0 auto"}}>
   <h1>WHAT OUR CLIENTS SAY</h1>
  
  
   
   </center>
     
   <Swiper className="container-client client-testimonials__container"
   //swiper js options
   modules={[ Navigation,Pagination, Scrollbar, A11y,Autoplay]}
   loop={true}
   autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={onlyWidth <= 520 ?1 :(onlyWidth <= 1000? 1: (onlyWidth <= 1500? 1: 1))}

   spaceBetween={30}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
   <SwiperSlide className="client-testimonial-welcome">
   
   <img src={quotation} style={{width:"3rem",height:"2rem",position:"absolute",left:"30px",top:"0"}}/>
   
   
    <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column"}}>
   
 
    <p>
        
          
      What Our Clients Say<br/>
      " Hi, I just wanted to send you guys a quick message on how great
       its been working with you guys on our voip development needs,
        in the last 3-4 years, you have been very responsive and always care 
        about delivering the work as much as we do. Im very impressed with the
         high level of talent that you guys have and am grateful that I could
          find such dependable voip professionals that always do what they say 
          they will. take care -Alberta"
          <br/>
      Alberta Montgomery
 
 
    </p>
 
    <h6 className="cleverMoto">Clever Moto</h6>
    </div>
 
 
     {/* <div className="client__avatar-client">*/}
    <img src={retail} style={{backgroundColor:"red"}} alt="avatar one" />
   {/* </div>*/}
  
 
 
   </SwiperSlide>

     {/*2 */}
     <SwiperSlide className="client-testimonial-welcome">
   
   <img src={quotation} style={{width:"3rem",height:"2rem",position:"absolute",left:"30px",top:"0"}}/>
   
   
    <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column"}}>
   
 
    <p>
        
          
      What Our Clients Say<br/>
      " Hi, I just wanted to send you guys a quick message on how great
       its been working with you guys on our voip development needs,
        in the last 3-4 years, you have been very responsive and always care 
        about delivering the work as much as we do. Im very impressed with the
         high level of talent that you guys have and am grateful that I could
          find such dependable voip professionals that always do what they say 
          they will. take care -Alberta"
          <br/>
      Alberta Montgomery
 
 
    </p>
 
    <h6 className="cleverMoto">Clever Moto</h6>
    </div>
 
 
     {/* <div className="client__avatar-client">*/}
    <img src={retail} style={{backgroundColor:"red"}} alt="avatar one" />
   {/* </div>*/}
  
 
 
   </SwiperSlide>




  <SwiperSlide className="client-testimonial-welcome">
   
  <img src={quotation} style={{width:"3rem",height:"2rem",position:"absolute",left:"30px",top:"0"}}/>
  
  
   <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column"}}>
  

   <p>
       
         
     What Our Clients Say<br/>
     " Hi, I just wanted to send you guys a quick message on how great
      its been working with you guys on our voip development needs,
       in the last 3-4 years, you have been very responsive and always care 
       about delivering the work as much as we do. Im very impressed with the
        high level of talent that you guys have and am grateful that I could
         find such dependable voip professionals that always do what they say 
         they will. take care -Alberta"
         <br/>
     Alberta Montgomery


   </p>

   <h6 className="cleverMoto">Clever Moto</h6>
   </div>


    {/* <div className="client__avatar-client">*/}
   <img src={retail} style={{backgroundColor:"red"}} alt="avatar one" />
  {/* </div>*/}
 


  </SwiperSlide>



  </Swiper> 


    </section>
  )
}

export default ClientTestimonials