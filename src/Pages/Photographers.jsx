import React, { useState } from 'react';

const photographersData = [
  {
    id: 1,
    name: "Emma Woodhouse",
    niche: "wedding",
    location: "nairobi",
    image: "src/assets/Photographer 1.jpg",
    title: "Wedding & Event Specialist",
    bio: "Her timeless style and attention to detail sets her apart.",
    instagram: "https://instagram.com/zurilens",
    portfolio: "https://zuriphotography.com"
  },
  {
    id: 2,
    name: "Tony Baker",
    niche: "product",
    location: "nairobi",
    image: "src/assets/Photographer 3.jpg",
    title: "Product Specialist",
    bio: "His eye for composition and focus on detail bring every product to life.",
    instagram: "https://instagram.com/zurilens",
    portfolio: "https://zuriphotography.com"
  },
  {
    id: 3,
    name: "Hailey James",
    niche: "fashion",
    location: "nairobi",
    image: "src/assets/Photographer 2.jpg",
    title: "Fashion Specialist",
    bio: "Her creative vision and flair for style turn every frame into a statement.",
    instagram: "https://instagram.com/zurilens",
    portfolio: "https://zuriphotography.com"
  },
  {
    id: 4,
    name: "Matthew Perry",
    niche: "sports",
    location: "nairobi",
    image: "src/assets/Photographer 5.jpg",
    title: "Sports Specialist",
    bio: "His dynamic shots capture the energy, motion, and intensity of every game",
    instagram: "https://instagram.com/zurilens",
    portfolio: "https://zuriphotography.com"
  },
  {
    id: 5,
    name: "Olivia Munn",
    niche: "newborn",
    location: "nairobi",
    image: "src/assets/Photographer 4.jpg",
    title: "Newborn Specialist",
    bio: "Her gentle touch and warm presence create timeless portraits of life’s earliest moments.",
    instagram: "https://instagram.com/zurilens",
    portfolio: "https://zuriphotography.com"
  },
  {
    id: 6,
    name: "Greg House",
    niche: "pet",
    location: "nairobi",
    image: "src/assets/Photographer 6.jpg",
    title: "Pet Photography Specialist",
    bio: "Her timeless style and attention to detail sets her apart.",
    instagram: "https://instagram.com/zurilens",
    portfolio: "https://zuriphotography.com"
  }
];

const Photographers = () => {
  const [nicheFilter, setNicheFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const filteredPhotographers = photographersData.filter(p => {
    return (
      (nicheFilter === "all" || p.niche === nicheFilter) &&
      (locationFilter === "all" || p.location === locationFilter)
    );
  });

  return (
    <main>
      {/* Hero Section */}
      <header>
        <div>
          <h1>Featured Photographers</h1>
          <p>Discover talent we trust and recommend.</p>
          <a href="photographers.html">Our Team</a>
        </div>
      </header>

      {/* Filter Section */}
      <section>
        <h2>Filter Photographers</h2>
        <div>
          <select value={nicheFilter} onChange={e => setNicheFilter(e.target.value)}>
            <option value="all">All Niches</option>
            <option value="wedding">Wedding</option>
            <option value="portrait">Portrait</option>
            <option value="sports">Sports</option>
            <option value="product">Products</option>
            <option value="fashion">Fashion</option>
            <option value="newborn">Newborn</option>
            <option value="pet">Pet</option>
          </select>

          <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
            <option value="all">All Locations</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
            <option value="kisumu">Kisumu</option>
          </select>
        </div>
      </section>

      {/* Photographer Cards */}
      <section>
        {filteredPhotographers.map(p => (
          <div key={p.id}>
            <img src={p.image} alt={p.name} />
            <div>
              <h3>{p.name}</h3>
              <p>{p.title}</p>
              <p>{p.bio}</p>
              <a href={p.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <span> | </span>
              <a href={p.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
            </div>
          </div>
        ))}
      </section>

      {/* Join Section */}
      <section>
        <a href="contacts.html#application">Join Our Photographer Team</a>
      </section>
    </main>
  );
};

export default Photographers;
