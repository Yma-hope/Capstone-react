import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Adjust this path as needed
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setSuccessMessage("");

    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setPasswordError("Password is required.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Login successful! Redirecting...");
      localStorage.setItem("loggedInUser", email);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch {
      setPasswordError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">Login to Lark & Lens</h2>

      <form onSubmit={handleSubmit} noValidate className="login-form">
        <label htmlFor="email" className="login-label">Email:</label>
        <input
          type="email"
          id="email"
          className="login-input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p>{emailError}</p>}

        <label htmlFor="password" className="login-label">Password:</label>
        <input
          type="password"
          id="password"
          className="login-input"
          placeholder="......"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p>{passwordError}</p>}

        {successMessage && <p>{successMessage}</p>}

        <button type="submit" className="login-button">Login</button>

        <p>
          Don't have an account?{" "}
          <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
