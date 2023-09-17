import React, { useEffect, useState } from 'react';
import './Circle.css';

export default function Circle({ num, item1, item2 }) {
  const [count, setCount] = useState(1);
  const finalNumber = num;
  const delay = 200; // Milliseconds (0.1 seconds in this example)
  const [intervalID, setIntervalID] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount)=>{
        const newCount = prevCount + 1;
        return newCount > finalNumber ? finalNumber : newCount;
 })
      }, delay);

    
    setCount(interval);
  
    return () => clearInterval(interval);
  }, []); // Add finalNumber as a dependency to handle changes in the number

  return (
    <div className='Circle'>
      <div className="number">
        {count}<span>+</span>
      </div>
      <span>{item1}</span>
      <span>{item2}</span>
    </div>
  );
}
