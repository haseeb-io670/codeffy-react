import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can you help me create an AI chatbot for my website or business?",
      answer: "Yes, we offer AI-powered chatbot development services that can enhance customer engagement, automate inquiries, and provide real-time support on your website or app. Our chatbots can be tailored to suit your specific business needs and improve customer experience."
    },
    {
      question: "What e-commerce solutions do you offer?",
      answer: "We offer comprehensive e-commerce solutions, including the development of custom online stores, integration with payment gateways, inventory management systems, and product catalog systems. Our services aim to provide a seamless, secure, and scalable e-commerce experience that enhances your sales and customer experience."
    },
    {
      question: "How long does it take to develop a custom website or application?",
      answer: "The time required to develop a website or application depends on the complexity of the project. Typically, it can take anywhere from 4 to 12 weeks, but we will provide a detailed timeline based on your specific needs. We prioritize clear communication and ensure you are updated at every stage of development."
    },
    {
      question: "Do you offer ongoing website maintenance and support?",
      answer: "Yes, we offer ongoing maintenance and support services to ensure that your website remains functional, secure, and up-to-date with the latest technologies. Our support includes regular updates, security patches, bug fixes, and any enhancements you may require."
    },
    {
      question: "What technologies do you use to build websites and applications?",
      answer: "We use a range of modern technologies for building websites and applications, including HTML5, CSS3, JavaScript, React, Angular, PHP, Node.js, Python, and various frameworks like Laravel, Django, and WordPress. Our choice of technologies is always based on the specific requirements of the project."
    },
    {
      question: "Do you offer SEO services for websites you build?",
      answer: "Yes, we offer SEO (Search Engine Optimization) services to help improve the visibility of your website on search engines. We incorporate SEO best practices into the development process and can also provide ongoing SEO management to optimize your website's performance and drive traffic."
    }
  ];

  return (
    <section className="faqs-section" id="faqs">
      <div className="faqs-grid-bg"></div>
      <div className="faqs-glow"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="section-marker text-center mb-4">
          <span className="marker-number">04</span>
          <span className="marker-line"></span>
          <span className="marker-title">QUESTIONS & ANSWERS</span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked <span className="text-mustard">Questions</span></h2>
          <p className="section-subtitle">Find answers to common questions about our services and processes</p>
        </div>
        
        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  <span className="plus">+</span>
                  <span className="minus">-</span>
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faqs-cta">
          <div className="faqs-cta-content">
            <h3>Still have questions?</h3>
            <p>Our team is ready to answer any questions you might have about our services.</p>
            <button className="btn-primary">
              <span className="btn-text">Contact Us</span>
              <span className="btn-icon">
                <img src="/icons/arrow-right.svg" alt="Arrow" />
              </span>
            </button>
          </div>
          <div className="faqs-cta-decoration">
            <div className="circuit-lines">
              <div className="circuit-line"></div>
              <div className="circuit-line"></div>
              <div className="circuit-line"></div>
              <div className="circuit-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
