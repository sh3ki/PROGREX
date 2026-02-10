'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-purple-black opacity-90"></div>
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-electric/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-accent to-primary-light bg-clip-text text-transparent"
        >
          Transform Your Business With
          <br />
          Intelligent Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Cutting-edge technology designed to drive measurable success
        </motion.p>

        {/* Floating 3D Shape */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateY: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="mx-auto mb-12 w-64 h-64 relative"
        >
          <div className="absolute inset-0 bg-gradient-purple rounded-3xl transform rotate-45 opacity-20 blur-xl"></div>
          <div className="absolute inset-8 bg-gradient-purple rounded-3xl transform -rotate-12 opacity-40"></div>
          <div className="absolute inset-16 bg-primary-light rounded-3xl opacity-60"></div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            Start Your Journey
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="border-2 border-primary-light text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light hover:border-primary-light transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('services')}
        >
          <ChevronDownIcon className="w-8 h-8 text-electric" />
        </motion.div>
      </div>
    </section>
  );
}
