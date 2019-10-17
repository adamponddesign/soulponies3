import React from 'react'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
// import {Link, withRouter} from 'react-router-dom'

import Burger from './Burger'
import './MobileNavBar.scss'

const MobileNavBar = props => {
  return (
    <div className='navbar-background'>
      <div className='nav-burger-background'>
        <Burger toggleSideBar={props.toggleSideBar} status={props.status}/>
      </div>

      <a href='#/'><SVG id='mobile-navbar-logo' src={Logo} /></a>

    </div>
  )
}

export default MobileNavBar
