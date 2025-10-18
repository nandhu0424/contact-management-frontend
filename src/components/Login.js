import React, { useState } from "react";
import API from "../api";
import "./Login.css";

export default function Login({ setToken, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.data.token);
      setToken(res.data.data.token);
      alert("Login successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="cs-login">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">
          Login
        </button>
        <p className="switch-text">
          Don’t have an account?{" "}
          <button
            type="button"
            className="register-btn"
            onClick={() => setShowLogin(false)}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}
