import React, { useEffect, useState } from 'react';
import './upload.css';
import {
  FaUser,
  FaFileAlt,
  FaSearch,
  FaCheckCircle
} from 'react-icons/fa';
import axios from 'axios';

const iconMap = {
  FaUser: <FaUser />,
  FaFileAlt: <FaFileAlt />,
  FaSearch: <FaSearch />,
  FaCheckCircle: <FaCheckCircle />,
};

const Upload = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/upload-steps')
      .then(res => setSteps(res.data))
      .catch(err => console.error('Error fetching upload steps:', err));
  }, []);

  return (
    <div className="upload-section py-5">
      <div className="container">
        <div className="row text-center">
          {steps.map((item, index) => (
            <div className="col-md-3 step-col" key={index}>
              <div className="icon-box mx-auto mb-3">
                <div className="icon-inner">{iconMap[item.icon]}</div>
              </div>
              <p className="step-label">{item.step}</p>
              <h5 className="step-title">{item.title}</h5>
              <p className="step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upload;
