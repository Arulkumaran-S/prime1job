import React from 'react';
import './AnyJob.css'; // Import CSS

const AnyJob = () => {
  return (
    <section className="any-job-wrapper">
      <div className="any-job-content">
        <div className="any-job-text">
          <h2>Never want <span>Miss Any Job News</span></h2>
          <p>Subscribe to stay up-to-date on insights, events and new solutions.<br />
             You can unsubscribe at any time.</p>
        </div>

        <form className="email-form">
          <input type="email" placeholder="Enter Your Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Decorative shapes */}
      <img src="/assets/arrow-top-left.svg" className="decor arrow" alt="arrow" />
      <img src="/assets/shape-left.svg" className="decor shape-left" alt="shape" />
      <img src="/assets/shape-right.svg" className="decor shape-right" alt="shape" />
    </section>
  );
};

export default AnyJob;
