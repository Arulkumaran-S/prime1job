import React, { useEffect, useState } from 'react';
import './ourClient.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const OurClient = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [sectionTitle, setSectionTitle] = useState('');
  const [sectionLabel, setSectionLabel] = useState('');

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/testimonials-section');
        const data = await response.json();
        if (data?.clients) {
          setTestimonials(data.clients);
          setSectionTitle(data.sectionTitle);
          setSectionLabel(data.sectionLabel);
        }
      } catch (error) {
        console.error('Failed to load testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="oclient-section container py-5">
      <div className="text-center mb-5">
        <p className="oclient-label">{sectionLabel}</p>
        <h2 className="oclient-title">{sectionTitle}</h2>
      </div>

      <div className="row">
        {testimonials.map((client, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="oclient-card p-4 shadow-sm rounded bg-white h-100 position-relative">
              <FaQuoteLeft className="oclient-quote-icon" />
              <div className="oclient-stars text-primary mb-3">
                {Array(client.rating).fill().map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="oclient-text">{client.text}</p>
            <div className="oclient-client-info">
  <img
    src={client.image}
    alt={client.name}
    className="oclient-img"
  />
  <div>
    <h6 className="oclient-name">{client.name}</h6>
    <small className="oclient-role">{client.role}</small>
  </div>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
