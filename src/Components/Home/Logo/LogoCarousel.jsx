import React, { useEffect, useState } from 'react';
import './LogoScroller.css';

// Your logos
import logo1 from '../../logo_Icon/bmec.png';
import logo2 from '../../logo_Icon/CEVA_Logistics.png';
import logo3 from '../../logo_Icon/elocars.png';
import logo4 from '../../logo_Icon/Exyte_RGB.png';
import logo5 from '../../logo_Icon/nachi.png';
import logo6 from '../../logo_Icon/shoppee.png';
import logo7 from '../../logo_Icon/tesla.png';
import logo8 from '../../logo_Icon/Септегга-A-Constellis-Company-1.png';
import logo9 from '../../logo_Icon/Singapore_Post_Logo.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6,logo7 ,logo8,logo9];

const LogoCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) => {
    return (centerIndex + offset + logos.length) % logos.length;
  };

  return (
    <div className="logo-carousel-container">
      <h4 className="trusted-text">Trusted over 2k+ companies</h4>
      <div className="logo-carousel-track">
        {[-2, -1, 0, 1, 2].map((offset, pos) => {
          const logoIndex = getIndex(offset);
          const classes = [
            'logo-item',
            offset === 0 ? 'center-logo' : '',
            Math.abs(offset) === 1 ? 'side-logo' : '',
            Math.abs(offset) === 2 ? 'faded-logo' : '',
          ].join(' ');

          return (
            <img
              key={pos}
              src={logos[logoIndex]}
              alt={`Logo ${logoIndex + 1}`}
              className={classes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LogoCarousel;
