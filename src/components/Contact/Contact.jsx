import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    
    // Simulate successful form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // In a real app, you would handle errors as well
    // setTimeout to reset the success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid-bg"></div>
      <div className="contact-glow"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="section-marker text-center mb-4">
          <span className="marker-number">05</span>
          <span className="marker-line"></span>
          <span className="marker-title">GET IN TOUCH</span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="section-title">Contact <span className="text-mustard">Us</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's bring your ideas to life</p>
        </div>
        
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-card">
              <h3 className="contact-card-title">Let's Connect</h3>
              <p className="contact-card-desc">
                Have questions about our services or want to discuss your project? 
                Our team is ready to help you transform your ideas into reality.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon-container">
                    <img src="/icons/location.svg" alt="Location" className="contact-icon" />
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Our Address</h4>
                    <p className="contact-detail-text">Opp Postgraduate College 5th Road, Commercial Market Rd, Satellite Town, Rawalpindi, 46000</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon-container">
                    <img src="/icons/phone.svg" alt="Phone" className="contact-icon" />
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Call Us</h4>
                    <p className="contact-detail-text">+92 3295734979</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon-container">
                    <img src="/icons/email.svg" alt="Email" className="contact-icon" />
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Email Us</h4>
                    <p className="contact-detail-text">info@codeffy.com</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon-container">
                    <img src="/icons/clock.svg" alt="Clock" className="contact-icon" />
                  </div>
                  <div>
                    <h4 className="contact-detail-title">Working Hours</h4>
                    <p className="contact-detail-text">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-socials">
                <h4 className="contact-socials-title">Follow Us</h4>
                <div className="contact-social-links">
                  <a href="#" className="contact-social-link">
                    <img src="/icons/social/linkedin.svg" alt="LinkedIn" />
                  </a>
                  <a href="#" className="contact-social-link">
                    <img src="/icons/social/twitter.svg" alt="Twitter" />
                  </a>
                  <a href="#" className="contact-social-link">
                    <img src="/icons/social/github.svg" alt="GitHub" />
                  </a>
                  <a href="#" className="contact-social-link">
                    <img src="/icons/social/instagram.svg" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send Us A Message</h3>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <div className="input-container">
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <div className="input-container">
                    <input
                      type="text"
                      id="subject"
                      className="form-input"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <div className="input-container textarea-container">
                    <textarea
                      id="message"
                      rows="5"
                      className="form-textarea"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div className="input-focus-border"></div>
                  </div>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">
                    <img src="/icons/arrow-right.svg" alt="Send" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.632210886112!2d73.0643631!3d33.6407771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe17837a48fcd1bd%3A0xbdcdeaea4e53ec88!2sCodeffy%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1747002759799!5m2!1sen!2s" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Codeffy Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
