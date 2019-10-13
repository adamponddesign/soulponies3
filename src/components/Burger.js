import React from 'react'


import { HamburgerSqueeze } from 'react-animated-burgers'
import './Burger.scss'

const Burger = props => {
  return (
    <HamburgerSqueeze barColor="white" id="burger" isActive={props.status} toggleButton={props.toggleSideBar} />
  )
}

export default Burger
