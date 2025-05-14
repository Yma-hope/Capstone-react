import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/home">Lark & Lens</NavLink>
        </div>

        {/* Right side nav & auth */}
        <div className="right-section">
          <button className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/photographers">Photographers</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/login" className="auth-icon" title="Login or Sign Up">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
