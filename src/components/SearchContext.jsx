import { createContext, useState } from "react";

// Create the context
export const SearchContext = createContext();

// Provider component
export const SearchProvider = ({ children }) => {
  const [city, setCity] = useState("");

  return (
    <SearchContext.Provider value={{ city, setCity }}>
      {children}
    </SearchContext.Provider>
  );
};