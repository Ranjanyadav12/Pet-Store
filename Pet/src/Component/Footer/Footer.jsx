import React from "react";
import "./Footer.css";

import {
  FaTruck,
  FaUndoAlt,
  FaLock,
  FaHeadset,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="feature">
          <FaTruck className="icon" />
          <div>
            <h4>Free Shipping</h4>
            <p>On orders above ₹499</p>
          </div>
        </div>

        <div className="feature">
          <FaUndoAlt className="icon" />
          <div>
            <h4>30 Day Return</h4>
            <p>Easy return policy</p>
          </div>
        </div>

        <div className="feature">
          <FaLock className="icon" />
          <div>
            <h4>Secure Payments</h4>
            <p>100% safe & secure</p>
          </div>
        </div>

        <div className="feature">
          <FaHeadset className="icon" />
          <div>
            <h4>24x7 Support</h4>
            <p>We are here to help</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2034 PetCare. All rights reserved.</p>

        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>

    </footer>
  );
}

export default Footer;