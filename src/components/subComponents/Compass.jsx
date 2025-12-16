import React from "react";
import "../../styles/compass.css";
import { api } from "../../api";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from '../SearchContext'
export default function Compass({ directionDeg, speed, directionText }) {
  const [windy, setWindy] = useState(null);
  const { city } = useContext(SearchContext);
   const processWeather = (data) => {
const windData = data.list[0].wind;

              setWindy({
                speed: windData.speed, 
                deg: windData.deg,
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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(api.getByCoords(latitude, longitude))
            .then((res) => res.json())
            .then((data) => processWeather(data))
          .catch((err) => console.error(err));
        },
        (err) => console.error(err)
      );
    } else {
      console.log("Geolocation not supported.");
    }
  }, [city]);

  if (!windy) return <p>Loading...</p>;
  const degToCompass = (num) => {
    const val = Math.floor(num / 22.5 + 0.5);
    const arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };

  return (
    <div className="wind-compass-container">
      <div className="compass-circle">
        <div
          className="compass-arrow"
          style={{
            transform: `translate(-50%, -50%) rotate(${windy.deg}deg)`,
          }}
        ></div>
        <div className="compass-label n">N</div>
        <div className="compass-label s">S</div>
        <div className="compass-label e">E</div>
        <div className="compass-label w">W</div>
      </div>
      <div className="description">
        <p>{degToCompass(windy.deg)}</p>
        <p>{(windy.speed * 3.6).toFixed(1)} 9.5 km/h</p>
      </div>
    </div>
  );
}
