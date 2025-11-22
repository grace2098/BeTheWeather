import React from 'react'
import '../../styles/humidity.css';
const Humidity = () => {
  return (
    <div className='humidity'>
      <div className='object'>
        <p>Humidity</p>
        <p>71%</p>
      </div>
      <div className='object'>
        <p>Feel</p>
        <p>36°c</p>
      </div>
      <div className='object'>
        <p>Pressure</p>
        <p>1014mbar</p>
      </div>
      <div className='object'>
        <p>Chance of rain</p>
        <p>24%</p>
      </div>
    </div>
  )
}

export default Humidity
