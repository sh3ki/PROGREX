'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Revolution',
    category: 'E-commerce',
    description: 'Complete digital transformation of a retail giant with seamless shopping experience.',
    stats: '40% increase in engagement',
    users: '3M+ users',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    gradient: 'from-purple-500 to-purple-800',
  },
  {
    title: 'FinTech Platform',
    category: 'Fintech',
    description: 'Revolutionary payment processing system with blockchain integration.',
    stats: '10M+ transactions/month',
    users: '500K+ users',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    gradient: 'from-purple-400 to-purple-700',
  },
  {
    title: 'Healthcare SaaS',
    category: 'SaaS',
    description: 'Cloud-based patient management system transforming healthcare delivery.',
    stats: '99.9% uptime',
    users: '2M+ patients',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    gradient: 'from-purple-600 to-purple-900',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'Analytics',
    description: 'Real-time business intelligence platform powered by machine learning.',
    stats: '85% faster insights',
    users: '10K+ businesses',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    gradient: 'from-purple-400 to-purple-800',
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
    <section id="projects" className="section-shell relative">
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl opacity-40" />
      
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">Our Work</span>
          <h2 className="section-title">
            Featured <span className="section-title-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Selected outcomes for teams that needed reliable engineering and measurable business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group gradient-border cursor-pointer"
            >
              <div className="gradient-border-inner p-0 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <button className="btn-primary">
                      View Case Study
                    </button>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                      <span className="text-sm">{project.stats}</span>
                    </div>
                    <div className="flex items-center gap-2 text-pink-400 font-semibold">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-sm">{project.users}</span>
                    </div>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Discuss Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
