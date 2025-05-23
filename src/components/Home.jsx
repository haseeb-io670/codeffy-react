import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Project from './Projects/Project';
import FAQ from './FAQs/FAQs';
import Pricing from './Pricing/Pricing';  
import Contact from './Contact/Contact';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Project />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;