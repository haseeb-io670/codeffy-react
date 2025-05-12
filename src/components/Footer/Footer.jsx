import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-primary-color-inner py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-silver mb-4">CODEFFY</h3>
            <p className="text-light-grey mb-4">
              Creating innovative software solutions for businesses worldwide.
            </p>
            <SocialIcons 
              size={24} 
              color="var(--secondary-color)" 
              hoverColor="var(--accent-color)" 
              className="footer-social-icons"
            />
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-silver mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-light-grey hover:text-mustard transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-light-grey hover:text-mustard transition-colors">About</Link></li>
              <li><Link to="/services" className="text-light-grey hover:text-mustard transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-light-grey hover:text-mustard transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-light-grey hover:text-mustard transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-silver mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-grey hover:text-mustard transition-colors">Web Development</a></li>
              <li><a href="#" className="text-light-grey hover:text-mustard transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-light-grey hover:text-mustard transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-light-grey hover:text-mustard transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-light-grey hover:text-mustard transition-colors">IT Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-silver mb-4">Contact Us</h3>
            <p className="text-light-grey mb-2">1234 Tech Street</p>
            <p className="text-light-grey mb-2">Silicon Valley, CA 94043</p>
            <p className="text-light-grey mb-2">contact@codeffy.com</p>
            <p className="text-light-grey mb-2">+1 (123) 456-7890</p>
          </div>
        </div>

        <div className="border-t border-dark-grey mt-8 pt-8 text-center text-light-grey">
          <p>&copy; {new Date().getFullYear()} Codeffy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
