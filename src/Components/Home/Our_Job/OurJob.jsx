import React, { useState, useEffect } from 'react';
import './OurJob.css';

const OurJob = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/our-job-section')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch Our Job section data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading Our Job section...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container py-5 our-job-section">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <p className="text-primary fw-semibold">{data.subtitle}</p>
          <h2 className="head mb-4">
            {data.heading.split('Singapore')[0]}
            <span className="text-primary">Singapore</span>
          </h2>

          <div className="d-flex flex-wrap gap-3 mb-3">
            {data.categories.map((role, index) => (
              <button key={index} className="btn job-btn">
                {role}
              </button>
            ))}
            <button className="btn job-btn-filled">{data.allJobsButtonText}</button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src={data.imageURL}
            alt="Job Opportunities"
            className="img-fluid rounded"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurJob;
