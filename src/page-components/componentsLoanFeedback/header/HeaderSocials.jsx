import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
<a href="https://github.com" target="_blank"><FaInstagram/></a>
<a href="https://medium" target="_blank"><FaPinterest/></a>

    </div>
  ) 
}

export default HeaderSocials