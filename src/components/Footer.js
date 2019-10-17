import React from 'react'

import './Footer.scss'


const d = new Date()
const currentYear = d.getFullYear()

const Footer = () => {

  return (

    <div id='footer'>
      <p>&copy; Copyright {currentYear}, Soul Ponies</p>


    </div>



  )
}

export default Footer
