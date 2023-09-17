import React from 'react'
import './Card.css'

export default function Card({imoji,heading,detail1,detail2}) {
  return (
    <div className='card'>
      <img src={imoji} alt="" />
      <span>{heading}</span>
      <span>{detail1}</span>
      <span>{detail2}</span>
      
    </div>
  )
}
