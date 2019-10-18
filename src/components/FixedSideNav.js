import React from 'react'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
// import {Link, withRouter} from 'react-router-dom'


import './FixedSideNav.scss'

const FixedSideNav = () => {
  return (
    <nav className="fixed-side-nav">
      <a href='#/'><SVG id='fixed-nav-logo' src={Logo} /></a>
      <div className='links-container'>
        <a href='#about'>About</a>
        <a href='#testimonials'>Testimonials</a>
        <a href='#videos'>Videos</a>
        <a href='#photos'>Photos</a>
        <a href='#shows'>Shows</a>
        <a href='https://www.instagram.com/soulponiesmusic/' target='_blank' rel='noopener noreferrer'>Instagram</a>
        <a href='#contact'>Booking Info</a>

      </div>

    </nav>
  )
}

export default FixedSideNav
