import React from 'react';

const photographers = [
  {
    name: 'Liam Hart – Aerial Photography',
    description:
      'Specializing in breathtaking aerial imagery, Liam captures the world from bold new perspectives.',
    images: ['Aerial 1.jpg', 'Aerial 2.jpg', 'Aerial 3.jpg'],
  },
  {
    name: 'Adelaide Mireya – Nature & Wildlife',
    description:
      'From majestic landscapes to rare wildlife moments, Joy captures the essence of nature’s beauty.',
    images: ['wildlife 1.jpg', 'Wildlife 2.jpg', 'wildlife 3.jpg'],
  },
  {
    name: 'Claire Bennett – Family Photography',
    description:
      'Claire has a natural talent for capturing the warmth and connection that make family moments truly unforgettable.',
    images: ['Family 1.jpg', 'Family 2.jpg', 'Family 3.jpg'],
  },
  {
    name: 'Jake Turner – Sports Photography',
    description:
      'Jake thrives on adrenaline, freezing fast-paced action with precision and energy. His sports photography captures every defining moment with intensity and clarity.',
    images: ['Sports 1 (2).jpg', 'Sports 2.jpg', 'Sports 3 (2).jpg'],
  },
  {
    name: 'Sophie Ellis – Food Photography',
    description:
      'Sophie brings dishes to life with her eye for color, texture, and mood. Her photography makes you taste the flavor before the first bite.',
    images: ['Food 1.jpg', 'Food 2.jpg', 'Food 3.jpg'],
  },
];

const Gallery = () => {
  return (
    <main>
      {/* Header Section */}
      <header>
        <div>
          <h1>Featured Artists!</h1>
          <p>
            A curated gallery of powerful moments—
            <br />
            captured through the lenses of incredible photographers we admire.
          </p>
          <a href="gallery.html">View Their Work</a>
        </div>
      </header>

      {/* Photographer Sections */}
      <section>
        {photographers.map((photographer, index) => (
          <div key={index}>
            <h2>{photographer.name}</h2>
            <p>{photographer.description}</p>
            <div>
              {photographer.images.map((image, i) => (
                <img
                  key={i}
                  src={`assets/${image}`}
                  alt={`${photographer.name.split('–')[0]}'s Work`}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gallery;
