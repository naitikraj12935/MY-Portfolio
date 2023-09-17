import React from 'react'
import './Service.css'
import HeartEmoji from './heartemoji.png'
import Card from '../Cards/Card'
import Glasses from './glasses.png'
import Humble from './humble.png'

export default function Service() {
  
  return (
    <div id="services">
    {/* leftside */}
    <div className='awesome'>
    <span>My Awesome</span>
    <span>Services</span>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum quisquam aspernatur consequuntur
     animi delectus ullam odio repudiandae exercitationem non distinctio.</span>
     <div className='download'>
     <a href="./Naitik raj 3.pdf" download>
  <button className='s-button'>Download CV</button>
</a>
     </div>
     
    <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
      
    </div>
    <div className="cards">
       
        <div style={{top:'12rem',left:'-20rem'}} className='card1'>
            <Card imoji={HeartEmoji} heading='Design' detail1='figma,sketch,photoshop,' detail2={'Adobe,Adobe dx'}/>
        </div>
        <div style={{top:'18rem', left:'24rem'}} className='card2'>
         <Card imoji={Glasses} heading='Backend Developer' detail1='Nodejs,Expressjs,mysql' detail2='mongodb,rest api'/>
        </div>
        <div style={{top:'0rem',left:'20rem'}} className='card3'>
            <Card imoji={Humble} heading='frontend developer' detail1='html,css,js' detail2='React,tailwind'/>
        </div>

    </div>
    </div>
  )
}
