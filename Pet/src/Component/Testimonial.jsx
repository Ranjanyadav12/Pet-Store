import React from "react";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  const reviews = [
    {
      name: "Ritika Sharma",
      image: "https://i.pravatar.cc/50?img=32",
      text: "PetCare has everything I need for my dog. Fast delivery and great quality products!",
    },
    {
      name: "Amit Verma",
      image: "https://i.pravatar.cc/50?img=15",
      text: "Love the wide range of products and amazing customer support. Highly recommended!",
    },
    {
      name: "Neha Patel",
      image: "https://i.pravatar.cc/50?img=47",
      text: "Best place for pet supplies! My cat loves the toys and food.",
    },
  ];

  return (
    <section className="testimonial">
      <h2>Trusted by Pet Parents</h2>

      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="user-info">
              <img src={review.image} alt={review.name} />

              <div>
                <h4>{review.name}</h4>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;