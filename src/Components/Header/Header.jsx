import React from 'react'
import Cta from './Cta'
import Social from './Social'
import './header.css'

const Header = () => {
  return (
    <header>
     <div className='container header__container'>
       <h5>Hello i'm</h5>
       <h1>Ossama Aourfi</h1>
       <h5 className='text-light'> Web Devloper</h5>
       <Cta />
       <Social />
       <div className='me'>
         {/* <img src={ME} alt=''/> */}
       </div>
       <a href='#contact' className="scroll_down">Scroll Down</a>
     </div>
    </header>
  )
}

export default Header