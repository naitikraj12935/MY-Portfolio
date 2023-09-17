import React from 'react'
import './Port.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Ecommerce from '../../img/ecommerce.png'
import Musicapp from '../../img/musicapp.png'
import Hoc from '../../img/hoc.png'
import SideBar from '../../img/sidebar.png'
import  { Pagination } from "swiper/modules";


import 'swiper/css'
import 'swiper/css/pagination'

export default function Port() {
    const proj=[
        {
            img:Ecommerce,
        },
        {
            img:Musicapp,
        },
    {
        img:SideBar,
    },
    {
        img:Hoc,
    }
        
    ]
  return (
    <div id="ports">
    <div className='port'>
    <span>Recent Project</span>
    <div className="blur" style={{background:"rgb(238,210,255)"}}></div>
    <div className="blur" style={{background:'#C1F5FF',top:'5rem',width:'21rem',height:'11rem', left:'-7rem'}}></div>
    <Swiper
    className='port-slider'
    modules={[Pagination]}
    
    centeredSlides={true}
    pagination={{clickable:true}}
    slidesPerView={1}
    >
       {proj.map((project,index)=>{
        return(
            <SwiperSlide key={index}>
                <img src={project.img} alt="" />
            </SwiperSlide>
        )
       })}
    </Swiper>
      
    </div>
    </div>
  )
}
