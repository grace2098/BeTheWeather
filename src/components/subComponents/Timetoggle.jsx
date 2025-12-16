import React from "react";
import "../../styles/time.css";
import { useState, useEffect } from "react";
import { LuSunMedium, LuMoonStar } from "react-icons/lu";
import { toast } from "react-toastify";
import { auth, db } from "../../pages/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { p } from "framer-motion/client";
const Timetoggle = () => {
  const [greeting, setGreeting] = useState("");
  const [isNight, setIsNight] = useState(false);
  const [name, setName] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User not found");
        }
      } else {
        console.log("User not logged in");
      }
    });
  };

  useEffect(() => {
    const theTime = () => {
      const hour = new Date().getHours();
      if (hour >= 3 && hour <= 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour <= 17) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
      setIsNight(hour >= 18 || hour < 6);
    };
    theTime();
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) setName(savedName);
  }, []);
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="daynight">
      {userDetails ? (
        <>
          {greeting} <p>{userDetails.fullName}</p>
          {isNight ? (
            <LuMoonStar size={30} color="var(--accent)" />
          ) : (
            <LuSunMedium size={30} color="var(--accent)" />
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Timetoggle;
