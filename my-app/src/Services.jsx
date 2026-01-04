
import './css/Services.css'; 

function Services() {
  return (
    <div className="services-page">
      
      {/* Header Section */}
      <h2 className="page-title">Services</h2>
      <p className="page-intro">
        I provide the following services for private tutoring. I only have limited spots for each, 
        and so it is important to reach out early. My focus for tutoring is centred around 
        strong conceptual understanding, followed by practice to reinforce this foundation.
      </p>

      {/* Grid Layout for Services Cards */}
      <div className="services-grid">
        {/* --- Card 3: HS Help --- */}
        <div className="service-card">
          <h3>HS Homework Help</h3>
          <p>
            Catering for years 7 to 12. Specialises in Chemistry, Physics, Biology, Math Ext 1 & 2. 
            All these STEM subjects demand strong conceptual understanding and theoretical reasoning.
            <br /><br />
            Students are welcomed to bring their own materials and difficult questions to sessions.
          </p>
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
          <h3>GAMSAT Tutoring (S2 & S3)</h3>
          <p>
            With a GAMSAT S2 score of 75 and a S3 score of 91, I achieved an overall GAMSAT 
            within the 99th percentile. This came with a strong conceptual understanding 
            that simply cannot be attained through textbooks alone. <br /><br />
            Materials include S2 and S3 practice/prep materials, as well as limited GAMSAT mocks.
          </p>
          <div className="pricing-box">
            <h4>Pricing</h4>
            <ul className="pricing-list">
              <li><span>Tutoring (Tailored)</span> <strong>$120/h</strong></li>
              <li><span>Essay Marking</span> <strong>$60/paper</strong></li>
            </ul>
          </div>
        </div>

        {/* --- Card 2: Interview --- */}
        <div className="service-card">
          <h3>Interview Preparation</h3>
          <p>
Interview preparation can be daunting, and knowing ethical guidelines sometimes isn't enough to be unique.  <br />

            It took me 3 years of individual growth to understand 
            what it takes to deliver unique responses to difficult questions and ethical dilemmas, until I received my uni melb offer. I hope to share my experience and help you succeed too.
            <br /><br />
            Materials: Over 40 mocks tailored for UNSW, UoN, WSU, UniMelb, UQ, Bond, plus panel and MMI questions.
          </p>
          <p className="disclaimer">
            (Disclaimer: Materials are original and created by me.)
          </p>
          <div className="pricing-box">
            <h4>Pricing</h4>
            <ul className="pricing-list">
              <li><span>Consultation</span> <strong>$150/h</strong></li>
              <li><span>1x full Mock & Feedback</span> <strong>$150</strong></li>
              <li><span>2x full Mock & Feedback</span> <strong>$275</strong></li>
              <li><span>3x full Mock & Feedback</span> <strong>$350</strong></li>
            </ul>
          </div>
        </div>


      </div>

      {/* --- Why Choose Me Section --- */}
      <div className="why-choose-section">
        <h2 className="section-heading">Why Choose Me?</h2>

        <div className="reason-block">
          <div className="reason-content">
            <h3>Concepts: A strong base builds skyscrapers</h3>
            <p>
              In year 9, my rank was 198/210. By year 12, I was rank 9, achieving 99.85 ATAR. 
              The secret was a desire to understand concepts. Simple ideas allowed me to derive 
              identities with ease and optimise problem-solving. This approach led me to Rank 2 
              in Math Ext 1, Rank 3 in Ext 2, and top ranks in sciences.
            </p>
          </div>
        </div>

        <div className="reason-block">
          <div className="reason-content">
            <h3>Practice: Practice makes perfect</h3>
            <p>
              Continuous practice reinforces concepts like glue. Through my studies, I have amassed 
              numerous sets of questions to help consolidate understanding:
            </p>
            <ul className="material-list">
              <li>High School Trial Papers</li>
              <li>Specific Topic Questions</li>
              <li>Difficult Challenge Questions</li>
              <li>GAMSAT Materials & Mocks</li>
              <li>Over 40 Interview Mocks</li>
            </ul>
          </div>
        </div>

        <div className="reason-block">
          <div className="reason-content">
            <h3>Adapt: Now... I understand it</h3>
            <p>
              If we trip and slip down a mountain, we only see how far we fall. But why don't we 
              look at how far we've risen? Recovering from failure isn't simply trying the same 
              path again, but often taking a new pathway. For me, it was always about trying 
              something different and being open to new experiences.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;