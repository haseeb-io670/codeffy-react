import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      billing: 'One-time',
      features: [
        { name: 'Website Type', value: 'Basic Website' },
        { name: 'Pages Included', value: 'Up to 5' },
        { name: 'CMS (WordPress, Wix, etc.)', value: true },
        { name: 'Ecommerce Integration', value: false },
        { name: 'Custom Design', value: 'Basic' },
        { name: 'SEO Optimization', value: false },
        { name: 'Hosting & Domain Setup', value: true },
        { name: 'Support & Maintenance', value: '30 Days' },
        { name: 'Mobile App Development', value: false },
      ],
      cta: 'Get Started'
    },
    {
      id: 'business',
      name: 'Business',
      price: '$299',
      billing: 'One-time',
      features: [
        { name: 'Website Type', value: 'Business Website' },
        { name: 'Pages Included', value: 'Up to 10' },
        { name: 'CMS (WordPress, Wix, etc.)', value: true },
        { name: 'Ecommerce Integration', value: false },
        { name: 'Custom Design', value: 'Advanced' },
        { name: 'SEO Optimization', value: true },
        { name: 'Hosting & Domain Setup', value: true },
        { name: 'Support & Maintenance', value: '3 Months' },
        { name: 'Mobile App Development', value: false },
      ],
      cta: 'Get Started'
    },
    {
      id: 'popular',
      name: 'Popular',
      price: '$499',
      billing: 'One-time',
      popular: true,
      features: [
        { name: 'Website Type', value: 'Ecommerce Store' },
        { name: 'Pages Included', value: 'Unlimited' },
        { name: 'CMS (WordPress, Wix, etc.)', value: true },
        { name: 'Ecommerce Integration', value: true },
        { name: 'Custom Design', value: 'Tailored' },
        { name: 'SEO Optimization', value: true },
        { name: 'Hosting & Domain Setup', value: true },
        { name: 'Support & Maintenance', value: '6 Months' },
        { name: 'Mobile App Development', value: false },
      ],
      cta: 'Get Started'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$799',
      billing: 'One-time',
      features: [
        { name: 'Website Type', value: 'Custom Solution' },
        { name: 'Pages Included', value: 'Unlimited' },
        { name: 'CMS (WordPress, Wix, etc.)', value: true },
        { name: 'Ecommerce Integration', value: true },
        { name: 'Custom Design', value: 'Premium' },
        { name: 'SEO Optimization', value: true },
        { name: 'Hosting & Domain Setup', value: true },
        { name: 'Support & Maintenance', value: 'Ongoing' },
        { name: 'Mobile App Development', value: true },
      ],
      cta: 'Contact Us'
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-grid-bg"></div>
      <div className="pricing-glow"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="section-marker text-center mb-4">
          <span className="marker-number">03</span>
          <span className="marker-line"></span>
          <span className="marker-title">PRICING & PLANS</span>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="section-title">Pricing & <span className="text-mustard">Plans</span></h2>
          <p className="section-subtitle">Choose the perfect plan for your business needs</p>
        </div>
        
        <div className="pricing-container">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''} ${plan.popular ? 'popular' : ''}`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              {plan.popular && <div className="popular-badge">Popular</div>}
              
              <div className="pricing-card-header">
                <h3 className="pricing-plan-name">{plan.name}</h3>
                <div className="pricing-plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="billing">{plan.billing}</span>
                </div>
              </div>
              
              <div className="pricing-card-features">
                <table className="features-table">
                  <tbody>
                    {plan.features.map((feature, index) => (
                      <tr key={index} className="feature-row">
                        <td className="feature-name">{feature.name}</td>
                        <td className="feature-value">
                          {typeof feature.value === 'boolean' ? (
                            feature.value ? (
                              <span className="feature-included">✓</span>
                            ) : (
                              <span className="feature-not-included">✕</span>
                            )
                          ) : (
                            <span>{feature.value}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="pricing-card-footer">
                <button className={`pricing-cta-button ${plan.id === 'enterprise' ? 'enterprise-btn' : ''}`}>
                  <span className="btn-text">{plan.cta}</span>
                  <span className="btn-icon">
                    <img src="/icons/arrow-right.svg" alt="Arrow" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pricing-cta-section">
          <div className="pricing-cta-content">
            <h3 className="pricing-cta-title">Need a custom solution?</h3>
            <p className="pricing-cta-text">
              We offer tailored solutions to meet your specific business requirements.
              Contact us to discuss your project and get a personalized quote.
            </p>
            <button className="btn-primary">
              <span className="btn-text">Contact Us</span>
              <span className="btn-icon">
                <img src="/icons/arrow-right.svg" alt="Arrow" />
              </span>
            </button>
          </div>
          <div className="pricing-cta-decoration">
            <div className="pricing-cta-icon">
              <img src="/icons/idea.svg" alt="Custom Solution" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
