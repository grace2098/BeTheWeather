import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
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
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      // setLoading(false);
    });
    return () => unsubscribe();
  }, []);
useEffect(() => {
  document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
}, [isDarkTheme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/app" /> : <Signup />,
    },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "app", element: <App /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
      theme={isDarkTheme ? "dark" : "light"}/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>
);