import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Alexandra Smith',
      title: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: "Codeffy transformed our outdated platforms into sleek, high-performing digital experiences. Their team's technical expertise and attention to detail exceeded our expectations. The new system has increased our user engagement by 45% and significantly improved our conversion rates.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'CTO, GlobalEx',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Working with Codeffy has been a game-changer for our startup. Their development team brought our mobile app concept to life with impeccable coding standards and innovative solutions. The app has received outstanding reviews and has been crucial to our early success.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sophia Chen',
      title: 'Product Manager, FutureLab',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: "Codeffy's UI/UX design team reimagined our product interface, creating an intuitive and visually stunning experience. The thoughtful design process and attention to user feedback resulted    in a 60% reduction in user onboarding time and significantly higher user retention.",
      rating: 5,
    },
    {
      id: 4,
      name: 'David Washington',
      title: 'COO, Innovatech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: "The cloud infrastructure solution implemented by Codeffy has revolutionized our operations. Their team's expertise in scalable architecture and security protocols ensured a smooth transition with zero downtime. We've seen a 30% reduction in operational costs since implementation.",
      rating: 4,
    }
  ];

  // Stagger animation for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="testimonials-title">Client Testimonials</motion.h2>
          <motion.p variants={itemVariants} className="testimonials-subtitle">
            Discover what our clients have to say about our exceptional services and solutions
          </motion.p>
        </motion.div>

        <div className="testimonials-slider-container">
          <div className="custom-swiper-navigation">
            <div className="swiper-button swiper-button-prev">
              <FiArrowLeft />
            </div>
            <div className="swiper-button swiper-button-next">
              <FiArrowRight />
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 2}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="testimonial-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-text">"{testimonial.text}"</div>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-title">{testimonial.title}</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary">
            <span>View All Case Studies</span>
            <FiArrowRight className="btn-icon" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
