import React from 'react'
import '../styles/navbar.css'
import { LuLayoutDashboard } from "react-icons/lu";
import { WiCloud, WiLightning } from "react-icons/wi";
import { GoLocation } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { auth, db } from '../pages/Firebase';
import { useNavigate } from "react-router-dom";

const Navbar = ({onReset, onSelect}) => {
     const navigate = useNavigate();
 async function handleLogout(){
    try {
      await auth.signOut();
      navigate("/Login");
      console.log("user logged out");
      
    } catch (error) {
      console.error("Error logging out:", error.message)
    }
  }
  return (
    <div className="nav-container">
      <div className='nav'>
          <div className="main-elements">
            <button className='the-main-elementbtns' onClick={onReset}><LuLayoutDashboard size={24} color="var(--accent)" />   <span className="nav-label">Default</span> </button>
            <button className='the-main-elementbtns' onClick={() => onSelect("Hourlyforcast")}><WiCloud size={30} color="var(--accent)" />   <span className="nav-label">Daily Forcast</span></button>
            <button className='the-main-elementbtns' onClick={() => onSelect("Weatherdetail")}><WiLightning size={30} color="var(--accent)" />    <span className="nav-label">Highlights</span></button>
            <button className='the-main-elementbtns' onClick={() => onSelect("Tempothercities")}><GoLocation size={24} color="var(--accent)" />    <span className="nav-label">Cities Near</span></button>
          </div>
          <div className='back-to-login'>
              <button className='the-main-elementbtns'><RiLogoutBoxRLine size={24} color="var(--accent)" onClick={handleLogout}/><span className="nav-label">Log Out</span></button>
          </div>
      </div>
      <div className="elements">
            <button className='the-main-elementbtns' onClick={onReset}><span className="nav-label">Default</span> <LuLayoutDashboard size={24} color="var(--accent)" /> </button>
            <button className='the-main-elementbtns' onClick={() => onSelect("Hourlyforcast")}> <span className="nav-label">Daily Forcast</span><WiCloud size={30} color="var(--accent)" /></button>
            <button className='the-main-elementbtns' onClick={() => onSelect("Weatherdetail")}><span className="nav-label">Highlights</span><WiLightning size={30} color="var(--accent)" /></button>
            <button className='the-main-elementbtns' onClick={() => onSelect("Tempothercities")}><span className="nav-label">Cities Near</span><GoLocation size={24} color="var(--accent)" /></button>
              <button className='the-main-elementbtns'><span className="nav-label">Log Out</span><RiLogoutBoxRLine size={24} color="var(--accent)" onClick={handleLogout} /></button>
          </div>
    </div>
  )
}

export default Navbar
