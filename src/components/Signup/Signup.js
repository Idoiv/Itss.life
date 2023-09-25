import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




const Contact = () => {
  const { t,i18n } = useTranslation(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [errors, setErrors] = useState({});

    // Validation function
  const validateFields = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.fullName) {
      tempErrors.fullName = t('full_name');
      isValid = false;
    }

    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = t('phone_number');
      isValid = false;
    }

    if (formData.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = t('email');
      isValid = false;
    }

    if (!formData.gender) {
      tempErrors.gender = t('gender');
      isValid = false;
    }

    if (!formData.age || formData.age < 10 || formData.age > 100) {
      tempErrors.age = t('age');
      isValid = false;
    }

    if (!formData.address) {
      tempErrors.address = t('address');
      isValid = false;
    }

    if (!formData.hasBoard) {
      tempErrors.hasBoard = t('has_board');
      isValid = false;
    }

    if (!formData.skillLevel) {
      tempErrors.skillLevel = t('skill_level');
      isValid = false;
    }


    setErrors(tempErrors);
    return isValid;
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 // Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateFields()) {
    const webhookUrl = 'https://hook.eu1.make.com/qvj83dnnkx6jfhrlwgxvmionkjileiri';
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Webhook sent successfully');
        setShowThankYouMessage(true);  // Display the thank you message
      } else {
        console.log('Failed to send webhook');
      }
    } catch (error) {
      console.error('There was an error sending the webhook', error);
    }
  }
};

return (
  <div className="contact-container" dir={i18n.dir()} style={{ backgroundImage: "url('/venice1.jpg')", backgroundSize: '100%' }}>
    <div className="contact-form-container">
      <h1>{t('title')}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {t('full_name')} *
          <input id="fullName" type="text" name="fullName" placeholder={t('enter_full_name')} className="form-control" onChange={handleInputChange} required />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          {t('phone_number')} *
          <input id="phoneNumber" type="tel" name="phoneNumber" placeholder={t('enter_phone_number')} className="form-control" onChange={handleInputChange} required />
          {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
        </div>
        <div className="form-group">
          {t('email')}
          <input id="email" type="email" name="email" placeholder={t('enter_email')} className="form-control" onChange={handleInputChange} />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          {t('gender')} *
          <select id="gender" name="gender" className="form-control" onChange={handleInputChange} required>
            <option value="">{t('select')}</option>
            <option value="Male">{t('male')}</option>
            <option value="Female">{t('female')}</option>
            <option value="Other">{t('other')}</option>
          </select>
          {errors.gender && <span className="error-text">{errors.gender}</span>}
        </div>
        <div className="form-group">
          {t('age')} *
          <input id="age" type="number" name="age" placeholder={t('enter_age')} className="form-control" onChange={handleInputChange} required />
          {errors.age && <span className="error-text">{errors.age}</span>}
        </div>
        <div className="form-group">
          {t('address')} *
          <input id="address" type="text" name="address" placeholder={t('enter_address')} className="form-control" onChange={handleInputChange} required />
          {errors.address && <span className="error-text">{errors.address}</span>}
        </div>
        <div className="form-group">
          {t('has_board')} *
          <select id="hasBoard" name="hasBoard" className="form-control" onChange={handleInputChange} required>
            <option value="">{t('select')}</option>
            <option value="YES">{t('yes')}</option>
            <option value="NO">{t('no')}</option>
          </select>
          {errors.hasBoard && <span className="error-text">{errors.hasBoard}</span>}
        </div>
        <div className="form-group">
          {t('skill_level')} *
          <select id="skillLevel" name="skillLevel" className="form-control" onChange={handleInputChange} required>
            <option value="">{t('select')}</option>
            <option value="Beginner">{t('beginner')}</option>
            <option value="Intermediate">{t('intermediate')}</option>
            <option value="Advanced">{t('advanced')}</option>
          </select>
          {errors.skillLevel && <span className="error-text">{errors.skillLevel}</span>}
        </div>
        <button type="submit" className="btn btn-primary">{t('submit')}</button>
      </form>
    </div>

    {showThankYouMessage && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>{t('thank_you')}</h2>
          <p>{t('contact_soon')}</p>
          <button className="popup-button" onClick={() => { setShowThankYouMessage(false); navigate('/'); }}>
            {t('ok')}
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default Contact;