import React from 'react';
import './Courses.css';
import { useTranslation } from 'react-i18next';

const Courses = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he'; // Assuming 'he' is the code for Hebrew

  return (
    <div className={`courses-container ${isRTL ? 'rtl' : ''}`}>
      <h1 className="courses-title">{t('courses_title')}</h1>
      <div className="courses-list">
        <div className="course-item private-lesson">
          <h2>{t('private_lesson_title')}</h2>
          <p>{t('private_lesson_description')}</p>
        </div>
        <div className="course-item group-lesson">
          <h2>{t('group_lesson_title')}</h2>
          <p>{t('group_lesson_description')}</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
