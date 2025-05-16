import React from 'react';
import './Contacts.css';

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };

  return (
    <div className="contacts-container">

      {/* Header Section */}
      <header className="contacts-header" style={{ backgroundImage: `url('/assets/Camera.jpg')` }}>
        <div className="header-overlay">
          <h1>Work With Us!</h1>
          <p>Whether you're looking to get booked or become part of the team, you're in the right place!</p>
          <div className="header-buttons">
            <a href="#application" className="btn">Apply as Photographer</a>
            <a href="#booking" className="btn">Book a Session</a>
          </div>
        </div>
      </header>

      {/* Photographer Application Section */}
      <section id="application" className="form-section">
        <h2>Photographer Application</h2>
        <p>We're always looking for amazing talent. Apply to join the Lark & Lens crew!</p>

        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input type="url" name="portfolio" placeholder="Portfolio Link" required />
          <input type="text" name="socials" placeholder="Social Media Handles" />
          <textarea name="experience" placeholder="Experience Summary" required></textarea>
          <select name="niche" required>
            <option value="">Preferred Photography Niche</option>
            <option>Portraits</option>
            <option>Weddings</option>
            <option>Events</option>
            <option>Documentary</option>
            <option>Fashion</option>
            <option>Other</option>
          </select>
          <input type="text" name="location" placeholder="Location" required />
          <input type="text" name="contact" placeholder="Contact Info (Phone/Email)" required />
          <input type="file" name="sample" />
          <button type="submit" className="btn-submit">Submit Application</button>
        </form>
      </section>

      {/* Booking Section */}
      <section id="booking" className="form-section">
        <h2>Book a Session</h2>
        <p>Ready to capture your story? Book a session with one of our trusted photographers.</p>

        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />

          <select required>
            <option value="" disabled selected>Select a photographer</option>
            <option value="emily">Emily Carter – Portraits & Emotions</option>
            <option value="james">James Monroe – Wildlife & Nature</option>
            <option value="olivia">Olivia Chen – Interior Photography</option>
            <option value="daniel">Daniel Rivera – Pet & Animal Photography</option>
            <option value="aisha">Aisha Patel – Event Photography</option>
          </select>

          <select required>
            <option value="">Type of Shoot</option>
            <option>Portrait</option>
            <option>Wedding</option>
            <option>Fashion</option>
            <option>Event</option>
            <option>Other</option>
          </select>

          <div className="date-time-group">
            <input type="date" required />
            <input type="time" required />
          </div>

          <textarea placeholder="Additional Notes" rows="4"></textarea>
          <button type="submit" className="btn-submit">Book Now</button>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
