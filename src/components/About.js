import React from 'react'

import './About.scss'
import SVG from 'react-inlinesvg'

import ArtsClub from '../img/Arts.svg'
import Rooster from '../img/RedR.svg'
import Soho from '../img/Soho.svg'
import Ned from '../img/The Ned.svg'
import WhiteCityHouse from '../img/WCH.svg'

const About = () => {
  return (
    <div id='about'>
      <h2>About</h2>
      <div className='container'>
        <p id='intro-paragraph'>Soul Ponies are a London based band who play a variety of smooth soul classics from artists such as D&apos;Angelo, Lynden David Hall, Donny Hathaway, Bill Withers, Donell Jones, Ginuwine and Blackstreet.
        They have performed for, and alongside the likes of Bruno Mars, Ed Sheeran, Sir Tom Jones, Sir Rod Stewart, Ronnie Wood and Johnny Depp</p>
      </div>

      <h2>Regularly Seen At</h2>
      <div className='container'>

        <ul className='venues-container block'>
          <li><SVG className='venues' src={Rooster} /></li>
          <li><SVG className='venues' src={Ned} /></li>
          <li><SVG className='venues' src={ArtsClub} /></li>
          <li><SVG className='venues' src={Soho} /></li>
          <li><SVG className='venues' src={WhiteCityHouse} /></li>
        </ul>
      </div>

    </div>
  )
}


export default About
