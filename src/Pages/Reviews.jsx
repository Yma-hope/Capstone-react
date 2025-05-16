import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const reviewData = [
    {
      text: `"I had never done a professional photoshoot before, but the team made me feel so comfortable. The portraits turned out beautifully!"`,
      author: 'Brenda K.',
      category: 'Portrait, Kisumu',
      rating: 4,
    },
    {
      text: `"They really listened to what I wanted for my brand photos. The shots were crisp, clean, and totally on-brand."`,
      author: 'Martin G.',
      category: 'Branding, Nairobi',
      rating: 5,
    },
    {
      text: `"Our newborn shoot was magical. The photographer was patient and so good with the baby. Photos are just priceless."`,
      author: 'Lillian & Peter',
      category: 'Newborn, Nakuru',
      rating: 5,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Review:', reviewText);
    console.log('Rating:', selectedRating);
    // Handle review submission (e.g., API call or local state update)
  };

  return (
    <div className='reviews-container'>
      <header>
        <h1>Client Reviews!</h1>
        <p>
          Whether you're looking to get booked or become part of the team,
          you're in the right place!
        </p>
      </header>

      <section>
        {reviewData.map((review, index) => (
          <div className="review-card"  key={index}>
            <p><i>{review.text}</i></p>
            <p><strong>— {review.author}</strong></p>
            <p>{review.category}</p>
            <div className='review-stars'>
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </section>

      <section className='review-form'>
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="review-text">Your Review</label>
          <textarea
            id="review-text"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows="4"
            placeholder="Write your review here..."
          ></textarea>

          <label>Your Rating</label>
          <div className='star-rating'>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setSelectedRating(star)}
                onMouseOver={() => setHoverRating(star)}
                onMouseOut={() => setHoverRating(0)}
                style={{
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: star <= (hoverRating || selectedRating) ? '#facc15' : '#d1d5db',
                }}
              >
                ★
              </span>
            ))}
          </div>

          <button type="submit">Submit Review</button>
        </form>
      </section>
    </div>
  );
};

export default Reviews;
