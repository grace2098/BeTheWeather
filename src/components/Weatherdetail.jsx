import React from 'react'
import Hourforcastlinechart from './subComponents/Hourforcastlinechart'
import Compass from './subComponents/Compass'
// import Humidity from './subComponents/Humidity'
import '../styles/air.css'
import { SearchContext } from "../components/SearchContext";
import { api } from '../api'
import { useState, useEffect, useContext } from 'react';
const Weatherdetail = () => {
  const [ detail, setDetail ] = useState(null)
    const { city } = useContext(SearchContext);
     const processWeather = (data) => {
       setDetail({
            location: data.city.name

          });
     }
useEffect(() => {
    if (city) {
        fetch(api.getByCity(city))
          .then((res) => res.json())
          .then((data) => processWeather(data))
          .catch((err) => console.error(err));
        return;
      }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

       fetch(api.getByCoords(latitude, longitude))   
              .then((res) => res.json())
                  .then((data) => processWeather(data))
                  .catch((err) => console.error(err));
            }, (err) => console.error(err));
          }
        }, [city]);
  return (
    <div className='airqualities'>
      <div className="air2">
        <h2>Highlights — {detail?.location}</h2>
        <div className='chart'>
          <Hourforcastlinechart />
        </div>
        <div className='extras'>
           <div className="compass">
             <Compass />
           </div>
           {/* <Humidity /> */}
        </div>
      </div>

    </div>
  )
}

export default Weatherdetail
