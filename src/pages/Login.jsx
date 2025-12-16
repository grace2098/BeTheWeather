import React, { useState } from "react";
import "../styles/login.css";
import Themetoogle from "../components/subComponents/Themetoogle";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
   const navigate = useNavigate();
 const handleSubmit =async (e)=>{
 e.preventDefault();
   setErrors({});
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }
 try {
      const userCredential = await signInWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        console.log("logged in");
        navigate("/App")
        toast.success("Log-in successful 🎉"),{
            style: { background: "var(--bg)", color: "var(--text)" },
        }
        
 } catch (error) {
   console.log(error.message);
        toast.error(error.message),{
            style: { background: "var(--bg)", color: "var(--text)" },
        }
 }
 }
  return (
    <div className="auth-container">
      <div className="auth-session">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h1>Welcome Back ☀️</h1>

          <div className="input-group">
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
          </div>
          <button
            className="btn-primary"
           type="submit"
          >
            Login
          </button>
          <p className="switch">
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </p>
        </form>
      </div>
      <div className="themechanger">
        <Themetoogle />
      </div>
    </div>
  );
};

export default Login;
