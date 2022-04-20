import React, { useRef } from 'react';
import './contact.css'
import {MdEmail} from 'react-icons/md';
import {BsMessenger , BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r815jdg', 'template_t0m8s4n', form.current, 'gKlt4ULIZJa4D05Xg')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>aourfidev@gmail.com</h5>
            <a href='mailto:aourfidev@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact-option'>
            <BsMessenger className='contact-option-icon' />
            <h4>Messenger</h4>
            <h5>Oussama Aourfi</h5>
            <a href='https://m.me/oussama.aourfi' target='_blank'>Send a message</a>
          </article>
          <article className='contact-option'>
            <BsWhatsapp  className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+212619250487</h5>
            <a href='https://api.whatsapp.com/send?phone=+212619250487' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='your Full Name' Required/>
          <input type='email' name='email' placeholder='your email' Required/>
          <textarea name='message' rows='7' placeholder='your message' Required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact