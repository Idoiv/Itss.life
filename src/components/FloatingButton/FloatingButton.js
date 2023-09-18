import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Verify these paths
import { faFacebookF, faLinkedinIn, faWhatsapp, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './FloatingButton.css';
import 'font-awesome/css/font-awesome.min.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';




const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-button">
      <button onClick={toggleMenu} className={`main-button ${isOpen ? 'open' : ''}`}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <div className="social-icons">
          <a href="https://facebook.com/yourprofile" className="icon facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="icon linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://wa.me/+972544649978" className="icon whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="http://www.tiktok.com/@carver__boy" className="icon tiktok">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.instagram.com/itaydangour/?next=%2F" className="icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
