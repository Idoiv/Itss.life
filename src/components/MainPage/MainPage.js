import React, { useState, useEffect } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // Import useTranslation hook

const MainPage = () => {
  const { t } = useTranslation();  // Initialize the hook
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
        <h1>{t('experience_thrill')}</h1>
        <p>
          {t('skate_surfing_description')}
        </p>
        <button onClick={() => {navigate('/signup')}}>
          {t('schedule_session')}
        </button>
      </div>
      {/* Other sections */}
    </div>
  );
};

export default MainPage;
