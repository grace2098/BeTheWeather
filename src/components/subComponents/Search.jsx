import React from 'react';
import '../../styles/search.css';
import { useContext, useState } from "react";
import { SearchContext } from "../SearchContext";


const Search = () => {
   const { setCity } = useContext(SearchContext);
  const [input, setInput] =  useState("");

  const handleSearch = () => {
    if (input.trim()) setCity(input.trim());
  };
  return (
    <div className='search-bar'>
        <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Enter city name"/>
        <button onClick={handleSearch} className='serachbtn'>Search</button>
      
    </div>
  )
}

export default Search


