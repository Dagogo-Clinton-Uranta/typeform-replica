import React,{useEffect,useRef} from 'react'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'



import './testimonials.css'
import AVTR1 from 'src/assets/images/avatar8.jpeg'
import AVTR2 from 'src/assets/images/avatar5.jpg'
import AVTR3 from 'src/assets/images/avatar6.jpg'
import AVTR4 from 'src/assets/images/avatar7.jpg'

import property from 'src/assets/images/property.png'
import healthcare from 'src/assets/images/healthcare.png'
import education from 'src/assets/images/education.png'
import FinTech from 'src/assets/images/fintech.png'
import automotive from 'src/assets/images/automotive.png'
import startups from 'src/assets/images/startups.png'
import restaurants from 'src/assets/images/restaurants.png'
import charity from 'src/assets/images/charity.png'
import corporate from 'src/assets/images/corporate.png'
import software from 'src/assets/images/software.png'
import retail from 'src/assets/images/retail.png'
import legal from 'src/assets/images/legal.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {

const onlyWidth = useWindowWidth()

 

  return (
    <section id='testimonials'>
      
   <center style={{maxWidth:"60%", margin:"0 auto"}}>
   <h1>WHY CHOOSE US?</h1>
  
  
   
   </center>
     
   <Swiper className="container testimonials__container"
   //swiper js options
   modules={[ Navigation,Pagination, Scrollbar, A11y,Autoplay]}
   loop={true}
   autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={onlyWidth <= 1200 ?1 :(onlyWidth <= 1400? 2: (onlyWidth <= 1500? 2: 2))}

   spaceBetween={30}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
    <SwiperSlide className="testimonial-welcome">
     {/*<div className="client__avatar">
     <img src={retail} alt="avatar one" />
     </div>*/}

     
     <h3 className="client__name">Competitive Pricing Model</h3>

     <p>
     Depending on your project type, its complexities,
      and other factors, we propose the best engagement
       and pricing models that can maximize your ROI.
     </p>
    
    </SwiperSlide>

     {/*2 */}
    <SwiperSlide className="testimonial-welcome">
    { /*<div className="client__avatar">
     <img src={software} alt="avatar one" />

     </div>*/}

     <h3 className="client__name">Code Standards</h3>
      

      <p>
  
      We follow global coding standards incorporated with smart
       and rigorous web application development processes for
        seamless and scalable web solution deliverables.
      </p>

    </SwiperSlide>

 {/*3 */}
    <SwiperSlide className="testimonial-welcome">
    {/* <div className="client__avatar">
     <img src={corporate} alt="avatar one" />
    </div> */}
    
    <h3 className="client__name">Competitive Pricing Model</h3>

<p>
Depending on your project type, its complexities,
 and other factors, we propose the best engagement
  and pricing models that can maximize your ROI.
</p>

    

    </SwiperSlide>

  {/*4 */}
  <SwiperSlide className="testimonial-welcome">
   { /* <div className="client__avatar">
     <img src={charity} alt="avatar one" />
     </div>*/}
    
    <h3 className="client__name">Code Standards</h3>
      

      <p>
  
      We follow global coding standards incorporated with smart
       and rigorous web application development processes for
        seamless and scalable web solution deliverables.
      </p>

    

    </SwiperSlide>



{/*1 */}
<SwiperSlide className="testimonial-welcome">
    {/* <div className="client__avatar">
     <img src={restaurants} alt="avatar one" />
    </div>*/}

     
<h3 className="client__name">Competitive Pricing Model</h3>

<p>
Depending on your project type, its complexities,
 and other factors, we propose the best engagement
  and pricing models that can maximize your ROI.
</p>

     
    </SwiperSlide>

     {/*2 */}
    <SwiperSlide className="testimonial-welcome">
    {/* <div className="client__avatar">
     <img src={startups} alt="avatar one" />

     </div>*/}

<h3 className="client__name">Code Standards</h3>
      

      <p>
  
      We follow global coding standards incorporated with smart
       and rigorous web application development processes for
        seamless and scalable web solution deliverables.
      </p>

     

    </SwiperSlide>

 {/*3 */}
    <SwiperSlide className="testimonial-welcome">
    { /*<div className="client__avatar">
     <img src={automotive} alt="avatar one" />
     </div>*/}
    
    <h3 className="client__name">Competitive Pricing Model</h3>

<p>
Depending on your project type, its complexities,
 and other factors, we propose the best engagement
  and pricing models that can maximize your ROI.
</p>

     
    </SwiperSlide>

  {/*4 */}
  <SwiperSlide className="testimonial-welcome">
    { /*<div className="client__avatar">
     <img src={FinTech} alt="avatar one" />
     </div>*/}
    
    <h3 className="client__name">Code Standards</h3>
      

      <p>
  
      We follow global coding standards incorporated with smart
       and rigorous web application development processes for
        seamless and scalable web solution deliverables.
      </p>

     

    </SwiperSlide>


{/*1 */}
<SwiperSlide className="testimonial-welcome">
     {/*<div className="client__avatar">
     <img src={education} alt="avatar one" />
    </div>*/}

     
<h3 className="client__name">Competitive Pricing Model</h3>

<p>
Depending on your project type, its complexities,
 and other factors, we propose the best engagement
  and pricing models that can maximize your ROI.
</p>

     

    </SwiperSlide>

    
   

 {/*3 */}
    <SwiperSlide className="testimonial-welcome">
     {/*<div className="client__avatar">
     <img src={healthcare} alt="avatar one" />
     </div>*/}
    
     <h3 className="client__name">Code Standards</h3>
      

      <p>
  
      We follow global coding standards incorporated with smart
       and rigorous web application development processes for
        seamless and scalable web solution deliverables.
      </p>

     

    </SwiperSlide>

  {/*4 */}
  <SwiperSlide className="testimonial-welcome">
    {/* <div className="client__avatar">
     <img src={property} alt="avatar one" />
     </div>*/}
    
    <h3 className="client__name">Competitive Pricing Model</h3>

<p>
Depending on your project type, its complexities,
 and other factors, we propose the best engagement
  and pricing models that can maximize your ROI.
</p>


    </SwiperSlide>

    <SwiperSlide className="testimonial-welcome">
    {/* <div className="client__avatar">
     <img src={legal} alt="avatar one" />
     </div>*/}
    
    <h3 className="client__name">Code Standards</h3>
      

      <p>
  
      We follow global coding standards incorporated with smart
       and rigorous web application development processes for
        seamless and scalable web solution deliverables.
      </p>

    




    </SwiperSlide>




  </Swiper> 


    </section>
  )
}

export default Testimonials