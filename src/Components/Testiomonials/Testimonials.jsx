import React from 'react'
import './testimonials.css';
import Avtr1 from '../../assets/avatar1.jpg';
import Avtr2 from '../../assets/avatar2.jpg';
import Avtr3 from '../../assets/avatar3.jpg';
import Avtr4 from  '../../assets/avatar4.jpg';
// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const review =[
  {
    id:1,
    image:Avtr1,
    name:'Jhon wick',
    review:'loremghjgjgyuguiiuuhhuhojwohfowfiohiohiohhwhoghogw'
  },
  {
    id:2,
    image:Avtr2,
    name:'Brunio Fernandes',
    review:'loremghjgjgyuguiiuuhhuhojwohfowfiohiohiohhwhoghogw'
  },
  {
  id:3,
    image:Avtr3,
    name:'Lutaro Martines',
    review:'loremghjgjgyuguiiuuhhuhojwohfowfiohiohiohhwhoghogw'
  },
  {
    id:4,
    image:Avtr4,
    name:'AlexanderArnold',
    review:'loremghjgjgyuguiiuuhhuhojwohfowfiohiohiohhwhoghogw'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
     
      <Swiper className='container testiomonials-container' modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    
     >
       {
         review.map(({id,image,name,review})=>{
           return(
            <SwiperSlide key={id} className='testimonial'>
            <div  className='client-avatar'>
              <img  src={image} alt="avtr1"/>
              </div>

              <h5 className='client-name'>{name}</h5>
              <small className='client-review'>{review}</small>
            
          </SwiperSlide>
           )
         })
       }
      </Swiper>

    </section>
  )
}

export default Testimonials