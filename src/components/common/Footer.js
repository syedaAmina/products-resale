import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black pt-10 text-white">
      <div className="footer mx-20 ">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Delivery
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            Samsung
          </Link>
          <Link to="/" className="link link-hover">
            Realme
          </Link>
          <Link to="/" className="link link-hover">
            Oppo
          </Link>
          <Link to="/" className="link link-hover">
            Symphony
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="text-center my-10">
        <p>Copyright © 2022 - All right reserved by Car Bazar</p>
      </div>
    </footer>
  );
};

export default Footer;
