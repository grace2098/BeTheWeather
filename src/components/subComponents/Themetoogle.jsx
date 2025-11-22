import React, { useState, useEffect } from "react";
import { GiMoonOrbit, GiNightSleep } from "react-icons/gi";

import '../../styles/theme.css'
const Themetoogle = () => {
    const [isDark, setIsDark]= useState(false);

    const handleClick = () => {
    setIsDark(!isDark);
  };
      useEffect(() => {
      if (isDark) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    }, [isDark]);

  return (
    <div className='theme' onClick={handleClick}>
      <div className={`slider-image ${isDark ? "slide" : ""}`}>
           {isDark ? (
            <GiMoonOrbit size={28} color="var(--accent)" />
          ) : (
            <GiNightSleep size={28} color="var(--accent)" />
          )}
      </div>
    </div>
  )
}

export default Themetoogle
