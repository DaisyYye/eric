import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for the CTA button
import './css/Services.css';

function Services() {
  return (
    <div className="services-page">
      
      {/* Header Section */}
      <h2 className="page-title">Services</h2>
      <p className="page-intro">
        I provide the following services for private tutoring. I only have limited spots for each, 
        and so it is important to reach out early. My focus for tutoring is centred around 
strong conceptual understanding, followed by tailored practice to reinforce this foundation.
      </p>

      {/* Grid Layout for Services Cards */}
      <div className="services-grid">

        {/* --- Card 3: HS Help --- */}
        <div className="service-card">
          <div className="card-description-wrapper">
            <h3> Homework Help <br />(High School)</h3>
            <p>
              Catering for years 7 to 12. Specialises in Chemistry, Physics, Biology, Math Ext 1 & 2. 
              All these STEM subjects demand strong conceptual understanding and theoretical reasoning.
              <br /><br />
              I highly recommend students bring their own materials and difficult questions to sessions.
            </p>
          </div>
          <div className="pricing-box">
            <h4>Pricing</h4>
            <ul className="pricing-list">
              <li><span>Year 10 & Under</span> <strong>$60/h</strong></li>
              <li><span>Year 11-12 (excl. Ext 2)</span> <strong>$70/h</strong></li>
              <li><span>Year 12 (incl. Ext 2)</span> <strong>$80/h</strong></li>
            </ul>
          </div>
        </div>
        {/* --- Card 1: GAMSAT --- */}
        <div className="service-card">
          {/* Wrapper for top content to ensure pricing box gets pushed down evenly */}
          <div className="card-description-wrapper">
            <h3>GAMSAT S2 & S3 Tutoring</h3>
            <p>
              With a GAMSAT S2 score of 75 and a S3 score of 91, I achieved an overall GAMSAT 
              within the 99th percentile. This came with a strong conceptual understanding 
              that simply cannot be attained through textbooks alone. <br /><br />
              Materials include S2 and S3 practice/prep materials, as well as limited GAMSAT mocks.
            </p>
          </div>
          <div className="pricing-box">
            <h4>Pricing</h4>
            <ul className="pricing-list">
              <li><span>Single Session (1h)</span> <strong>$120</strong></li>
              <li><span>5-Session Bundle</span> <strong>$575</strong></li>
              <li><span>Essay Marking</span> <strong>$60/paper</strong></li>
            </ul>
          </div>
        </div>

        {/* --- Card 2: Interview --- */}
        <div className="service-card">
           <div className="card-description-wrapper">
            <h3>Medical Interview Preparation</h3>
          <p>
            Before my uni melb offer, I spent 3 years to master medical interviews, learning 
            what it takes to deliver unique responses to difficult questions and ethical dilemmas. I can help you achieve the same faster than I did.
            <br /><br />
            Materials: Over 40 mocks tailored for UNSW, UoN, WSU, UniMelb, UQ, Bond, plus panel and MMI questions.
          </p>
          <p className="disclaimer">
            (Disclaimer: Materials are original and created by me.)
          </p>
          </div>
          <div className="pricing-box">
            <h4>Pricing</h4>
            <ul className="pricing-list">
              <li><span>Consultation</span> <strong>$150/h</strong></li>
              <li><span>1x Mock & Feedback</span> <strong>$175</strong></li>
              <li><span>2x Mock & Feedback</span> <strong>$340</strong></li>
              <li><span>3x Mock & Feedback</span> <strong>$495</strong></li>
            </ul>
          </div>
        </div>


      </div>

      {/* --- Why Choose Me Section (Redesigned) --- */}
      <div className="why-choose-section">
        <h2 className="section-heading">Why Choose Me?</h2>

        <div className="reasons-grid">
          
          {/* Reason 1 */}
          <div className="reason-card">
            <div className="reason-icon">💡</div>
            <h3>Concepts First</h3>
            <p>
              In year 9, I ranked 198/210. By year 12, I was rank 9 with a 99.85 ATAR. 
              The secret wasn't mindless study; it was a deep desire to understand concepts. 
              Simple ideas allowed me to derive complex identities with ease and optimise problem-solving during exams.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="reason-card">
            <div className="reason-icon">🏋️‍♂️</div>
            <h3>Strategic Practice</h3>
            <p>
              Continuous practice reinforces concepts like glue. I provide extensive resources to consolidate understanding:
            </p>
            <ul className="material-list">
              <li>High School Trial Papers</li>
              <li>Specific Topic Questions</li>
              <li>Difficult Challenge Questions</li>
              <li>GAMSAT Materials & Mocks</li>
              <li>Over 40 Interview Mocks</li>
            </ul>
          </div>

          {/* Reason 3 */}
          <div className="reason-card">
            <div className="reason-icon">🌱</div>
            <h3>Adapt & Overcome</h3>
            <p>
              I only succeeded at getting into medicine at the very end after initial failures. 
              Recovering isn't just trying the same path again; it's about trying something different. 
              I teach the mindset of being open to new experiences and adapting to mistakes to grow.
            </p>
          </div>
        </div>

        {/* New Call to Action Area */}
        <div className="cta-container">
          <h3>Ready to Excel?</h3>
          <p>Spots are strictly limited. Secure your place and start building your foundation today.</p>
          {/* Adjust the 'to' link to wherever your contact method lives (e.g., email link or contact page) */}
          <Link to="/contact" className="cta-button main-cta">
            Enquire About Spots / Book a Trial
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Services;