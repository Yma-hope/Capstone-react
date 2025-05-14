import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Lark & Lens</h2>
          <p>Capturing light. Creating legacy.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/photographers">Photographers</a>
          <a href="/gallery">Gallery</a>
          <a href="/reviews">Reviews</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lark & Lens. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
