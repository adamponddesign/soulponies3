import React from 'react'


import { HamburgerCollapse } from 'react-animated-burgers'
import './Burger.scss'

const Burger = props => {



  return (

    <HamburgerCollapse id="burger" isActive={props.status} toggleButton={props.toggleSideBar} />


  )
}

export default Burger
