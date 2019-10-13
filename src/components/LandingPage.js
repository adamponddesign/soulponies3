import React from 'react'

import './LandingPage.scss'

import ArtsClub from '../img/Arts.svg'
import Rooster from '../img/RedR.svg'
import Soho from '../img/Soho.svg'
import Ned from '../img/The Ned.svg'
import WhiteCityHouse from '../img/WCH.svg'

import SVG from 'react-inlinesvg'

const LandingPage = () => {
  return (

    <div>

      <img id='landing-image' src="https://i.imgur.com/1mVHu4A.jpg" alt="Image of the Soul Ponies" />

      <div className='container'>
        <div className='block'>
          <p className="bottom-left">Soul Ponies are a London based band who play a variety of smooth soul classics from artists such as D&apos;Angelo, Lynden David Hall, Donny Hathaway, Bill Withers, Donell Jones, Ginuwine and Blackstreet.
          They have performed for, and alongside the likes of Bruno Mars, Ed Sheeran, Sir Tom Jones, Sir Rod Stewart, Ronnie Wood and Johnny Depp</p>
        </div>

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

export default LandingPage
