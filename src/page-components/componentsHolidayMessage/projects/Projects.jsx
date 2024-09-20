import React,{useEffect,useRef} from 'react'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import './projects.css'

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



import bonecole from 'src/assets/images/bonecole.png'
import gpnet from 'src/assets/images/gpnet.png'
import bridgetech from 'src/assets/images/bridgetech.png'
import recyclersbank from 'src/assets/images/recyclersbank.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {

  const onlyWidth = useWindowWidth()
  
   
  
    return (
      <section id='projects'>
        
     <center style={{maxWidth:"60%", margin:"0 auto"}}>
     <h1>Amazing Web App Development Projects We Have Done</h1>
    
     
     </center>
       
     <Swiper className="container projects__container"
     //swiper js options
     modules={[ Navigation,Pagination, Scrollbar, A11y,Autoplay]}
     
     autoplay={false}
     scrollbar={{ draggable: true }}
     slidesPerView={onlyWidth <= 1000 ?1 :(onlyWidth <= 1000? 2: (onlyWidth <= 1500? 2: 2))}
  
     spaceBetween={30}
     pagination={{clickable:true}}
     
     > 
    
  
   
   {/*1 */}
      <SwiperSlide className="project" >
      <Link to={'/projects'}>
       <div className="project__avatar">
       <img src={recyclersbank} alt="recyclers bank" />
       </div>
      
      <div className='client__name'>
      <h4>Recyclers' Bank</h4>
       <p>Mobile Development/Web Admin/UI UX Design</p>
       </div>
       </Link>

      </SwiperSlide>
  
    {/*2 */}
    <SwiperSlide className="project">
    <Link to={'/projects'}>
       <div className="project__avatar">
       <img src={gpnet} alt="avatar one" />
       </div>
     
       <div className="client__name" >
       <h4>Grand Parcel</h4>
       <p>Mobile Development/Web Admin/UI UX Design </p>
       </div>
       </Link>
  
    
      </SwiperSlide>
  
        {/*3 */}
      <SwiperSlide className="project">
      <Link to={'/projects'}>
       <div className="project__avatar">
       <img src={bridgetech} alt="avatar one" />
       </div>
      
       <div className="client__name" >
       <h4>BridgeTech</h4>
       <p>Mobile Development/Web Admin/UI UX Design</p>
       </div>
       </Link>
      </SwiperSlide>
  
  
  
      
  
        {/*4 */}
      <SwiperSlide className="project">
      <Link to={'/projects'}>
       <div className="project__avatar">
       <img src={bonecole} alt="avatar one" />
       </div>
      
       <div className="client__name" >
       <h4>School ERP</h4>
       <p>Mobile Development/Web Admin/UI UX Design</p>
       </div>
       </Link>
      </SwiperSlide>
  
    </Swiper> 
  
  
      </section>
    )
  }
  
  export default Projects