import React, { useState, useEffect } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);  // State for loading page

  useEffect(() => {
    // Simulate the loading time of your app
    setTimeout(() => {
      setIsLoading(false);  // Hide loading page after 3 seconds
    }, 3000);
  }, []);
  
  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="main-page">
      <div className="skate-surfing-section">
        <h1>Experience the Thrill of Skate-Surfing!</h1>
        <p>
          Imagine the wind rushing past you as you carve your way through the streets. 
          Feel the adrenaline pumping as you perform tricks you've only dreamed of. 
          That's the magic of skate-surfing, and we want you to experience it.
        </p>
        <button onClick={() => {navigate('/signup')}}>
          Schedule a Session
        </button>
      </div>
      {/* Other sections */}
    </div>
  );
};

export default MainPage;
