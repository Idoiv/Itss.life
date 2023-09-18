// Introduction.js

import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="intro-container" style={{ backgroundImage: "url('/venicesunset.jpg')",  backgroundSize: '100%'  }}>
      <div className="intro-content">
        <div className="intro-text">
          <h1>About Me</h1>
          <p>
            I am a professional surfskate teacher with over 10 years of experience.
            I've trained hundreds of students in the art of surfskating.
            Whether you're looking to improve your carving, pumping, or complex tricks,
            I offer a comprehensive curriculum to help you excel.
          </p>
        </div>
        <div className="intro-image">
          <img src="/me.jpeg" alt="Surfskate Teacher" className="img-fluid rounded-circle" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
