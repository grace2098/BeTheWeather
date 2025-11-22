import React from "react";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Dayforcast from "./components/Dayforcast.jsx";
import Hourlyforcast from "./components/Hourlyforcast.jsx";
import Weatherdetail from "./components/Weatherdetail.jsx";
import Tempothercities from "./components/Tempothercities.jsx";
import "./App.css";
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
      case "Dayforcast": return <Dayforcast />;
      case "Hourlyforcast": return <Hourlyforcast />;
      case "Weatherdetail": return <Weatherdetail />;
      case "Tempothercities": return <Tempothercities />;
      default: return null;
    }
  };
    const swapToMain = (cardName) => {
    if (layout.main === cardName) return;

    const oldSpot = Object.keys(layout).find(
      (k) => layout[k] === cardName
    );

    setFade(true);
    setTimeout(() => {
      setLayout((prev) => ({
        ...prev,
        main: cardName,        // move selected card to main
        [oldSpot]: prev.main,  // move old main card to its place
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
    <div className="container">
      <div className="main">
        <div className="positon-nav">
           <Navbar onSelect={swapToMain} onReset={resetToDefault} />
        </div>
        <div className="main-section">
          <Header />
          <div className="main-main-section">
            <div>
              <div className={`fade ${fade ? "fade-out" : "fade-in"}`}>
                {renderCard(layout.main)}
              </div>

              {renderCard(layout.slot1)}
            </div>
            <div className="main-main-main-section">
              {renderCard(layout.slot2)}
              {renderCard(layout.slot3)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
