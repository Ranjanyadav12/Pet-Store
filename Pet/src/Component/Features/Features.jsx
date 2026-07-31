import React from "react";
import "./Features.css";
import {
  FaShippingFast,
  FaUndoAlt,
  FaLock,
  FaGift,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      subtitle: "On orders above ₹999",
    },
    {
      icon: <FaUndoAlt />,
      title: "30 Days Return",
      subtitle: "Easy return policy",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      subtitle: "100% secure payments",
    },
    {
      icon: <FaGift />,
      title: "Best Quality",
      subtitle: "Trusted by pet lovers",
    },
  ];

  return (
    <section className="features">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>

          <div className="feature-text">
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Features;