import React from "react";
import "./Hero.css";
import pets from "../../assets/hero-img.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Happy Pets ,
          <br />
          Happy Lives
        </h1>

        <p>
          Premium pet supplies for your
          <br />
          furry friends
        </p>

        <button className="hero-btn">Shop Now </button>
      </div>

      <div className="hero-image">
        <img src={pets} alt="Dog and Cat" />
      </div>

      <div className="paw paw1">🐾</div>
      <div className="paw paw2">🐾</div>
      <div className="heart">❤</div>
    </section>
  );
}

export default Hero;