import React from 'react'
import '../../styles/Weathercylinder.css'
const Weathercylinder = ({date, Icon, temp}) => {
  return (
    <div className='cylinder'>
      <p className='time'>{date}</p>
      <div className='icon'><Icon size={25} color="var(--bg)" /></div>
      <p className='temp'>{temp}</p>
    </div>
  )
}

export default Weathercylinder
