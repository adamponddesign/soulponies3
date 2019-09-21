import React from 'react'
import './Videos.scss'

const Videos = () => {
  return (
    <section>
      <h2>VIDEOS</h2>
      <video width="400" controls controlsList="nodownload">
        <source src="../Videos/World-sample-vid.mp4" type="video/mp4" />

      </video>
    </section>
  )
}

export default Videos
