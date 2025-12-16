import React from "react";
import { useEffect, useState, useContext } from "react";
import "../styles/dayforcast.css";
import { api } from "../api";
import { SearchContext } from "../components/SearchContext";
const Dayforcast = () => {
  const [weather, setWeather] = useState(null);
  const { city } = useContext(SearchContext);
  const processWeather = (data) => {
    const today = new Date().toISOString().split("T")[0];

    const todayForecasts = data.list.filter((item) =>
      item.dt_txt.startsWith(today)
    );

    const temps = todayForecasts.map((item) => item.main.temp);
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);

    setWeather({
      temp: data.list[0].main.temp,
      feels_like: data.list[0].main.feels_like,
      min: minTemp,
      max: maxTemp,
      location: data.city.name,
    });
  };
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
        //  if (!city) return;
        fetch(api.getByCoords(latitude, longitude))   
        .then((res) => res.json())
            .then((data) => processWeather(data))
            .catch((err) => console.error(err));
      }, (err) => console.error(err));
    }
  }, [city]);
  if (!weather) return <div className="today">Loading...</div>;

  return (
    <div className="today">
      <div className="headoftheday">
        <div className="weathertoday">
          <h4>Weather</h4>
          <p>today</p>
        </div>
        <div className="place">
          <p>At</p>
          <h4>{weather.location}</h4>
        </div>
      </div>
      <div className="temptoday">
        <h1>{Math.round(weather.temp)}°c</h1>
      </div>
      <div className="footeroftheday">
        <div className="feelliketemp">
          <p>Feels like {Math.round(weather.feels_like)}°c</p>
        </div>
        <div className="highandlow">
          <p>High: {Math.round(weather.max)}°c</p>
          <p>low: {Math.round(weather.min)}°c</p>
        </div>
      </div>
    </div>
  );
};

export default Dayforcast;
