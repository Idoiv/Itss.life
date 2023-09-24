import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Sign up', link: '/signup' },
  { label: 'About Me', link: '/aboutme' },
  { label: 'Reviews', link: '/reviews' },
  { label: 'FAQ', link: '/faq' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/">
            <img src="/favicon.ico" alt="Company" className="navbar-logo" />
          </a>
        </div>
        <div className="navbar-center">
          <nav className={isMenuOpen ? "navbar-list active" : "navbar-list"}>
            {navItems.map((item, index) => (
              <li key={index} className="navbar-item">
                <a
                  href={item.link}
                  target={item.external ? '_blank' : '_self'}
                  className="navbar-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </nav>
        </div>
        <div className="navbar-right">
          <button className="menu-icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
