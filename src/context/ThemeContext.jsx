import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => JSON.parse(localStorage.getItem("isDarkTheme")) || false
  );

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark" : "light";
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
