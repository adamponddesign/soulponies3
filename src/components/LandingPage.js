import React from 'react'

import './LandingPage.scss'
import Logo from '../img/logo.svg'
import SVG from 'react-inlinesvg'
import Burger from './Burger'




const LandingPage = props => {


  return (

    <div id='/' className='landingPage-container'>
      <div className='navbar-background'>
        <div className='nav-burger-background'>
          <Burger toggleSideBar={props.toggleSideBar} status={props.status}/>
        </div>

        <a href='#/'><SVG id='mobile-navbar-logo' src={Logo} /></a>

      </div>


      <img id='landing-image' src='../img/Soul-Ponies-Peach.jpg' alt="Image of the Soul Ponies" />
    </div>



  )
}

export default LandingPage
