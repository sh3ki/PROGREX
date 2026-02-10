'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CodeBracketIcon, CloudIcon, DevicePhoneMobileIcon, ChartBarIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web Development',
    description: 'Build modern, responsive websites with cutting-edge technologies that drive engagement and conversions.',
  },
  {
    icon: CpuChipIcon,
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence to automate processes and gain valuable insights.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions that grow with your business needs.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation strategies that align with your business goals.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
  },
  {
    icon: ChartBarIcon,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20 bg-dark overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)',
              }}
              className="group relative bg-dark-secondary border border-dark-tertiary rounded-xl p-8 hover:border-primary-light transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mb-6 bg-gradient-purple rounded-lg flex items-center justify-center"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a href="#" className="inline-flex items-center text-primary-light hover:text-accent transition-colors duration-300">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gradient-purple hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
