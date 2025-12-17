import React from "react";
import { useState } from "react";

import "../styles/signup.css";
import Themetoogle from "../components/subComponents/Themetoogle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let tempErrors = {};
    if (!form.fullname) tempErrors.fullname = "Full Name is required";
    if (!form.email) tempErrors.email = "Email is required";
    if (!form.password) tempErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;
      await setDoc(doc(db, "Users", user.uid), {
        email: form.email,
        fullName: form.fullname,
      });

      toast.success("Signup successful "),
        {
          style: { background: "var(--bg)", color: "var(--text)" },
        };
      navigate("/App");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-session">
        <form className="auth-card" onSubmit={handleSignUp}>
          <h1>BeTheWeather ☀️</h1>
          <p className="tag">
            Why check the weather… when you can BeTheWeather?
          </p>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Joe Doe"
              value={form.fullname}
              onChange={(e) => setForm({ ...form, fullname: e.target.value })}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
            <label>Email</label>
            <input
              type="email"
              placeholder="you@mail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <label>Password</label>
            <input
              type="password"
              placeholder="•••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="•••••••"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <button className="btn-primary" type="submit">
            Sign Up
          </button>
          <p className="switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <div className="themechangers">
        <Themetoogle />
      </div>
    </div>
  );
};

export default Signup;
