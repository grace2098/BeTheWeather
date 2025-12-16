import React from "react";
import "../styles/tempofcities.css";
import { useState, useEffect, useContext } from "react";
import { api } from "../api";
import { SearchContext } from '../components/SearchContext'
const Tempothercities = () => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");
   const { city } = useContext(SearchContext);

  const processCities = (data, searchedCity) => {
    if (!data.list || data.list.length === 0) {
      setError("No nearby cities found");
      return;
    }

 
    const formatted = data.list
      .filter((c) => searchedCity ? c.name.toLowerCase() !== searchedCity.toLowerCase() : true)
      .slice(0, 4)
      .map((c) => ({
        name: c.name,
        temp: Math.round(c.main.temp) + "°c",
        dec: c.weather[0].main,
      }));

    if (formatted.length === 0) {
      setError("No nearby cities found");
    } else {
      setCities(formatted);
    }
  };

  useEffect(() => {
    setCities([]);
    setError("");

    const fetchNearby = (lat, lon, searchedCity) => {
      fetch(api.getNearbyCities(lat, lon, 6)) 
        .then((res) => res.json())
        .then((data) => processCities(data, searchedCity))
        .catch(() => setError("Failed to get nearby cities"));
    };

    if (city) {
    
      fetch(api.getCurrentByCity(city))
        .then((res) => res.json())
        .then((data) => {
          if (!data.coord) throw new Error("City coordinates not found");
          fetchNearby(data.coord.lat, data.coord.lon, city);
        })
        .catch(() => setError("Failed to get city coordinates"));
      return;
    }


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchNearby(latitude, longitude, "");
        },
        () => setError("Location access denied")
      );
    } else {
      setError("Geolocation not supported");
    }
  }, [city]);
  if (error) return <div className="tempofcities">{error}</div>;
  if (!cities.length) return <div className="tempofcities">Loading...</div>;
  return (
    <div className="tempofcities">
      <h3>Cities Near</h3>
      <div className="cities">
        <div className="double-city">
          <div className="city">
            <p>{cities[0].name}</p>
            <h2>{cities[0].temp}</h2>

            <p>{cities[0].dec}</p>
          </div>
          <div className="city">
            <p>{cities[1].name}</p>
            <h2>{cities[1].temp}</h2>

            <p>{cities[1].dec}</p>
          </div>
        </div>
        <div className="double-city">
          <div className="city">
            <p>{cities[2].name}</p>
            <h2>{cities[2].temp}</h2>

            <p>{cities[2].dec}</p>
          </div>
          <div className="city">
            <p>{cities[3].name}</p>
            <h2>{cities[3].temp}</h2>

            <p>{cities[3].dec}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tempothercities;
