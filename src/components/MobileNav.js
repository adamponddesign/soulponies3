import React from 'react'

import {Link, withRouter} from 'react-router-dom'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'

import './MobileNav.scss'

const MobileNav = props => {

  let drawerClasses = 'mobile-nav'

  if (props.status) {
    drawerClasses = 'mobile-nav open'
  }


  return (
    <div className={drawerClasses}>
      <SVG id='mobile-nav-logo' src={Logo} />
      <nav >
        <Link to='/about' onClick={props.toggleSideBar}>About</Link>
        <Link to='/videos' onClick={props.toggleSideBar}>Videos</Link>
        <Link to='/photos' onClick={props.toggleSideBar}>Photos</Link>
        <Link to='/contact' onClick={props.toggleSideBar}>Contact</Link>
        <a href='https://www.instagram.com/soulponiesmusic/' target='_blank' rel='noopener noreferrer'>Instagram</a>
      </nav>
    </div>
  )
}

export default withRouter(MobileNav)
