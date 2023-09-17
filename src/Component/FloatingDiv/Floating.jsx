import React from 'react'
import './Floating.css'

export default function Floating({image,text1,text2}) {
  return (
    <div className='floatingdiv' >
    <img src={image} alt="" height={35} width={35}
    />
    <span>
        {text1}
        <br />
        {text2}
    </span>
      
    </div>
  )
}
