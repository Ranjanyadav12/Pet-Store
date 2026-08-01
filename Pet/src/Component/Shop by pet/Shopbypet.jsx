import React from "react";
import "./Shopbypet.css";

import dog from "../../assets/dog.png";
import cat from "../../assets/cat.png";
import bird from "../../assets/bird.png";
import fish from "../../assets/fish.png";
import smallPet from "../../assets/smallpet.png";

function ShopByPet() {
  const pets = [
    { name: "Dogs", image: dog },
    { name: "Cats", image: cat },
    { name: "Birds", image: bird },
    { name: "Fish", image: fish },
    { name: "Small Pets", image: smallPet },
  ];

  return (
    <div className="shop-section">
      <div className="shop-header">
        <h2>Shop by Pet</h2>
        <button>View All</button>
      </div>

      <div className="pet-container">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>
            <div className="pet-image">
              <img src={pet.image} alt={pet.name} />
            </div>
            <p>{pet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByPet;