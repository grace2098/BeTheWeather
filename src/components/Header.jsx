import React from 'react'
import '../styles/header.css'
import Themetoogle from './subComponents/Themetoogle.jsx'
import Timetoggle from './subComponents/Timetoggle.jsx'
const   Header = () => {
  return (
    <div className='head'>
      <div className='greeting'>
        <Timetoggle />
      </div>
      <Themetoogle />
    </div>
  )
}

export default Header
