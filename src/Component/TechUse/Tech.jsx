import React from 'react'
import './Tech.css'
import Mongo from './mongo.png'
import Nodejs from './nodejs.png'
import Reacts from './react.png'
import Javascript from './javascript.png'
import Express from './express.png'

export default function Tech() {
  return (
    <div className='tech'>
     <div className='t-left'>
    <span>Best Hands</span>
    <span>on these Tech</span>
  
   
    <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
      
    </div>
    <div className="right">
        <div className="main-right">
            <div>
                <img src={Express} alt="" height={75} width={75} />
            </div>
            <div>
                <img src={Javascript} alt="" height={75} width={75}/>
            </div>
            <div>
                <img src={Reacts} alt="" height={75} width={75}/>
            </div>
            <div>
                <img src={Mongo} alt="" height={75} width={75}/>
            </div>
            <div>
                <img src={Nodejs} alt="" height={75} width={75} />
            </div>
        </div>
        <div className="blue"></div>
        <div className="yellow"></div>
    </div>
      
    </div>
  )
}
