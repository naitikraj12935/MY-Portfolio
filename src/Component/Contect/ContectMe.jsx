import React,{useRef,useState,useEffect} from 'react'
import emailjs from '@emailjs/browser';

import './ContectMe.css'

export default function ContectMe() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [message,setmessage]=useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const emailRegex =
 new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
 const isValidEmail = emailRegex.test(email);


    if(email==='')
    {
      setemail('please enter your email');
      document.getElementById('user-email').classList.add('email-vibrate');
    }
    else if(!isValidEmail)
    {
      setemail('please enter a valid email')
      document.getElementById('user-email').classList.add('email-vibrate');
    }
    else
    {

    emailjs.sendForm('service_qxyyyov', 'template_m9frtan', form.current, 'oot6o0dn8HZjj6Hf9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setname('');
      setemail('');
      setmessage('');
    }
  };
  const nameChange = (event) => {
    const newName = event.target.value;
    setname(newName); // Update the state with the new name
  };
  const emailChange = (event) => {
    const newName = event.target.value;
    setemail(newName); 
    document.getElementById('user-email').classList.remove('email-vibrate');

    // Update the state with the new name
  };
  const messageChange = (event) => {
    const newName = event.target.value;
    setmessage(newName); // Update the state with the new name
  };

  useEffect(() => {
    console.log('Name state:', name); // Log the updated name state
  }, [name]);
  return (
    <div id='Input-form'>
    <div className="Input-left">
      <span>Get in Touch</span>
      
      <span>Contect Me</span>
    </div>
    <div className="Input-right">
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" value={name} onChange={nameChange} name='user-name' className='user' placeholder='Name'/>
        <input type="email" value={email} id='user-email' onChange={emailChange} name='user-email' className='user' placeholder='email' />
        <textarea name="message" value={message}  onChange={messageChange} className="user" cols="30" rows="4" placeholder='message'/>
        <input type="submit" value="send" className='button' onSubmit={sendEmail} />
        <div className='blur c-blurl' style={{background:'var(--purple)'}}>
        </div>
       
      </form>
      <div className='blur-contect' style={{background:"#ABF1FF94",top:'12rem', left:'4rem'}}></div>
    </div>
      
    </div>
  )
}
