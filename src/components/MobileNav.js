import React from 'react'

import {Link, withRouter} from 'react-router-dom'
import './MobileNav.scss'

const MobileNav = props => {

  let drawerClasses = 'mobile-nav'

  if (props.status) {
    drawerClasses = 'mobile-nav open'
  }


  return (
    <nav className={drawerClasses}>

      <Link to='/about' onClick={props.toggleSideBar}>About</Link>
      <Link to='/videos' onClick={props.toggleSideBar}>Videos</Link>
      <Link to='/photos' onClick={props.toggleSideBar}>Photos</Link>
      <Link to='/contact' onClick={props.toggleSideBar}>Contact</Link>
      <a href='https://www.instagram.com/soulponiesmusic/' target='_blank' rel='noopener noreferrer'>Instagram</a>


    </nav>
  )
}

export default withRouter(MobileNav)
