import React from 'react'

import './LandingPage.scss'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
import Burger from './Burger'


import LandingImage from '../img/Soul-Ponies-Peach.jpg'

const LandingPage = props => {


  return (

    <div id='/'>
      <div className='navbar-background'>
        <div className='nav-burger-background'>
          <Burger toggleSideBar={props.toggleSideBar} status={props.status}/>
        </div>

        <a href='#/'><SVG id='mobile-navbar-logo' src={Logo} /></a>

      </div>


      <img id='landing-image' src={LandingImage} alt='Image of the Soul Ponies' />

    </div>



  )
}

export default LandingPage
