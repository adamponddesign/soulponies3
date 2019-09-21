import React from 'react'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'

import Burger from './Burger'
import './MobileNavBar.scss'

const MobileNavBar = props => {
  return (
    <div>
      <div className='mobile-nav-bar'>
        <SVG id='mobile-nav-bar-logo' src={Logo} />

      </div>
      <Burger toggleSideBar={props.toggleSideBar} status={props.status}/>
    </div>
  )
}

export default MobileNavBar
