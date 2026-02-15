'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blogs', id: 'blogs' },
    { name: 'About', id: 'about' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0118]/80 backdrop-blur-2xl shadow-lg shadow-purple-900/20'
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(168, 85, 247, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="w-full max-w-[1320px] mx-auto px-6 md:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl ring-2 ring-purple-400/30">
                <span className="text-white font-bold text-xl">P</span>
              </div>
            </div>
            <span className="text-2xl md:text-3xl font-bold gradient-text">
              PROGREX
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-gray-300 font-semibold text-base hover:text-white transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full" />
                <span className="absolute inset-0 rounded-lg bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex btn-primary"
            >
              <span>Start Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>

            <button
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border-2 border-purple-500/50 text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-6 glass-card p-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-white font-semibold hover:bg-purple-500/20 transition-all duration-300 border border-transparent hover:border-purple-500/30"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-primary mt-4"
                >
                  <span>Start Project</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
