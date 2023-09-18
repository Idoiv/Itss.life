import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg';  // Update this path


const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Sign up', link: '/signup' },
  { label: 'About Me', link: '/aboutme' },
  { label: 'Reviews', link: '/reviews' },
  { label: 'FAQ', link: '/faq' },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/">
          <img src="/favicon.ico" alt="Company" className="navbar-logo" />
          </a>
        </div>
        <div className="navbar-center">
          <nav>
            <ul className="navbar-list">
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
            </ul>
          </nav>
        </div>
        <div className="navbar-right"></div>
      </div>
    </div>
  );
};

export default Navbar;
