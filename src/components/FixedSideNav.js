import React from 'react'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
import {Link, withRouter} from 'react-router-dom'


import './FixedSideNav.scss'

const FixedSideNav = () => {
  return (
    <nav className="fixed-side-nav">
      <Link to='/'><SVG id='fixed-nav-logo' src={Logo} /></Link>
      <div className='links-container'>
        <Link to='/videos'>Videos</Link>
        <Link to='/photos'>Photos</Link>
        <a href='https://www.instagram.com/soulponiesmusic/' target='_blank' rel='noopener noreferrer'>Instagram</a>
        <Link to='/Testimonials'>Testimonials</Link>
        <Link to='/contact'>Contact</Link>
      </div>

    </nav>
  )
}

export default withRouter(FixedSideNav)
