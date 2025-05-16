import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };


  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/home">Lark & Lens</NavLink>
        </div>

        {/* Right section */}
        <div className="right-section">
          <button className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/photographers">Photographers</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>

            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropdown-button" title="Account">
                <FontAwesomeIcon icon={faUser} />
              </button> 
              <button onClick={handleLogout} className='logout-btn' title='Logout'>Logout</button>

              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/login" onClick={() => setDropdownOpen(false)}>Login</Link>
                  <Link to="/signup" onClick={() => setDropdownOpen(false)}>Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
