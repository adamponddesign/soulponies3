import React from 'react'


import './Shows.scss'

const Shows = () => {
  return (
    <div id='shows'>
      <h2>Shows</h2>
      <div id='table-container' className='container'>
        <table id="dates-table">
          <tbody>
            <tr>
              <th>Line Up</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Time</th>
              <th>Entry</th>

            </tr>
            <tr>
              <td>Trio</td>
              <td>31.10.19</td>
              <td>The Ned (Main Stage) - London</td>
              <td>6pm - 8.45pm</td>
              <td>Public</td>
            </tr>
            <tr>
              <td>Trio</td>
              <td>01.11.19</td>
              <td>The Arts Club - London</td>
              <td>9pm - 11.15pm</td>
              <td>Members Only</td>
            </tr>
            <tr>
              <td>Trio</td>
              <td>13.11.19</td>
              <td>The Savoy - London</td>
              <td>7.30pm - 11.30pm</td>
              <td>Public</td>
            </tr>
            <tr>
              <td>Duo</td>
              <td>14.11.19</td>
              <td>Red Rooster - London</td>
              <td>8.30pm - 9.30pm</td>
              <td>Public</td>
            </tr>
            <tr>
              <td>Trio</td>
              <td>29.11.19</td>
              <td>The Ned (Main Stage) - London</td>
              <td>6pm - 8.45pm</td>
              <td>Public</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Shows
