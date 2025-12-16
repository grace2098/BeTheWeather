import React from 'react'
import '../styles/header.css'
import Themetoogle from './subComponents/Themetoogle.jsx'
import Timetoggle from './subComponents/Timetoggle.jsx'
import Search from './subComponents/Search.jsx'; 
const   Header = () => {
  return (
    <div className='head'>
      <div className='greeting'>
        <Timetoggle />
      </div>
      <div className="search-toggle">
        <Search />
        <Themetoogle />
      </div>
    </div>
  )
}

export default Header
