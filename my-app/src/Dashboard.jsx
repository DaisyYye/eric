
import ericPhoto from './assets/eric-photo.jpeg';
import backgroundImage1 from './assets/background1.jpeg';
import backgroundImage2 from './assets/background2.jpeg';
import matchaImage from './assets/matcha.jpeg';
import unsw from './assets/unsw.png';
import unimelb from './assets/unimelb.svg';
import './css/Dashboard.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>GAMSAT Tutor Melbourne & Online | 99th Percentile | Eric Qin</title>
        <meta 
          name="description" 
          content="Private GAMSAT tutoring by UniMelb Doctor of Medicine student. Specialist coaching for Section 2, Section 3 and Interview Preparation." 
        />
        <link rel="canonical" href="https://www.eric-qin.com/" />
      </Helmet>

    <div className="dashboard">
      
{/* --- HERO SECTION --- */}
<div 
  className="hero-container" 
  style={{ backgroundImage: `url(${backgroundImage1})` }}
>
  <div className="hero-content">
    
    {/* Left side: Text */}
    <div className="hero-text-box">
      
      {/* 1. Name & Primary Title */}
      <h1 className="hero-name">Eric Qin</h1>
      <p className="hero-subtitle">
        Doctor of Medicine Student @ UniMelb <br/>
        <span className="sub-detail">B.VisSci / M.ClinOptom Early Exit @ UNSW</span>
      </p>

      {/* 2. Key Achievements (The "Hook") */}
      <div className="hero-stats">
        <div className="stat-item">
          <strong>99.85</strong> <span>ATAR</span>
        </div>
        <div className="stat-line"></div> {/* Vertical Divider */}
        <div className="stat-item">
          <strong>Rank #7</strong> <span>NSW Maths Ext 1</span>
        </div>
        <div className="stat-line"></div>
        <div className="stat-item">
          <strong>99th</strong> <span>Percentile GAMSAT</span>
        </div>
      </div>

      <hr className="hero-divider" />

      {/* 3. Services List */}
      <h3 className="services-title">Specialised Tutoring:</h3>
      <ul className="hero-service-list">
        <li>
          Maths, Chemistry, Physics
        </li>
        <li>
          Mock Medical Interviews 
        </li>
        <li>
          GAMSAT Section 2 Marking
        </li>
        <li>
          GAMSAT Section 3 Preparation
        </li>
      </ul>
    </div>

    {/* Right side: Image */}
    <img className="profile-photo" src={ericPhoto} alt="Eric Qin" />
  </div>
</div>

            <div 
        className="hero-container" 
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >

        
        <div className="hero-content">
            <div className="hero-bio">
              <h3>About me</h3>
<p>
  I went from ranking 198th in my cohort in Year 9 to securing a 99.85 ATAR and a State Rank (#7) in Maths Extension 1.
</p>
<p>
  I began tertiary education at UNSW, pursuing Bachelor of Vision Science / Master of Clinical Optometry. In 2025, I graduated from BVisSci with a 92 WAM and a 99 percentile GAMSAT.
</p>
<p>
  Currently studying Medicine at the University of Melbourne, I teach these exact systems to help students navigate the HSC and GAMSAT with confidence.
</p>
          </div>

{/* Right side: University Logos Stack */}
          <div className="logo-container">
            <img className="uni-logo" src={unsw} alt="UNSW Logo"  />
            <img className="uni-logo" src={unimelb} alt="UniMelb Logo"  />
          </div>
        </div>
      </div>


      {/* --- MAIN CONTENT AREA --- */}
      <div className="main-content">
        
{/* --- TEACHING SECTION --- */}
<section className="teaching-section">
  
  {/* Section Header */}
  <div className="teaching-header">
    <h3>My Teaching Philosophy</h3>
    <p>Success isn't accidental. It follows a proven three-step cycle.</p>
  </div>

  {/* The 3-Step Grid */}
  <div className="teaching-grid">
    
    {/* Step 1 */}
    <div className="method-card">
      <div className="step-number">01</div>
      <div className="card-content">
        <h4>Concepts</h4>
        <p>Building strong, intuitive conceptual understanding from the ground up.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="method-card">
      <div className="step-number">02</div>
      <div className="card-content">
        <h4>Practice</h4>
        <p>Providing targeted practice questions to reinforce and solidify new knowledge.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="method-card">
      <div className="step-number">03</div>
      <div className="card-content">
        <h4>Adaptation</h4>
        <p>Analyzing mistakes to adapt strategies and ensure continuous growth.</p>
      </div>
    </div>

  </div>
</section>

        {/* Services Section */}
        <div className="services-container">
          {/* Left Side: Text */}
          <div className="services-text">
            <h3>My Services:</h3>
            <p>
              I am in fairly high demand, and I only offer 10 spots for tutoring.
              The available spots I have are listed below:
            </p>
            <ul className="styled-list">
              <li>High School Homework Help -- <strong>Full</strong></li>
              <li>GAMSAT (S2 and S3) -- <strong>3 spots</strong></li>
              <li>Interview Preparation -- <strong>2 spots</strong></li>
            </ul>
<p className="note-text">
  For more information, please visit the <Link to="/services" className="text-link">Services page</Link>.
</p>
          </div>

          {/* Right Side: Matcha Image */}
          <img className="matcha-photo" src={matchaImage} alt="Services decoration" />
        </div>
      
      </div>
    </div>
        </div>
  );
}

export default Dashboard;