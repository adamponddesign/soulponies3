import React from 'react'
import './BookingInfo.scss'

const BookingInfo = () => {
  return (
    <div id='booking-info'>
      <h2>Booking Info</h2>
      <div className='container'>
        <p>Soul Ponies are based in central London but travel worldwide.<br />They are available to book in the following line ups</p>
        <hr />
        <ul>
          <li>Duo - Keys+Vocals / Drums</li>
          <li>Trio - Keys+Vocals / Bass / Drums</li>
          <li>Quartet - Keys+Vocals / Bass / Guitar / Drums</li>
        </ul>
        <hr />
        <p>For more information and availability please contact</p>
        <p id='email-address'>info@soulponies.co.uk</p>
        <a id='email-now-button' href='mailto:info@soulponies.co.uk?subject=Soul%20Ponies%20Enquiry&body=Line Up:%20(Duo/Trio/Quartet)%0D%0AEvent%20Date:%0D%0AEvent%20Location:%0D%0ANumber%20of%20Guests:' target='_blank' rel='noopener noreferrer'>Send Email Now</a>

      </div>
    </div>
  )
}

export default BookingInfo
