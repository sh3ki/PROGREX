'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CodeBracketIcon, CloudIcon, DevicePhoneMobileIcon, ChartBarIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web Development',
    description: 'Build modern, responsive websites with cutting-edge technologies that drive engagement and conversions.',
    gradient: 'from-purple-400 to-purple-700',
  },
  {
    icon: CpuChipIcon,
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence to automate processes and gain valuable insights.',
    gradient: 'from-purple-500 to-purple-800',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions that grow with your business needs.',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation strategies that align with your business goals.',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    gradient: 'from-purple-400 to-purple-800',
  },
  {
    icon: ChartBarIcon,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    gradient: 'from-purple-600 to-purple-900',
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
    <section id="services" className="section-shell relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl opacity-30" />
      
      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">
            Our <span className="section-title-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            End-to-end technology solutions built to solve real business problems with speed, quality, and scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gradient-border group cursor-pointer"
            >
              <div className="gradient-border-inner h-full flex flex-col">
                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 group-hover:gap-4"
                >
                  <span>Discuss Service</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-lg"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
