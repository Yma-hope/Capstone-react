import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav>
      <div>
        <h1>Lark & Lens</h1>
        <button onClick={toggleMenu}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <ul style={{ display: menuOpen ? 'block' : 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/photographers">Photographers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
