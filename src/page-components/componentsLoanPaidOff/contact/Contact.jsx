import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  
   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_47m8vga', 'template_gg6etvs',form.current, 'if8AFQahkDsWuCNtm');
    e.target.reset();
   
   }
  
  
  
  
  
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
       <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>amberroe@gmail.com</h5>
             <a href="mailto:dagogouranta@gmail.com" target="_blank">Send an Email</a>
          </article>


          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+447964695665</h5>
             <a href="https://api.whatsapp.com/send?phone=+2348183763331" target="_blank">Whatsapp Me</a>
          </article>

          <article className="contact__option" >
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Amber Roe</h5>
             <a href="https://m.me/ernest.achiever" target="_blank">Send a  Message</a>
          </article>

          
       </div>
       {/*END OF CONTACT OPTIONS */}

       <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='your Full name' required />
        <input type="email" placeholder='Your Email' required />
        <textarea name="message" placeholder='Your Message'  rows="7"></textarea>
      
      <button type="submit" className="btn btn-primary">Send Message</button>
       </form>

      </div>
    </section>
  )
}

export default Contact