import React, { useContext } from "react";
import { GiMoonOrbit, GiNightSleep } from "react-icons/gi";
import { ThemeContext } from "../../context/ThemeContext";
import '../../styles/theme.css';

const Themetoogle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='theme' onClick={toggleTheme}>
      <div className={`slider-image ${isDarkTheme ? "slide" : ""}`}>
           {isDarkTheme ? (
            <GiMoonOrbit size={28} color="var(--accent)" />
          ) : (
            <GiNightSleep size={28} color="var(--accent)" />
          )}
      </div>
    </div>
  )
}

export default Themetoogle
