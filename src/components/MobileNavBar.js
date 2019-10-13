import React from 'react'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
import {Link, withRouter} from 'react-router-dom'

import Burger from './Burger'
import './MobileNavBar.scss'

const MobileNavBar = props => {
  return (
    <div>
      <div className='mobile-nav-bar'>
        <Link to='/'><SVG id='mobile-nav-bar-logo' src={Logo} /></Link>

      </div>
      <Burger toggleSideBar={props.toggleSideBar} status={props.status}/>
    </div>
  )
}

export default withRouter(MobileNavBar)
