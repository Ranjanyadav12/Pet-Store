import React from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import "./Nav.css";


function Nav() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="paw">🐾</span>
        <h2>PetCare</h2>
      </div>

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
        />

        <select>
          <option>All Categories</option>
          <option>Dog</option>
          <option>Cat</option>
          <option>Bird</option>
          <option>Fish</option>
        </select>

        <button>
          <FaSearch />
        </button>
      </div>

      {/* Right Side */}
      <div className="nav-right">
        <div className="login">
          <FaUser />
          <span>Login / Register</span>
        </div>

        <FaHeart className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </header>
  );
};

export default Nav;