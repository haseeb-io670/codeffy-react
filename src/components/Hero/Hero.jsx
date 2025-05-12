import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Grid properties
    const gridSize = 50;
    const gridDotSize = 1;
    const gridColor = 'rgba(255, 215, 0, 0.15)'; // Mustard color with opacity
    
    // Particle properties
    const particles = [];
    const particleCount = 30;
    const connectionDistance = 150;
    const particleColor = 'rgba(224, 224, 224, 0.5)'; // Silver color with opacity
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.fillStyle = gridColor;
          ctx.beginPath();
          ctx.arc(x, y, gridDotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around the screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.2 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <div className="container mx-auto px-4">
          <h1 className="hero-title">
            <span className="title-part">Transforming Ideas</span>
            <span className="title-part">Into <span className="highlight">Digital Reality</span></span>
          </h1>
          <p className="hero-subtitle">
            Cutting-edge software solutions for forward-thinking businesses
          </p>
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">01</div>
              <div className="feature-text">Innovative Web Solutions</div>
            </div>
            <div className="feature">
              <div className="feature-icon">02</div>
              <div className="feature-text">Scalable Mobile Apps</div>
            </div>
            <div className="feature">
              <div className="feature-icon">03</div>
              <div className="feature-text">Enterprise Cloud Systems</div>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/services" className="btn-secondary">Explore Services</Link>
          </div>
          <div className="hero-clients">
            <p className="trusted-by">Trusted by innovative companies worldwide</p>
            <div className="client-logos">
              <div className="client-logo">ACME</div>
              <div className="client-logo">TECHCORP</div>
              <div className="client-logo">GLOBALEX</div>
              <div className="client-logo">FUTURELAB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
