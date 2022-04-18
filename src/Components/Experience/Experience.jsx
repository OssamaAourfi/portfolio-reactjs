import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3>frontend Developement</h3>
          <div className='experience-content'>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>JavaScipt</h4>
                  <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
            
                  <BsPatchCheckFill className='experience-details-icon' />
                 <div> <h4>BootStrap</h4>
                  <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon' />
                  <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
            </article>
           
          </div>

        </div>
        <div className='experience-backend'>
        <h3>Backend Developement</h3>
          <div className='experience-content'>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>SqlServer</h4>
                  <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>MySql</h4>
                  <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Intermediate</small></div>
            </article>
           
           
          </div>

        </div>

        </div>

      
    </section>
  )
}

export default Experience