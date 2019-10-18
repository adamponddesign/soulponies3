import React from 'react'
import './Testimonials.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Testimonials = () => {
  return (
    <div id='testimonials'>
      <h2>Testimonials</h2>
      <div className='testimonials-row'>
        <div className='testimonials-column'>

          <div className='testimonial'>
            <p className='testimonial-text'>The Soul Ponies were fantastic! They have a very different sound and were musically very good too, which was immediately picked up by everyone.</p>
            <p className='testimonial-text-venue'>The Arts Club</p>
            <p className='testimonial-text-date'>Sept 19</p>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className='testimonial'>
            <p className='testimonial-text'>So many of our guests said you were the best live band they&#39;d ever heard</p>
            <p className='testimonial-text-name'>Chloe & Ben</p>
            <p className='testimonial-text-venue'>Archerfields</p>
            <p className='testimonial-text-date'>Dec 18</p>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>



        </div>


        <div className='testimonials-column'>

          <div className='testimonial'>
            <p className='testimonial-text'>We&#39;re always excited to have Soul Ponie Duo play for us.  Many of our regular customers ask when they&#39;ll be back!</p>

            <p className='testimonial-text-venue'>Red Rooster - Shoreditch</p>
            <p className='testimonial-text-date'>Oct 19</p>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className='testimonial'>
            <p className='testimonial-text'>Soul Ponies added a very unique cool vibe to our event, just what we were after.  Thanks so much!</p>
            <p className='testimonial-text-name'>Phil & Rachel</p>
            <p className='testimonial-text-venue'>White City House</p>
            <p className='testimonial-text-date'>Oct 19</p>
            <div className='stars'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>




        </div>



      </div>
    </div>

  )
}

export default Testimonials
