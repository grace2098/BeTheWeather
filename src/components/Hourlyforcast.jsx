import React from 'react'
import Weathercylinder from './subComponents/Weathercylinder'
import { FiHome, FiCloud, FiLogOut } from "react-icons/fi";
import '../styles/hourly.css'
const Hourlyforcast = () => {
  return (
    <div className='hour'>
      
        <div className='todays'>
          <h3>Today/Week</h3>
        </div>
        <div className='weathercylinder'>
          <Weathercylinder date="2nd" Icon={FiCloud} temp="22°c" />
          <Weathercylinder date="3rd" Icon={FiCloud} temp="23°c" />
          <Weathercylinder date="4th" Icon={FiCloud} temp="21°c" />
          <Weathercylinder date="5th" Icon={FiCloud} temp="26°c" />
          <Weathercylinder date="6th" Icon={FiCloud} temp="24°c" />
          <Weathercylinder date="7th" Icon={FiCloud} temp="28°c" />
        </div>
      
      <div className='tomorrow'>
        <div>
          <h4>Tomorrow</h4>
          <p>Thunder storm</p>
        </div>
        <div>
          <h2>21°c</h2>
        </div>
        <div>
          <FiCloud size={28} color="var(--bg)" />
        </div>
      </div>
    </div>
  )
}

export default Hourlyforcast
