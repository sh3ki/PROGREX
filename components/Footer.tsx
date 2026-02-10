'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', id: 'hero' },
      { name: 'Services', id: 'services' },
      { name: 'Projects', id: 'projects' },
      { name: 'Blogs', id: 'blogs' },
      { name: 'About', id: 'about' },
    ],
    'Services': [
      'Web Development',
      'AI Solutions',
      'Cloud Infrastructure',
      'Mobile Apps',
      'Data Analytics',
    ],
    'Resources': [
      'Documentation',
      'Blog',
      'Case Studies',
      'FAQs',
      'Contact',
    ],
  };

  return (
    <footer ref={ref} className="relative bg-dark border-t border-dark-tertiary overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, #7C3AED 25%, transparent 25%, transparent 75%, #7C3AED 75%, #7C3AED), 
                             linear-gradient(45deg, #7C3AED 25%, transparent 25%, transparent 75%, #7C3AED 75%, #7C3AED)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        ></motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                PROGREX
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Technology Solutions That Drive Success. Empowering businesses with cutting-edge technology and innovative solutions.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-dark-secondary border border-dark-tertiary rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="#"
                className="w-10 h-10 bg-dark-secondary border border-dark-tertiary rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="#"
                className="w-10 h-10 bg-dark-secondary border border-dark-tertiary rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.name}>
                    {typeof link === 'string' ? (
                      <a href="#" className="text-gray-400 hover:text-primary-light transition-colors duration-300 block relative group">
                        {link}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-purple group-hover:w-full transition-all duration-300"></span>
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-400 hover:text-primary-light transition-colors duration-300 block relative group text-left"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-purple group-hover:w-full transition-all duration-300"></span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-dark-tertiary"
        >
          <div className="h-0.5 w-full bg-gradient-purple mb-8 opacity-50"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2026 ProgreX. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary-light transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-light transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
