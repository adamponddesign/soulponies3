import React from 'react'

import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
import {Link, withRouter} from 'react-router-dom'

import './MobileNav.scss'

const MobileNav = props => {

  let drawerClasses = 'mobile-nav'

  if (props.status) {
    drawerClasses = 'mobile-nav open'
  }


  return (
    <div className={drawerClasses}>
      <Link to='/' onClick={props.toggleSideBar}><SVG id='mobile-nav-logo' src={Logo} /></Link>
      <nav >
        <Link to='/videos' onClick={props.toggleSideBar}>Videos</Link>
        <Link to='/photos' onClick={props.toggleSideBar}>Photos</Link>
        <a href='https://www.instagram.com/soulponiesmusic/' target='_blank' rel='noopener noreferrer'>Instagram</a>
        <Link to='/testimonials' onClick={props.toggleSideBar}>Testimonials</Link>
        <Link to='/contact' onClick={props.toggleSideBar}>Contact</Link>
      </nav>
    </div>
  )
}

export default withRouter(MobileNav)
