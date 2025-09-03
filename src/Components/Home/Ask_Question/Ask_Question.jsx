import React, { useState, useEffect } from 'react';
import './ask_question.css';

const Ask_Question = () => {
  const [faqData, setFaqData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/faqs') // Replace with your actual backend URL if different
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch FAQ data');
        }
        return res.json();
      })
      .then((data) => setFaqData(data))
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqData) {
    return <div>Loading...</div>; // You can replace this with a spinner or skeleton if you want
  }

  return (
    <div className="container py-5 ask-section">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12">
          <h2 className="faq-heading mb-3">{faqData.heading}</h2>
          <p className="faq-subtitle text-muted mb-4">{faqData.subtitle}</p>

          <div className="faq-container">
            {faqData.faqs && faqData.faqs.length > 0 ? (
              faqData.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-card ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question d-flex justify-content-between align-items-center">
                    <span>{faq.question}</span>
                    <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No FAQs available.</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
          <img
            src={faqData.imageUrl}
            alt="FAQ Visual"
            className="img-fluid rounded"
            style={{
              width: '530px',
              height: '558px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Ask_Question;
