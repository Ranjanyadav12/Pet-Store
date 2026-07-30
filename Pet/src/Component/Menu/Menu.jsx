import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li className="active">Home</li>
        <li>Shop</li>
        <li>Categories</li>
        <li>Brands</li>
        <li>Offers</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Menu;