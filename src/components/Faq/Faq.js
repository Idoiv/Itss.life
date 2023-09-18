import React from 'react';
import './Faq.css';


const Faq = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-layout">
        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-question">How much does it cost?</h2>
          <p className="faq-answer">It costs $100 per hour.</p>

          <h2 className="faq-question">What do I need to bring?</h2>
          <p className="faq-answer">Just yourself and comfortable clothing. All other equipment will be provided.</p>

          <h2 className="faq-question">How long is each session?</h2>
          <p className="faq-answer">Each session lasts approximately one hour.</p>

          <h2 className="faq-question">Is it suitable for beginners?</h2>
          <p className="faq-answer">Absolutely, beginners are more than welcome!</p>

          <h2 className="faq-question">Do you offer group discounts?</h2>
          <p className="faq-answer">Yes, we offer discounts for groups of 5 or more.</p>

          <h2 className="faq-question">Where is the session taking place?</h2>
          <div className="faq-answer">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.456425438792!2d34.774406394460286!3d32.09424392054942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bf17f940497%3A0x300b965a4daf5aea!2sYarkon%20Park!5e0!3m2!1sen!2sil!4v1694809568085!5m2!1sen!2sil"
            >
            </iframe>
          </div>

          <h2 className="faq-question">What is your cancellation policy?</h2>
          <p className="faq-answer">You can cancel up to 24 hours before the session for a full refund.</p>
        </div>

        {/* Intro Image */}
        <div className="intro-image">
          <img src="/favicon.ico" alt="Intro" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
