import React from 'react'
import './Videos.scss'

const Videos = () => {
  return (
    <div className='page-wrapper'>

      <h2>Videos</h2>
      <div className='container'>
        <video controls controlsList="nodownload">
          <source src="../Videos/World-sample-vid.mp4" type="video/mp4" />

        </video>
        <video controls controlsList="nodownload">
          <source src="../Videos/World-sample-vid.mp4" type="video/mp4" />

        </video>
      </div>
    </div>

  )
}

export default Videos




// <p>Videos coming soon!</p>
