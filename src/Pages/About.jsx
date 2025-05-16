import React from 'react';
import './About.css'

const AboutPage = () => {
  return (
    <div className="about-page">

      <header className='about-header'>
        {/* <img src="src\assets\Camera.jpg" alt="Camera" /> */}
        <div className='about-text'>
          <h1>About Lark & Lens!</h1>

            <p>
              Lark & Lens is a photography collective passionate about capturing authentic, meaningful moments. 
              Blending artistic vision with real emotion, we create timeless images that tell your story — 
              naturally and beautifully.
              </p>
        </div>
      </header>
      
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
              <img src="src\assets\Lilo.Portrait.jpg" alt="Founder 1" />
              <h4>Lilian Mwangi</h4>
              <p>Visual Storyteller</p>
            </div>
            <div>
              <img src="src\assets\Snapchat-1163590807.jpg" alt="Founder 2" />
              <h4>Yma Hope</h4>
              <p>Creative Director</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
