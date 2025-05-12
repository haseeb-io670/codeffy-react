import React from 'react';
import './About.css';
import { 
  FaServer, FaRocket, FaShieldAlt, FaDatabase, 
  FaGlobe, FaBrain, FaNetworkWired, FaIndustry, FaArrowRight,
  FaReact, FaNodeJs, FaAws, FaDocker, FaCode, FaLink,
  FaCubes, FaRobot, FaChartLine, FaUsers
} from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section py-20" id="about">
      <div className="hexagon-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading with Refined Effect */}
        <div className="text-center mb-20">
          <h2 className="professional-heading" data-text="INNOVATIVE SOLUTIONS">INNOVATIVE SOLUTIONS</h2>
          <p className="text-light-grey mt-4 max-w-2xl mx-auto">
            Delivering exceptional software development and technology consulting services
            that transform businesses and drive growth.
          </p>
          <div className="tech-bar mt-6">
            <span className="tech-ticker">
              <FaReact className="tech-icon" />
              <FaNodeJs className="tech-icon" />
              <FaAws className="tech-icon" />
              <FaDocker className="tech-icon" />
              <FaCode className="tech-icon" />
              <FaLink className="tech-icon" />
              <FaCubes className="tech-icon" />
              <FaRobot className="tech-icon" />
            </span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 relative">
          {/* Left Column: Company Description */}
          <div className="company-desc">
            <div className="section-marker">
              <span className="marker-number">01</span>
              <span className="marker-line"></span>
              <span className="marker-title">ABOUT US</span>
            </div>
            
            <h3 className="text-3xl font-bold text-silver mb-6 neo-title">
              EXCELLENCE IN<br/><span className="text-mustard">TECHNOLOGY</span>
            </h3>
            
            <p className="text-light-grey mb-6 cyber-text">
              At Codeffy, we combine technical expertise with strategic thinking to deliver 
              solutions that address complex business challenges and create lasting value.
            </p>
            
            <p className="text-light-grey mb-8 cyber-text">
              Our team of skilled professionals brings deep industry knowledge and technical 
              proficiency to every project, ensuring exceptional results that exceed expectations.
            </p>
            
            <button className="btn-secondary">
              <span>LEARN MORE</span>
              <FaArrowRight className="btn-icon inline-block ml-2" />
            </button>
          </div>
          
          {/* Right Column: Stats */}
          <div className="company-stats">
            <div className="stats-container">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number-container">
                    <span className="stat-number">250<span className="text-mustard">+</span></span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-label">PROJECTS DELIVERED</div>
                  <div className="stat-icon-container">
                    <FaRocket className="stat-icon" />
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number-container">
                    <span className="stat-number">99.<span className="text-mustard">9</span>%</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-label">UPTIME GUARANTEED</div>
                  <div className="stat-icon-container">
                    <FaServer className="stat-icon" />
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number-container">
                    <span className="stat-number">60<span className="text-mustard">+</span></span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-label">GLOBAL CLIENTS</div>
                  <div className="stat-icon-container">
                    <FaGlobe className="stat-icon" />
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number-container">
                    <span className="stat-number">85<span className="text-mustard">+</span></span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-label">TEAM MEMBERS</div>
                  <div className="stat-icon-container">
                    <FaUsers className="stat-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values Section */}
        <div className="core-values mb-20">
          <div className="section-marker">
            <span className="marker-number">02</span>
            <span className="marker-line"></span>
            <span className="marker-title">OUR VALUES</span>
          </div>
          
          <h3 className="text-3xl font-bold text-silver mb-10 neo-title text-center">
            WHAT <span className="text-mustard">DRIVES US</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="value-card">
              <div className="value-icon">
                <FaShieldAlt />
              </div>
              <h4 className="value-title">INTEGRITY</h4>
              <p className="value-desc">
                We uphold the highest standards of honesty and transparency in all our interactions.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h4 className="value-title">EXCELLENCE</h4>
              <p className="value-desc">
                We strive for excellence in every solution we deliver, exceeding expectations.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaBrain />
              </div>
              <h4 className="value-title">INNOVATION</h4>
              <p className="value-desc">
                We embrace creative thinking and cutting-edge approaches to solve complex problems.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h4 className="value-title">COLLABORATION</h4>
              <p className="value-desc">
                We believe in the power of teamwork and partnership to achieve remarkable results.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="cyber-cta">
          <div className="cyber-cta-content">
            <h3 className="cyber-cta-title">READY TO TRANSFORM YOUR BUSINESS?</h3>
            <p className="cyber-cta-text">
              Partner with Codeffy to leverage our expertise and take your digital presence to the next level.
            </p>
            <button className="btn-primary">
              <span>CONTACT US</span>
              <FaArrowRight className="btn-icon inline-block ml-2" />
            </button>
          </div>
          <div className="cyber-cta-bg"></div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
