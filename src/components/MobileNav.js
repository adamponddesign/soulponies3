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

      <Link to='/contact' onClick={props.toggleSideBar}>Contact</Link>
      <Link to='/videos' onClick={props.toggleSideBar}>Videos</Link>
      <Link to='/photos' onClick={props.toggleSideBar}>Photos</Link>


    </nav>
  )
}

export default withRouter(MobileNav)
