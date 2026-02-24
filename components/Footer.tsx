'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Ready-Made Systems', href: '/systems' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];
const serviceLinks = [
  { name: 'Custom Software', href: '/services' },
  { name: 'Web Development', href: '/services' },
  { name: 'Mobile Apps', href: '/services' },
  { name: 'System Integration', href: '/services' },
  { name: 'Capstone Systems', href: '/services' },
  { name: 'IT Consulting', href: '/services' },
];
const socials = [
  { label: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', href: '#' },
  { label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: '#' },
  { label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', href: '#' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <footer ref={ref} className="relative overflow-hidden z-10" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(58,12,163,0.08) 50%, #050012 100%)' }}>
      {/* Top divider */}
      <div className="neon-line" />
      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 orb orb-violet opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 orb orb-blue opacity-15 pointer-events-none" />

      <div className="section-container py-18 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-14">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 group mb-5 w-fit">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#831DC6] to-[#4361EE] blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-[#831DC6] to-[#4361EE] flex items-center justify-center ring-1 ring-[#831DC6]/40">
                  <span className="text-white font-black text-base">P</span>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight gradient-text">PROGREX</span>
            </Link>
            <p className="text-[#CFA3EA]/60 text-[0.95rem] leading-relaxed mb-6 max-w-sm">
              Cutting-edge technology solutions that empower businesses to grow, automate, and thrive in the digital age.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-[#831DC6]/15 border border-[#831DC6]/30 flex items-center justify-center hover:bg-[#831DC6]/35 hover:border-[#831DC6]/60 hover:shadow-[0_0_16px_rgba(131,29,198,0.4)] transition-all duration-300 group"
                  aria-label={s.label}
                >
                  <svg className="w-4 h-4 text-[#CFA3EA]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[0.14em] flex items-center gap-2">
              <span className="circuit-dot" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-[#CFA3EA]/60 hover:text-[#CFA3EA] text-[0.95rem] transition-all duration-200 hover:translate-x-1.5 inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#4361EE] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[0.14em] flex items-center gap-2">
              <span className="circuit-dot" />
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-[#CFA3EA]/60 hover:text-[#CFA3EA] text-[0.95rem] transition-all duration-200 hover:translate-x-1.5 inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-[#4361EE] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[0.14em] flex items-center gap-2">
              <span className="circuit-dot" />
              Start a Project
            </h4>
            <div className="glass-card p-5 rounded-xl">
              <p className="text-[#CFA3EA]/65 text-[0.95rem] leading-relaxed mb-4">Have a project in mind? Let&apos;s talk about how we can help.</p>
              <Link href="/contact" className="btn-primary w-full text-xs py-2.5 justify-center">
                <span>Get a Free Quote</span>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <div className="mt-4 pt-4 border-t border-[#831DC6]/15 space-y-2">
                <a href="mailto:hello@progrex.dev" className="flex items-center gap-2 text-[#CFA3EA]/50 hover:text-[#CFA3EA] text-xs transition-colors duration-200 group">
                  <svg className="w-3.5 h-3.5 shrink-0 text-[#4361EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  hello@progrex.dev
                </a>
                <a href="tel:+639000000000" className="flex items-center gap-2 text-[#CFA3EA]/50 hover:text-[#CFA3EA] text-xs transition-colors duration-200">
                  <svg className="w-3.5 h-3.5 shrink-0 text-[#4361EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +63 900 000 0000
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#CFA3EA]/38 text-sm">© 2026 ProgreX Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[#CFA3EA]/40 hover:text-[#CFA3EA]/72 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-[#CFA3EA]/40 hover:text-[#CFA3EA]/72 text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
