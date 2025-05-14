import React from 'react';
import './About.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Main Content */}
      <main>
        <section>
          <h2>Our Story</h2>
          <p>
            Lark & Lens was born from a shared love for capturing life’s most fleeting and meaningful moments.
            We’re a creative photography duo who believe that behind every image lies a story waiting to be told.
          </p>
          <p>
            From candid street scenes to intimate portraits, our lens seeks to highlight beauty in the ordinary.
            With backgrounds in visual arts and storytelling, we bring a unique perspective to each frame.
          </p>
        </section>

        <section>
          <h3>Our Mission</h3>
          <p>
            We believe in the power of photography to <strong><i>evoke emotion, capture authenticity, and preserve history</i></strong>.
            Whether it’s a wedding, a documentary, or an everyday moment, our goal is to deliver images that resonate deeply.
          </p>
        </section>

        <section>
          <h3>Meet the Founders</h3>
          <div>
            <div>
              <img src="/images/founder1.jpg" alt="Founder 1" />
              <h4>Avery Lark</h4>
              <p>Visual Storyteller</p>
            </div>
            <div>
              <img src="/images/founder2.jpg" alt="Founder 2" />
              <h4>Riley Lens</h4>
              <p>Creative Director</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
