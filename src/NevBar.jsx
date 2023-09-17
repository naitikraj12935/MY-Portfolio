import React, { useState, useEffect } from 'react';
import './NevBar.css';

export default function NevBar({ colr, onSubmit }) {
  const [bgclur, setbgclur] = useState(colr);
  const [color, setcolor] = useState('#191919');
  const [textcolor,settextcolor]=useState('#EFEFEF');
  const [toggle, settoggle] = useState('dark');

  const changecolor = () => {
    let newBgColor;
    let newTextColor;
  
    if (bgclur === '#EFEFEF') {
      newBgColor = '#191919';
      newTextColor = '#EFEFEF';
    } else {
      newBgColor = '#EFEFEF';
      newTextColor = '#191919';
    }
  
    setbgclur(newBgColor);
    setcolor(newTextColor);
    settextcolor(newBgColor);
    
    if (toggle === 'dark') settoggle('light');
    else settoggle('dark');
    
    onSubmit(newBgColor);
  };
  
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Naitik</div>
        <button onClick={changecolor} className="toggle-button" style={{ backgroundColor: color,color:textcolor }}>
          {toggle}
        </button>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
          <li><a href="#intro" onClick={() => scrollToSection('#intro')}>Home</a></li>
            <li><a href="#services" onClick={() => scrollToSection('#services')}>Services</a></li>
            <li><a href="#Work" onClick={() => scrollToSection('#Work')}>Experience</a></li>
            <li><a href="#ports" onClick={() => scrollToSection('#ports')}>Project</a></li>
          </ul>
        </div>
        <a href="#Input-form">
        <button className="button">
         Contact us
        </button>
        </a>
      </div>
    </div>
  );
}
