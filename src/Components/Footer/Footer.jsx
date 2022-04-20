import React from 'react'
import './footer.css'
import {BsLinkedin ,BsGithub ,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Ossama Aourfi</a>
      <ul className='permalinks'>
           <li><a href='#'>Home</a></li>
           <li><a href='#about'>About</a></li>
           <li><a href='#experience'>Experience</a></li>
           <li><a href='#services'>Services</a></li>
           <li><a href='#portfolio'>Portfolio</a></li>
           <li><a href='#testimonials'>Testimonials</a></li>
           <li><a href='#contact'>Contact</a></li>
       </ul>
        <div className='footer-socials'>
             <a href="https://www.linkedin.com/in/ossama-aourfi-9242b1206/" target="_blank"><BsLinkedin /></a>
             <a href="https://github.com/OssamaAourfi" target="_blank"><BsGithub /></a>
             <a href="https://www.instagram.com/ossamaaf/?hl=fr" target="_blank"><BsInstagram /></a>
       </div>
       <div className='footer-copyright'>
         <small>&copy;Ossama Aourfi. All rights reserved</small>
       </div>
      
    </footer>
  )
}

export default Footer