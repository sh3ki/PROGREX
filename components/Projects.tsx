'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Revolution',
    category: 'E-commerce',
    description: 'Complete digital transformation of a retail giant with seamless shopping experience.',
    stats: '40% increase in engagement',
    users: '3M+ users',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
  },
  {
    title: 'FinTech Platform',
    category: 'Fintech',
    description: 'Revolutionary payment processing system with blockchain integration.',
    stats: '10M+ transactions/month',
    users: '500K+ users',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  },
  {
    title: 'Healthcare SaaS',
    category: 'SaaS',
    description: 'Cloud-based patient management system transforming healthcare delivery.',
    stats: '99.9% uptime',
    users: '2M+ patients',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'Analytics',
    description: 'Real-time business intelligence platform powered by machine learning.',
    stats: '85% faster insights',
    users: '10K+ businesses',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-dark to-dark-secondary overflow-hidden">
      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what we've built for industry leaders
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-dark-secondary rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent flex items-end p-6"
                >
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-gradient-purple text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  >
                    View Case Study
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center text-accent">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    {project.stats}
                  </div>
                  <div className="flex items-center text-accent">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    {project.users}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            See More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
