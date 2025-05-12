import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCode, FaMobile, FaPalette, FaCloud, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: 'Web Development',
      description: 'We build responsive, high-performance websites and web applications tailored to your business needs.',
      imgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "Web Development",
      heading: "Digital Experiences That Perform",
      details: "Our web development team creates custom solutions that combine cutting-edge technology with intuitive design. We specialize in scalable architectures, progressive web apps, and headless CMS implementations that deliver exceptional user experiences across all devices."
    },
    {
      icon: <FaMobile size={40} />,
      title: 'Mobile App Development',
      description: 'Our team creates native and cross-platform mobile applications for iOS and Android devices.',
      imgUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "Mobile Development",
      heading: "Apps That Transform Industries",
      details: "From concept to launch, our mobile development experts craft applications that engage users and drive business growth. We leverage React Native, Flutter, and native development frameworks to build high-performance apps with seamless user experiences and robust functionality."
    },
    {
      icon: <FaPalette size={40} />,
      title: 'UI/UX Design',
      description: 'We design intuitive and engaging user interfaces that provide exceptional user experiences.',
      imgUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      subheading: "UI/UX Design",
      heading: "Interfaces That Inspire",
      details: "Our design philosophy centers on creating intuitive, accessible, and visually stunning interfaces. We combine user research, wireframing, prototyping, and usability testing to deliver designs that not only look beautiful but also drive conversion and enhance user satisfaction."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-intro">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">Transforming ideas into digital reality with cutting-edge technology</p>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-color">
        {services.map((service, index) => (
          <TextParallaxContent
            key={index}
            imgUrl={service.imgUrl}
            subheading={service.subheading}
            heading={service.heading}
            icon={service.icon}
          >
            <ServiceContent 
              title={service.title}
              description={service.details}
              icon={service.icon}
              index={index}
            />
          </TextParallaxContent>
        ))}
      </div>
      
      <div className="additional-services py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FaCloud size={40} />}
              title="Cloud Solutions"
              description="We offer cloud migration, infrastructure setup, and optimization services to enhance your operations."
            />
            <ServiceCard 
              icon={<FaChartLine size={40} />}
              title="IT Consulting"
              description="Our experts provide strategic advice to help you leverage technology for business growth."
            />
            <ServiceCard 
              icon={<FaShieldAlt size={40} />}
              title="Cybersecurity"
              description="We implement robust security measures to protect your digital assets from potential threats."
            />
          </div>
          
          <div className="text-center mt-16">
            <button className="btn-primary">
              <span>EXPLORE ALL SERVICES</span>
              <FiArrowUpRight className="btn-icon inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children, icon }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className="parallax-container"
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} icon={icon} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, icon }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <div className="service-icon-overlay mb-4 text-mustard">
        {icon}
      </div>
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl text-mustard">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl max-w-4xl">{heading}</p>
    </motion.div>
  );
};

const ServiceContent = ({ title, description, icon, index }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-silver">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl text-light-grey md:text-2xl">
        {description}
      </p>
      <button className={index % 2 === 0 ? "btn-primary" : "btn-secondary"}>
        <span>Learn more</span>
        <FiArrowUpRight className="btn-icon inline-block ml-2" />
      </button>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-card-icon">
      {icon}
    </div>
    <h3 className="service-card-title">{title}</h3>
    <p className="service-card-desc">{description}</p>
    <div className="service-card-link">
      <span>Explore</span>
      <FiArrowUpRight />
    </div>
  </div>
);

export default Services;
