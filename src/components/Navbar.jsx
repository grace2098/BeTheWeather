import React from 'react'
import '../styles/navbar.css'
import { LuLayoutDashboard } from "react-icons/lu";
import { WiCloud, WiLightning } from "react-icons/wi";
import { GoLocation } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Navbar = ({onReset, onSelect}) => {
  return (
    <div className='nav'>
        <div className="main-elements">
          <button onClick={onReset}><LuLayoutDashboard size={28} color="var(--accent)" /> </button>
          <button onClick={() => onSelect("Hourlyforcast")}><WiCloud size={28} color="var(--accent)" /></button>
          <button onClick={() => onSelect("Weatherdetail")}><WiLightning size={28} color="var(--accent)" /></button>
          <button onClick={() => onSelect("Tempothercities")}><GoLocation size={28} color="var(--accent)" /></button>
        </div>
        <div className='back-to-login'>
            <button><RiLogoutBoxRLine size={28} color="var(--accent)" /></button>
        </div>
    </div>
  )
}

export default Navbar
