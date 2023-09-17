import React from 'react'
import './Works.css'
import Circle from './Circle'

export default function Work() {
  return (
    <div id='Work'>
    <div>
        <Circle num={2} item1='Years' item2='Exprience'/>
    </div>
    <div>
        <Circle num={50} item1='Completed' item2='Project'/>
    </div>
    <div>
        <Circle num={2} item1='Companies' item2='Work'/>
    </div>
      
    </div>
  )
}
