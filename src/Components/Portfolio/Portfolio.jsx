import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image:IMG1,
    title: 'Restaurant using HTML/CSS/JS' ,
    github :'https://github.com/OssamaAourfi/Restaurant-'
  },
  {
    id:2,
    image:IMG2,
    title: 'WebSite e-commerce using HTML/CSS/JS' ,
    github :'https://github.com/OssamaAourfi/e-commerce'
  },
  {
    id:3,
    image:IMG3,
    title: 'onlineshop using PHP/Bootstrap' ,
    github :'https://github.com/OssamaAourfi/online-shop'
  },
  {
    id:4,
    image:IMG4,
    title: 'blog-master using PHP/HTML/CSS/Bootstrap' ,
    github :'https://github.com/OssamaAourfi/blog-master'
  },
  {
    id:5,
    image:IMG5,
    title: 'Gestion de materiel using C#/Ado.net/SqlServer' ,
    github :'https://github.com/OssamaAourfi/Gestion-de-materiel'
  },
  {
    id:6,
    image:IMG6,
    title: 'Crud Operation using PHP/HTML/CSS' ,
    github :'https://github.com/OssamaAourfi/CRUD-operation'
  }
]

const Portfolio = () => {
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className='portfolio-item'>
              <div className='portfolio-item-img'>
                <img src={image} alt={title}/>
              </div>
              <h5>{title}</h5>
              <div className='portflio-item-cta'>
              <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a></div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio