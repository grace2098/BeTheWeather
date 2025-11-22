import React from 'react'
import FandC from './subComponents/FandC'
import '../styles/dayforcast.css'
const Dayforcast = () => {
  return (
    <div className='today'>
      <div className="headoftheday">
        <div className='weathertoday'>
          <h4>Weather</h4>
          <p>today</p>
        </div>
        <div className='fandCcomp'>
          <FandC />
        </div>
      </div>
      <div className='temptoday'>
        <h1>25°c</h1>
      </div>
      <div className='footeroftheday'>
        <div className='feelliketemp'>
          <p>Feels like 27°c</p>
        </div>
        <div className='highandlow'>
          <p>High:27°</p>
          <p>low:24°</p>
        </div>
      </div>
      
    </div>
  )
}

export default Dayforcast
