import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Enterprise CRM Solution",
      description: "A comprehensive customer relationship management system with advanced analytics and reporting features.",
      imgUrl: "https://placehold.co/600x400/1A1A1A/FFD700?text=CRM+Solution",
      projectLink: "https://crm-project.example.com",
      codeLink: "https://github.com/codeffy/crm-solution",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Scalable e-commerce solution with payment integration, inventory management, and user authentication.",
      imgUrl: "https://placehold.co/600x400/1A1A1A/FFD700?text=E-commerce",
      projectLink: "https://ecommerce.example.com",
      codeLink: "https://github.com/codeffy/ecommerce-platform",
      tags: ["React", "Firebase", "Stripe", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for visualizing and analyzing business metrics in real-time.",
      imgUrl: "https://placehold.co/600x400/1A1A1A/FFD700?text=Analytics",
      projectLink: "https://analytics.example.com",
      codeLink: "https://github.com/codeffy/analytics-dashboard",
      tags: ["Vue.js", "D3.js", "WebSockets", "Node.js"]
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and transaction history.",
      imgUrl: "https://placehold.co/600x400/1A1A1A/FFD700?text=Banking+App",
      projectLink: "https://banking.example.com",
      codeLink: "https://github.com/codeffy/mobile-banking",
      tags: ["React Native", "Redux", "JWT", "Express"]
    },
    {
      id: 5,
      title: "AI-Powered Chatbot",
      description: "Intelligent customer service chatbot with natural language processing capabilities.",
      imgUrl: "https://placehold.co/600x400/1A1A1A/FFD700?text=AI+Chatbot",
      projectLink: "https://chatbot.example.com",
      codeLink: "https://github.com/codeffy/ai-chatbot",
      tags: ["Python", "TensorFlow", "NLP", "Flask", "React"]
    },
    {
      id: 6,
      title: "Supply Chain Management System",
      description: "End-to-end supply chain solution with inventory tracking and supplier management.",
      imgUrl: "https://placehold.co/600x400/1A1A1A/FFD700?text=Supply+Chain",
      projectLink: "https://supply-chain.example.com",
      codeLink: "https://github.com/codeffy/supply-chain",
      tags: ["Angular", "TypeScript", "MySQL", "Docker"]
    }
  ];

  // List of all unique tags for filter buttons
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleProjectFilter = (tag) => {
    setActiveFilter(tag);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      
      if (tag === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.tags.includes(tag)));
      }
    }, 500);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container mx-auto px-4 py-16">
        <div className="section-header">
          <h2 className="section-title">Our <span className="text-mustard">Projects</span></h2>
          <p className="section-subtitle">Showcasing our expertise in delivering cutting-edge solutions</p>
        </div>

        <div className="filter-buttons">
          {allTags.map((tag, index) => (
            <button
              key={index}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => handleProjectFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div 
          className="projects-grid"
          style={{ 
            transform: `translateY(${animateCard.y}px)`,
            opacity: animateCard.opacity,
            transition: 'all 0.5s ease'
          }}
        >
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.imgUrl} alt={project.title} />
                <div className="project-hover">
                  <div className="project-links">
                    <a href={project.projectLink} target="_blank" rel="noreferrer" className="project-link">
                      <FiExternalLink />
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noreferrer" className="project-link">
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default Project;
