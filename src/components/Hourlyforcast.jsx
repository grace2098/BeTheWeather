import React from "react";
import Weathercylinder from "./subComponents/Weathercylinder";
import { FiHome, FiCloud, FiLogOut } from "react-icons/fi";
import { useState, useEffect, useContext } from "react";
import "../styles/hourly.css";
import { api } from "../api";
import { SearchContext } from "../components/SearchContext";
const Hourlyforcast = () => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [tomorrow, setTomorrow] = useState(null);
  const { city } = useContext(SearchContext);
  const processWeather = (data) => {
    console.log("Weather data:", data);
    console.log(data.city.name);
      const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) return "th"; 
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
    const daily = data.list
      .filter((item, index) => index % 8 === 0)
      .slice(0, 7)
      .map((item) => {
      const dateObj = new Date(item.dt_txt);
      const dayOfMonth = dateObj.getDate();
      return {
        date: `${dayOfMonth}${getDaySuffix(dayOfMonth)}`, 
        temp: `${Math.round(item.main.temp)}°c`,
        desc: item.weather[0].description,
        Icon: FiCloud,
      };
    });
    setForecast(daily);
    setTomorrow(daily[1]);
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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(api.getByCoords(latitude, longitude))
            .then((res) => res.json())
            .then((data) => processWeather(data))
            .catch((err) => {
              console.error("❌ Failed to get weather data:", err);
              setError("Failed to get weather data");
            });
        },
        (err) => {
          console.error("❌ Geolocation error:", err);
          setError("Failed to get your location");
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setError("Geolocation not supported");
    }
  }, [city]);
  if (error) return <p className="error">{error}</p>;
  if (!forecast.length) return <p>Loading forecast...</p>;
  return (
    <div className="hour">
      <div className="todays">
        <h3> This Week</h3>
      </div>
      <div className="weathercylinder">
        {forecast.map((f, idx) => (
          <Weathercylinder
            key={idx}
            date={f.date}
            Icon={f.Icon}
            temp={f.temp}
          />
        ))}
      </div>

      <div className="tomorrow">
        <div>
          <h4>Tomorrow</h4>
          <p>{tomorrow.desc}</p>
        </div>
        <div>
          <h2>{tomorrow.temp}</h2>
        </div>
        <div>
          <tomorrow.Icon size={28} color="var(--bg)" />
        </div>
      </div>
    </div>
  );
};

export default Hourlyforcast;
