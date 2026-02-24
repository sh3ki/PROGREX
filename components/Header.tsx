'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Systems', href: '/systems' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl ring-2 ring-purple-400/30">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold gradient-text tracking-tight">PROGREX</span>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 * (index + 1) }}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative px-3 py-2.5 font-semibold text-[0.95rem] transition-colors duration-300 group rounded-lg inline-block ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`} />
                    <span className={`absolute inset-0 rounded-lg transition-colors duration-300 ${isActive ? 'bg-purple-500/15' : 'bg-purple-500/0 group-hover:bg-purple-500/10'}`} />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.8 }}>
              <Link href="/contact" className="hidden lg:flex btn-primary">
                <span>Start Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border-2 border-purple-500/50 text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden overflow-hidden">
              <div className="mt-4 glass-card p-5 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: 0.04 * index }}>
                      <Link href={item.href} onClick={() => setIsMenuOpen(false)} className={`block w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 border text-[0.95rem] ${isActive ? 'text-white bg-purple-500/20 border-purple-500/50' : 'text-gray-300 hover:text-white hover:bg-purple-500/15 border-transparent hover:border-purple-500/30'}`}>
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="pt-2">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="flex w-full btn-primary text-sm">
                    <span>Start Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
