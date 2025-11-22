import React from "react";
import '../../styles/compass.css';

export default function Compass({ directionDeg, speed, directionText }) {
  return (
    <div className="wind-compass-container">
      <div className="compass-circle">
        <div
          className="compass-arrow"
          style={{ transform: `translate(-50%, -50%) rotate(${directionDeg}deg)` }}
        ></div>
        <div className="compass-label n">N</div>
        <div className="compass-label s">S</div>
        <div className="compass-label e">E</div>
        <div className="compass-label w">W</div>
      </div>
      <div className="description">
        <p>SouthEast{directionText} </p>
        <p>{speed}9.5 km/h</p>
      </div>
    </div>
  );
}
