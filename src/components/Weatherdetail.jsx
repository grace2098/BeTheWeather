import React from 'react'
import Hourforcastlinechart from './subComponents/Hourforcastlinechart'
import Compass from './subComponents/compass'
import Humidity from './subComponents/Humidity'
import '../styles/air.css'
const Weatherdetail = () => {
  return (
    <div className='airqualities'>
      <h2>Highlights</h2>
      <div className='chart'>
        <Hourforcastlinechart />
      </div>
      <div className='extras'>
         <div className="compass">
           <Compass />
         </div>
         <Humidity />
      </div>

    </div>
  )
}

export default Weatherdetail
