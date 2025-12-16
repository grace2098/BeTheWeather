import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "../subComponents/Customtooltip";
import { api } from "../../api";
import { SearchContext } from '../SearchContext'
// const data = [
//    {hour: '1am', temp: 22 },
//    {hour: '2am', temp: 23 },
//    {hour: '3am', temp: 24 },
//    {hour: '4am', temp: 25 },
//    {hour: '5am', temp: 26 },
// ]

const Hourforcastlinechart = () => {
  const [hourly, setHourly] = useState(null);
  const { city } = useContext(SearchContext);
  const processWeather = (data) => {
    const sliced = data.list.splice(0, 8);
            const formatted = sliced.map((item) => ({
              hour: item.dt_txt.split(" ")[1].slice(0, 5),
              temp: Math.round(item.main.temp),
              feels_like: Math.round(item.main.feels_like),
              pop: item.pop ?? 0,
            }));
            setHourly(formatted);
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

  if (!hourly) return <p>Loading chart...</p>;
  return (
    <ResponsiveContainer width="400" height={100}>
      <LineChart data={hourly}>
        <XAxis
          dataKey="hour"
          stroke="var(--accent)"
          tick={{ fill: "var(--text)", fontSize: 12 }}
        />
        <YAxis
          stroke="var(--accent)"
          tick={{ fill: "var(--text)", fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="temp" stroke="var(--accent)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Hourforcastlinechart;
