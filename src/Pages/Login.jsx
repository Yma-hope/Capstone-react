import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const Login = () => {
  //const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    setEmailError("");
    setPasswordError("");
    setSuccessMessage("");

    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      valid = false;
    }

    if (valid) {
      localStorage.setItem("loggedInUser", email);
      setSuccessMessage("Login successful! Redirecting...");

      //setTimeout(() => {
      //  navigate("/"); // redirect to homepage or index route
      //}, 1500);
    }
  };

  return (
    <div>
      <h2>Login to Lark & Lens</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="passwordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p>{passwordError}</p>}

        {successMessage && <p>{successMessage}</p>}

        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
