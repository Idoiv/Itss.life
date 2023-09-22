import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';




const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function
  const validateFields = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.fullName) {
      tempErrors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = 'Invalid phone number';
      isValid = false;
    }

    if (formData.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.gender) {
      tempErrors.gender = 'Gender is required';
      isValid = false;
    }

    if (!formData.age || formData.age < 10 || formData.age > 100) {
      tempErrors.age = 'Invalid age';
      isValid = false;
    }

    if (!formData.address) {
      tempErrors.address = 'Address is required';
      isValid = false;
    }

    if (!formData.hasBoard) {
      tempErrors.hasBoard = 'This field is required';
      isValid = false;
    }

    if (!formData.skillLevel) {
      tempErrors.skillLevel = 'Skill level is required';
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
    <div className="contact-container" style={{ backgroundImage: "url('/venice1.jpg')", backgroundSize: '100%' }}>
      <div className="contact-form-container">
        <h1>Schedule a Session</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            Full Name *
            <input id="fullName" type="text" name="fullName" placeholder="Enter full name" className="form-control" onChange={handleInputChange} required />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            Phone Number *
            <input id="phoneNumber" type="tel" name="phoneNumber" placeholder="Enter phone number" className="form-control" onChange={handleInputChange} required />
            {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
          </div>
          <div className="form-group">
            Email
            <input id="email" type="email" name="email" placeholder="Enter email" className="form-control" onChange={handleInputChange} />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            Gender *
            <select id="gender" name="gender" className="form-control" onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className="error-text">{errors.gender}</span>}
          </div>
          <div className="form-group">
            Age *
            <input id="age" type="number" name="age" placeholder="Enter age" className="form-control" onChange={handleInputChange} required />
            {errors.age && <span className="error-text">{errors.age}</span>}
          </div>
          <div className="form-group">
            Address *
            <input id="address" type="text" name="address" placeholder="Enter address" className="form-control" onChange={handleInputChange} required />
            {errors.address && <span className="error-text">{errors.address}</span>}
          </div>
          <div className="form-group">
            Do You Have a Surfskate Board? *
            <select id="hasBoard" name="hasBoard" className="form-control" onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
            {errors.hasBoard && <span className="error-text">{errors.hasBoard}</span>}
          </div>
          <div className="form-group">
            I am a *
            <select id="skillLevel" name="skillLevel" className="form-control" onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {errors.skillLevel && <span className="error-text">{errors.skillLevel}</span>}
          </div>
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      {showThankYouMessage && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>We will contact you soon to schedule a time for your lesson</p>
            <button
              className="popup-button"
              onClick={() => {
                setShowThankYouMessage(false);
                navigate('/');  // Navigate back to home page
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;




