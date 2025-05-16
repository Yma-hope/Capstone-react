import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim() === '') newErrors.name = 'Name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email address.';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert('Signup successful!');
        window.location.href = '/login'; // Update path if needed
      } catch  {
        setErrors({ email: "Email already in use or invalid." });
      }
    }
  };

  return (
    <div style={{
      backgroundImage: 'url(assets/Camera.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '2rem',
        borderRadius: '1rem',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase', textDecoration: 'underline' }}>
          Sign Up for Lark & Lens
        </h2>

        <form onSubmit={handleSubmit} noValidate style={{ marginTop: '2rem' }}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.25rem' }}
              required
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.25rem' }}
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.25rem' }}
              required
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.25rem' }}
              required
            />
            {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            marginTop: '1rem',
            cursor: 'pointer'
          }}>
            Sign Up
          </button>

          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Already have an account? <a href="login.html" style={{ textDecoration: 'underline', color: '#333' }}>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
