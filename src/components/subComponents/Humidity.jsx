// import React from "react";
// import "../../styles/humidity.css";
// import { useEffect, useState } from "react";
// import { api } from "../../api";
// const Humidity = () => {
//   const [humid, setHumid] = useState(null);
//   useEffect(() => {
//     // Simplest: fetch by city
//     fetch(api.getByCity("Enugu"))
//       .then((res) => res.json())
//       .then((data) => {
//         const today = new Date().toISOString().split("T")[0];
//         const todayForecasts = data.list.filter((item) =>
//           item.dt_txt.startsWith(today)
//         );

//         const firstForecast = todayForecasts[0];

//         setHumid({
//           humidity: firstForecast?.main?.humidity ?? 0,
//           feels_like: firstForecast?.main?.feels_like ?? 0,
//           pressure: firstForecast?.main?.pressure ?? 0,
//           pop: firstForecast?.pop ?? 0,
//         });
//       })
//       .catch((err) => console.error("Humidity fetch failed:", err));
//   }, []);

//   if (!humid) return <div className="today">Loading...</div>;
//   return (
//     <div className="humidity">
//       <div className="object">
//         <p>Humidity</p>
//         <p>{humid.humidity}%</p>
//       </div>
//       <div className="object">
//         <p>Feel</p>
//         <p>{Math.round(humid.feels_like)}°c</p>
//       </div>
//       <div className="object">
//         <p>Pressure</p>
//         <p>{humid.pressure}mbar</p>
//       </div>
//       <div className="object">
//         <p>Chance of rain</p>
//         <p>{Math.round(humid.pop * 100)}%</p>
//       </div>
//     </div>
//   );
// };

// export default Humidity;
