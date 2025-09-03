import React from 'react';
import './footer.css';
import logo from '../Assests/logo1.png'; // Replace with your actual logo path
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container py-4">
      <div className="container d-flex flex-column align-items-center">
        {/* Top section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 mb-3">
          <div className="footer-logo mb-2 mb-md-0">
            <img src={logo} alt="Prime1Jobs Logo" height="30" />
          </div>
          <nav className="footer-nav d-flex gap-4">
            <a href="/">Home</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">About</a>
          </nav>
        </div>

        <hr className="w-100 my-3" />

        {/* Bottom section */}
        <div className="footer-bottom w-100">
          <div className="social-icons d-flex gap-3">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
          <span className="text-muted small">syngrid@2025. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
