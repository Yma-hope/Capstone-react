import React, { useEffect } from 'react';
import './Home.css'

const Home = () => {
  useEffect(() => {
    const bookingBtn = document.getElementById("go-to-booking");
    if (bookingBtn) {
      bookingBtn.addEventListener("click", function () {
        console.log("Redirecting to booking form...");
      });
    }

    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  }, []);

  return (
    <>
      <header>
        {/* <img src="src\assets\Images\Camera.jpg" alt="Camera" /> */}
        <div>
          <h1>Welcome to Lark & Lens!</h1>
          <p>
            At Lark & Lens, we capture more than just moments—we capture stories,
            emotions, and the magic in the everyday. Like a lark in flight, our
            photography is light, free, and full of life. Whether it's a fleeting
            glance or an unforgettable adventure, we turn memories into timeless art.
            Let’s create something beautiful together.
          </p>
          <a href="signup.html">Sign Up</a>
        </div>
      </header>

      <main>
        <section id="services">
          <h2>Work Done</h2>
          <div>
            <div>
              <img src="src\assets\Images\Pet photography.jpg" alt="pets" />
              <div>
                <h3>Pet Photography</h3>
              </div>
            </div>
            <div>
              <img src="src\assets\Images\Wedding.jpg" alt="wedding" />
              <div>
                <h3>Wedding</h3>
              </div>
            </div>
            <div>
              <img src="src\assets\Images\Portrait.jpg" alt="portrait" />
              <div>
                <h3>Portraits</h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Absolutely amazing! The team at Lark & Lens captured every detail of
              our wedding perfectly."
            </p>
            <div className="stars">
              ★★★★☆
            </div>
            <div className="client-info">
              <p>— Sarah & James</p>
              <p>Wedding, Nairobi</p>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              "Very professional, punctual, and creative. My fashion shoot came out
              looking like a Vogue spread."
            </p>
            <div className="stars"> 
              ★★★★★
            </div>
            <div className="client-info">
              <p>— Amina M.</p>
              <p>Fashion, Mombasa</p>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              "As a pet lover, I was blown away by how they handled my dog—super
              gentle, and the photos are stunning!"
            </p>
            <div className="stars">
              ★★★½☆
            </div>
            <div className="client-info">
              <p>— Kevin O.</p>
              <p>Pet Photography, Nairobi</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
