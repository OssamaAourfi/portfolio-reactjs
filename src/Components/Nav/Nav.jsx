import React from 'react'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookContent} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {MdOutlineMessage} from 'react-icons/md';
import './nav.css'
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] =useState('#')
  return (
    
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ?  'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === 'about' ?  'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ?  'active' : ''}><BiBookContent/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ?  'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ?  'active' : ''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav