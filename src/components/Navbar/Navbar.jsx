import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { AnimatePresence, motion } from "framer-motion";
import SocialIcon from '../SocialIcon';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [active]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { name: "twitter", href: "#" },
    { name: "instagram", href: "#" },
    { name: "linkedin", href: "#" },
    { name: "github", href: "#" }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">CODEFFY</span>
            <span className="logo-dot"></span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link to={link.href} className="nav-link">
                  {link.title}
                  <span className="nav-link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="navbar-cta">
            <Link to="/contact" className="btn-primary">
              <span>Get Started</span>
              <FiArrowRight className="btn-icon" />
            </Link>
          </div>

          {/* Mobile Menu Toggle - Only visible on mobile */}
          {isMobile && (
            <div className="mobile-menu-icon" onClick={() => setActive(!active)}>
              <FaBars />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay - Only appears on mobile */}
      {isMobile && (
        <AnimatePresence>
          {active && <MobileMenuOverlay navLinks={navLinks} socialLinks={socialLinks} setActive={setActive} />}
        </AnimatePresence>
      )}
    </>
  );
};

const MobileMenuOverlay = ({ navLinks, socialLinks, setActive }) => {
  return (
    <motion.nav 
      className="mobile-menu-overlay"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mobile-menu-container">
        <div className="mobile-menu-header">
          <Link to="/" className="mobile-logo" onClick={() => setActive(false)}>
            <span className="logo-text-mobile">CODEFFY</span>
          </Link>
          <button className="mobile-close-btn" onClick={() => setActive(false)}>
            &times;
          </button>
        </div>
        
        <div className="mobile-links-container">
          {navLinks.map((link, idx) => (
            <div className="mobile-nav-item" key={idx}>
              <Link 
                to={link.href} 
                className="mobile-nav-link"
                onClick={() => setActive(false)}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mobile-menu-footer">
          <div className="mobile-social-links">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="mobile-social-link">
                <SocialIcon 
                  name={link.name} 
                  size={28} 
                  color="var(--text-color)" 
                  hoverColor="var(--accent-color)" 
                />
              </a>
            ))}
          </div>
          
          <Link to="/contact" className="mobile-cta-button" onClick={() => setActive(false)}>
            <span>Contact Us</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
