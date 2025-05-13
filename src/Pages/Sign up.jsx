import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const Signup = () => {
  //const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setSuccessMessage("");

    let valid = true;

    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }

    if (valid) {
      // Store credentials locally for demo purposes only (not secure for production!)
      const newUser = {
        email,
        password,
      };

      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      setSuccessMessage("Signup successful! Redirecting...");

      //setTimeout(() => {
      //  navigate("/login");
      //}, 1500);
    }
  };

  return (
    <div>
      <h2>Create Your Lark & Lens Account</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="EmailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="PasswordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p>{passwordError}</p>}

        {successMessage && <p>{successMessage}</p>}

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
