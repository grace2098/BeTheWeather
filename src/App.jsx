import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SearchContext, SearchProvider } from "./components/SearchContext.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Dayforcast from "./components/Dayforcast.jsx";
import Hourlyforcast from "./components/Hourlyforcast.jsx";
import Weatherdetail from "./components/Weatherdetail.jsx";
import Tempothercities from "./components/Tempothercities.jsx";
import '../src/styles/App.css'
const api = {
  key: "a708ddc30316af0d0af72a550772595e",
  base: "http://api.openweathermap.org/data/2.5/forecast",
}
const App = () => {
  const defaultLayout = {
     main: "Dayforcast",
     slot1: "Hourlyforcast",
     slot2: "Weatherdetail",
     slot3: "Tempothercities",
   };

   const [layout, setLayout] = useState(defaultLayout);
   const [fade, setFade] = useState(false);
   const renderCard = (name) => {
     switch (name) {
       case "Dayforcast":
         return <Dayforcast />;
       case "Hourlyforcast":
         return <Hourlyforcast />;
       case "Weatherdetail":
         return <Weatherdetail />;
       case "Tempothercities":
         return <Tempothercities />;
       default:
         return null;
     }
   };
   const swapToMain = (cardName) => {
     if (layout.main === cardName) return;
 
     const oldSpot = Object.keys(layout).find((k) => layout[k] === cardName);
 
     setFade(true);
     setTimeout(() => {
       setLayout((prev) => ({
         ...prev,
         main: cardName,
         [oldSpot]: prev.main,
       }));
       setFade(false);
     }, 300);
   };
 
   const resetToDefault = () => {
     setFade(true);
     setTimeout(() => {
       setLayout(defaultLayout);
       setFade(false);
     }, 300);
   };
   
 
   return (
     <SearchProvider>
     <div className="container">
       <div className="main">
         <div className="positon-nav">
           <Navbar onSelect={swapToMain} onReset={resetToDefault} />
         </div>
         <div className="main-section">
           <Header />
           <div className="main-main-section">
             <div className="layout">
               <motion.div layout transition={{ type: "spring", duration: 0.5 }}>
                 <div className={`fade ${fade ? "fade-out" : "fade-in"}`}>
                   {renderCard(layout.main)}
                 </div>
               </motion.div>
               <motion.div layout transition={{ type: "spring", duration: 0.5 }}>
                 {renderCard(layout.slot1)}
               </motion.div>
             </div>
             
             <div className="layout2">
               <motion.div layout transition={{ type: "spring", duration: 0.5 }}>
                 {renderCard(layout.slot2)}
               </motion.div>
               <motion.div layout transition={{ type: "spring", duration: 0.5 }}>
                 {renderCard(layout.slot3)}
               </motion.div>
             </div>
           </div>
         </div>
       </div>
     </div>
     </SearchProvider>
   );
 };


export default App
