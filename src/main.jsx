import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  HashRouter, 
  Routes, 
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { auth } from "./pages/Firebase";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext"

const Root = () => {
    const [user, setUser] = useState(null);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  }, [isDarkTheme]);
  return (
      <HashRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/app" /> : <Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<App />} />
        {/* Optional: catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer theme={isDarkTheme ? "dark" : "light"} />
    </HashRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);