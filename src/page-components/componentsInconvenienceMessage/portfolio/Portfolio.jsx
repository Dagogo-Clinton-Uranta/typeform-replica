import React from 'react'
import './portfolio.css'
import IMG1 from 'src/assets/images/portfolio1.png'
import IMG2 from 'src/assets/images/portfolio2.webp'
import IMG3 from 'src/assets/images/portfolio3.webp'
import IMG4 from 'src/assets/images/portfolio4.webp'
import IMG5 from 'src/assets/images/portfolio5.webp'
import IMG6 from 'src/assets/images/portfolio6.webp'

const Portfolio = () => {
  return (
<section id='portfolio'>
 <h5>My Recent work</h5>
 <h2>Portfolio</h2>

<div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG1} alt="portfolio item 1" />
</div>
  <h3>Set Design for "Lost"</h3>
  <div className="portfolio__item-cta">
  <a href="https://github.com" className="btn">Project Summary</a>
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer" >Gallery</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG2} alt="portfolio item 1" />
</div>
  <h3>Storyboarding for "West Willows"</h3>
  <div className="portfolio__item-cta">
  <a href="https://github.com" className="btn">Project Summary</a>
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Gallery</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG3} alt="portfolio item 1" />
</div>
  <h3> Set Design for "The Flash"</h3>
  
  <div className="portfolio__item-cta">
  <a href="https://github.com" className="btn">Project Summary</a>
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Gallery</a>
  </div>
 
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG4} alt="portfolio item 1" />
</div>
  <h3>Nirvana StoryLine Concept</h3>
  <div className="portfolio__item-cta">
  <a href="https://github.com" className="btn">Project Summary</a>
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Gallery</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG5} alt="portfolio item 1" />
</div>
  <h3>Handcrafter "Tako" sculpture</h3>
  <div className="portfolio__item-cta">
  <a href="https://github.com" className="btn">Project Summary</a>
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Gallery</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG6} alt="portfolio item 1" />
</div>
  <h3>Manga Shrine (Personal Project)</h3>
  <div className="portfolio__item-cta">
  <a href="https://github.com" className="btn">Project Summary</a>
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Gallery</a>
  </div>
 </article>
</div>



</section>
  )
}

export default Portfolio