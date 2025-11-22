import React from 'react'
import '../../styles/time.css'
import { useState, useEffect } from 'react';
import { LuSunMedium, LuMoonStar } from "react-icons/lu";
const Timetoggle = () => {
  const [greeting, setGreeting] = useState('');
  const [isNight, setIsNight] =useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const theTime = () => {
      const hour = new Date().getHours();
      if (hour >=3 && hour <= 12){
        setGreeting('Good Morning')
      } else if(hour >=12 && hour <= 17){
        setGreeting('Good Afternoon')
      } else{ setGreeting('Good Evening')}
      setIsNight(hour >= 18 || hour < 6);
    };
    theTime();
  }, []);

    useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setName(savedName);
  }, []);

  return (
    <div className='daynight'>
       {greeting} <p>{name || "Grace"}</p>
       {isNight ? (
       <LuMoonStar size={30} color="var(--accent)" />
       ):(
       <LuSunMedium size={30} color='var(--accent)' />
       )}
    </div>
  );
};

export default Timetoggle
