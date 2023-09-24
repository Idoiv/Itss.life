import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const navItems = [
  { label: 'home_title', link: '/' },
  { label: 'signup', link: '/signup' },  // You can replace this with a translation key
  { label: 'about_me_title', link: '/aboutme' },
  { label: 'reviews', link: '/reviews' },  // You can replace this with a translation key
  { label: 'faq_title', link: '/faq' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();  // Initialize the hook
  
  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
  
    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', newLang);
  };


  useEffect(() => {
    // Get the selected language from localStorage
    const savedLang = localStorage.getItem('selectedLanguage');

    // If there is a saved language, use it
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);  // This effect will run only once

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
                  {t(item.label)}
                </a>
              </li>
            ))}
          </nav>
        </div>
        <div className="navbar-right">
          <button className="menu-icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </button>
          <span className="language-label">{i18n.language.toUpperCase()}</span>
          <label className="language-toggle">
            <input type="checkbox" checked={i18n.language === 'he'} onChange={changeLanguage} />
            <span className="language-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
