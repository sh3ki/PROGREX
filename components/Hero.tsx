'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, RocketLaunchIcon, BoltIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [counters, setCounters] = useState({ projects: 0, satisfaction: 0, years: 0 });

  useEffect(() => {
    const animateCounter = (target: number, key: 'projects' | 'satisfaction' | 'years') => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    setTimeout(() => {
      animateCounter(200, 'projects');
      animateCounter(98, 'satisfaction');
      animateCounter(15, 'years');
    }, 500);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="glow-orb absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="glow-orb absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-600"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="glow-orb absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 section-container pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="section-badge">
            <SparklesIcon className="inline w-4 h-4 mr-2" />
            Software Company Portfolio
          </span>
        </motion.div>

        {/* Main Heading with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-center mb-6"
        >
          <span className="block text-white">Build Faster.</span>
          <span className="block section-title-gradient">Scale Smarter.</span>
          <span className="block text-white">Win with ProgreX.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          We design and engineer <span className="gradient-text font-semibold">modern digital products</span> that help ambitious companies launch quickly, operate efficiently, and grow with confidence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-lg px-8 py-4"
          >
            <RocketLaunchIcon className="w-6 h-6" />
            <span>Start Your Project</span>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="btn-ghost text-lg px-8 py-4"
          >
            <BoltIcon className="w-6 h-6" />
            <span>Explore Services</span>
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            { label: 'Projects Delivered', value: counters.projects, suffix: '+', icon: '🚀' },
            { label: 'Client Satisfaction', value: counters.satisfaction, suffix: '%', icon: '⭐' },
            { label: 'Years Experience', value: counters.years, suffix: '+', icon: '💎' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="glass-card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {item.value}{item.suffix}
              </p>
              <p className="text-sm md:text-base text-gray-400 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('services')}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400 font-medium">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-purple-500 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-purple-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
