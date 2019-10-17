import React from 'react'

import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
// import {Link, withRouter} from 'react-router-dom'

import './MobileNav.scss'

const MobileNav = props => {

  let drawerClasses = 'mobile-nav'

  if (props.status) {
    drawerClasses = 'mobile-nav open'
  }


  return (
    <div className={drawerClasses}>
      <a href='#/' onClick={props.toggleSideBar}><SVG id='mobile-nav-logo' src={Logo} /></a>
      <nav >
        <a href='#about' onClick={props.toggleSideBar}>About</a>
        <a href='#testimonials' onClick={props.toggleSideBar}>Testimonials</a>
        <a href='#videos' onClick={props.toggleSideBar}>Videos</a>
        <a href='#photos' onClick={props.toggleSideBar}>Photos</a>
        <a href='https://www.instagram.com/soulponiesmusic/' target='_blank' rel='noopener noreferrer'>Instagram</a>
        <a href='#contact' onClick={props.toggleSideBar}>Booking Info</a>
      </nav>
    </div>
  )
}

export default MobileNav
