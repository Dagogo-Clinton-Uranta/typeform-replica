import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container ">
      <article className="service">
        <div className="service__head">
          <h3>Set Design</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
      {/*END OF UI/UX*/}

     
      {/*END OF UI/UX*/}


      <article className="service">
        <div className="service__head">
          <h3>Rust Paintings</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
      {/*END OF web development*/}


      <article className="service">
        <div className="service__head">
          <h3>Character Modelling/Animation</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Cpanel.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Firebase</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>heroku.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
      {/*END OFWEBSITE HOSTING AND MGMT*/}
    
  </div>     
    
    </section>
  )
}

export default Services