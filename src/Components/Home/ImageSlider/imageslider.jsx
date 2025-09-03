import React, { useState, useEffect } from 'react';
import './herosection.css';
import { FaMapMarkerAlt, FaBriefcase, FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/hero')
      .then(res => res.json())
      .then(data => {
        setHeroContent(data);
        setSelectedLocation(data.locations[0]);
        setSelectedJobType(data.jobTypes[0]);
      });
  }, []);

  if (!heroContent) return <div>Loading...</div>;

  return (
    <div className="hero-container container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 content-area">
          <h1 className="hero-heading">{heroContent.heroHeading}</h1>
          <p className="hero-description">{heroContent.heroDescription}</p>

          <div className="search-bar d-flex flex-wrap align-items-center">
            <div
              className={`input-group-icon ${showLocationDropdown ? 'active-dropdown' : ''}`}
              onClick={() => {
                setShowLocationDropdown(!showLocationDropdown);
                setShowJobTypeDropdown(false);
              }}
            >
              <div className="circle">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div className="input-texts">
                <div className="label">Location</div>
                <div className="value">{selectedLocation}</div>
              </div>
              <FaChevronDown className="chevron-icon" />
              {showLocationDropdown && (
                <div className="dropdown">
                  {heroContent.locations.map((loc, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`input-group-icon ${showJobTypeDropdown ? 'active-dropdown' : ''}`}
              onClick={() => {
                setShowJobTypeDropdown(!showJobTypeDropdown);
                setShowLocationDropdown(false);
              }}
            >
              <div className="circle">
                <FaBriefcase className="icon" />
              </div>
              <div className="input-texts">
                <div className="label">Job Type</div>
                <div className="value">{selectedJobType}</div>
              </div>
              <FaChevronDown className="chevron-icon" />
              {showJobTypeDropdown && (
                <div className="dropdown">
                  {heroContent.jobTypes.map((type, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedJobType(type);
                        setShowJobTypeDropdown(false);
                      }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="search-button">Search</button>
          </div>

          <div className="success-box">
            <img src={heroContent.successImageURL} alt="Success" className="overlay-img" />
            <div className="success-text">{heroContent.successText}</div>
          </div>
        </div>

        <div className="col-12 col-lg-6 image-area position-relative mt-4 mt-lg-0">
          <img src={heroContent.bannerImageURL} alt="Hero Banner" className="hero-image img-fluid" />
          <div className="image-caption">
            <span className="caption-icon">//</span>
            <p>{heroContent.captionText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
