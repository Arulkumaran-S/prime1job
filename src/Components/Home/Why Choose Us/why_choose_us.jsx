import React, { useEffect, useState } from 'react';
import './why_choose_us.css';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const WhyChooseUs = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/why') // or just '/api/why' if using proxy
      .then(res => setContent(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="container py-5 why-section">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
          <img
            src={content.imageURL}
            alt="Why Choose Us"
            className="img-fluid rounded"
            style={{ maxHeight: '500px' }}
          />
        </div>

        {/* Text */}
        <div className="col-lg-6 col-md-12">
          <p className="text-primary fw-semibold mb-2">{content.subtitle}</p>
          <h2 className="fw mb-2 head">
            {content.title}<br />
            <span className="text-primary">{content.highlight}</span>
          </h2>
          <p className="text-muted mb-4">{content.description}</p>

          <div className="row">
            {content.features.map((item, index) => (
              <div className="col-6 mb-3 d-flex align-items-center" key={index}>
                <FaCheckCircle className="text-primary me-2" />
                <span className="fw-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="btn btn-outline-primary mt-3">{content.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
