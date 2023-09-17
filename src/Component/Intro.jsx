
import './Intro.css'
import {delay, motion} from 'framer-motion'
import Github from './github.png'
import linkedin from './linkedin.png'
import instagram from './instagram.png'
import Boy from './boy.png'
import Vector1 from './Vector1.png'
import Vector2 from './Vector2.png'
import React from 'react'
import thumbup from './thumbup.png'
import Crown from './crown.png'
import glassesimoji from './glassesimoji.png'
import Floating from './FloatingDiv/Floating'

export default function Intro() {
    
  return (
    
      <div id='intro'>
      <div className="i-left">
          <div className="i-name">
              <span>Hy! I Am</span>
              <span>Naitik Raj</span>
              <span>As a passionate and dedicated Full Stack Developer, I thrive on transforming ideas into functional, user-friendly, and innovative digital experiences. With a strong foundation in both front-end and back-end technologies</span>
          </div>
          <a href='#Input-form'>
          <div className="buttons">
              Hire me
          </div>
          </a>
          <div className="i-icons">
          <a href="https://github.com/naitikraj12935" target='.blank'><img src={Github} alt="" /></a> 
           <a href="https://www.linkedin.com/in/naitik-raj-285277253" target='.blank'><img src={linkedin} alt="" /></a>
          
  
          </div>
      </div>
      <div className="i-right">
       <img src={Vector1} alt="" />
       <img src={Vector2} alt="" />
       <img src={Boy} alt="" />
       <motion.div
       initial={{ x: -1000}}
      animate={{ x: 0}}
      transition={{ duration: 3, delay: 1 }}
    
       >
       <img src={glassesimoji} alt=""  height={125} width={125}/>
       </motion.div>
       <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 350 }}
      transition={{ duration: 3, delay: 1 }}
      whileHover={{ x: [0, 1000, 450] }}>
        <Floating image={Crown} text1='Web' text2='Developer'/>
       </motion.div>
       <motion.div 
       initial={{ x: 500,y:330 }}
      animate={{ x: 75 }}
      transition={{ duration: 2, delay: 0.5 }}
      whileHover={{ x: [50, 1000, 50] }}>
        <Floating image={thumbup} text1='Best Design' text2='Award'/>
       </motion.div>
       <div className="blur" style={{background:"rgb(238,210,255)"}}></div>
       <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem', left:'-9rem'}}></div>
       </div>
        
      </div>
  )
}

 