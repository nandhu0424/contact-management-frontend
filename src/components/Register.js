import React, { useState } from "react";
import API from "../api";
import "./Register.css";

export default function Register({ setToken, setShowLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", { username, email, password });
      localStorage.setItem("token", res.data.data.token);
      setToken(res.data.data.token);
      alert("Registration successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleRegister} className="auth-card">
        <h2 className="auth-title">Create your account</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Register
        </button>

        <p className="auth-switch">
          Already have an account?{" "}
          <button
            type="button"
            className="link-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
