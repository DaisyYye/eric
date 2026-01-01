
import ericPhoto from './assets/eric-photo.jpeg';
import backgroundImage1 from './assets/background1.jpeg';
import backgroundImage2 from './assets/background2.jpeg';
import matchaImage from './assets/matcha.jpeg';
import unsw from './assets/unsw.png';
import unimelb from './assets/unimelb.svg';
import './css/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      
      {/* --- HERO SECTION --- */}
      {/* Container with background image */}
      <div 
        className="hero-container" 
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <div className="hero-content">
          
          {/* Left side: Text */}
          <div className="hero-text-box">
            <h2 className="hero-title">Eric Qin</h2>
            <ul className="hero-list">
              <li>Bachelor of Vision Science @ UNSW</li>
              <li>BVisSci/MClinOptom Early Exit</li>
              <li>Doctor of Medicine @ UniMelb</li>
              <li>
                High School Homework Help (Chemistry, Physics, Biology, Math Ext 1 & 2)
              </li>
              <li>
                GAMSAT Tutoring (S2 & S3)
              </li>
              <li>
                Medical Interview Preparation
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
                 <mark> From the Dust:  <br />
                I understand what it is like to struggle with understanding confusing ideas. <br />
                <br />
                Studying secondary education at the Sydney Boys High School, I was never one who was strong at academics. 
                I would waste my time playing video games. In year 9, my rank was 198/210. But by year 12, I was rank 9, 
                achieving 99.85 ATAR, and state rank #7 in maths extension 1.  </mark>
              </p>
              <p>
                 <mark>What changed? The focus. <br />
                
                I saw how concepts that I've learnt could connect seamlessly with other ideas. 
                This development of conceptual understanding extends beyond just mathematics, but for almost all aspects of life.
                At UNSW, I studied BVisSci/MClinOptom for 3 years, before taking early exit with a final WAM of 92. 
                I am currently studying Doctor of Medicine at the University of Melbourne, with a 99 percentile GAMSAT.  </mark>
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
        
        {/* Teaching Section */}
        <section className="teaching-section">
          <h3>My teaching</h3>
          <p>I base my teachings off 3 key ideas:</p>
          <ol className="styled-list">
            <li>Building strong conceptual understanding</li>
            <li>Providing practice questions to reinforce understanding</li>
            <li>Adapt to mistakes in order to grow and improve</li>
          </ol>
          <div className="highlight-text">Concepts • Practice • Adaptation</div>
        </section>

        {/* Services Section */}
        <div className="services-container">
          {/* Left Side: Text */}
          <div className="services-text">
            <h3>My Services:</h3>
            <p>
              I am in fairly high demand, and I only offer 11 spots for tutoring.
              The available spots I have are listed below:
            </p>
            <ul className="styled-list">
              <li>Private High School Homework Help -- <strong>Full</strong></li>
              <li>GAMSAT (S2 and S3) -- <strong>3 spots</strong></li>
              <li>Interview Preparation -- <strong>2 spots</strong></li>
            </ul>
            <p className="note-text">For more information like prices, please visit the Services page.</p>
          </div>

          {/* Right Side: Matcha Image */}
          <img className="matcha-photo" src={matchaImage} alt="Services decoration" />
        </div>
      
      </div>
    </div>
  );
}

export default Dashboard;