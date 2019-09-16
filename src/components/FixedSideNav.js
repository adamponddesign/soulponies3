import React from 'react'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
import {Link, withRouter} from 'react-router-dom'

import './FixedSideNav.scss'

const FixedSideNav = () => {
  return (
    <nav className="fixed-side-nav">
      <SVG id='fixed-nav-logo' src={Logo} />

      <Link to='/contact'>Contact</Link>
      <Link to='/videos'>Videos</Link>
      <Link to='/Photos'>Videos</Link>
    </nav>
  )
}

export default withRouter(FixedSideNav)
