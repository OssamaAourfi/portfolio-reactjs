import React from 'react'
import {BsLinkedin ,BsGithub ,BsInstagram} from 'react-icons/bs'

const Social = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/ossama-aourfi-9242b1206/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/OssamaAourfi" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/ossamaaf/?hl=fr" target="_blank"><BsInstagram /></a>
        

    </div>
  )
}

export default Social