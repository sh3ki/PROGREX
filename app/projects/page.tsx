'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] as [number,number,number,number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>{children}</motion.div>;
}

const filters = ['All', 'Web', 'Mobile', 'Enterprise', 'Academic', 'E-Commerce'];

const allProjects = [
  { title: 'BrainBridge LMS', cat: 'Web', industry: 'Education', filter: 'Web', desc: 'Comprehensive learning management system for universities with live classes, assignments, automated grading, and analytics.', slug: 'brainbridge-lms', accent: '#831DC6' },
  { title: 'HealthTrack Pro', cat: 'Web & Mobile', industry: 'Healthcare', filter: 'Mobile', desc: 'Hospital patient management system with appointment booking, medical records, billing, and real-time bed availability.', slug: 'healthtrack-pro', accent: '#4361EE' },
  { title: 'AgriSmart', cat: 'Web', industry: 'Agriculture', filter: 'Web', desc: 'Smart farming analytics with IoT sensor integration for real-time crop monitoring, yield prediction, and farm automation.', slug: 'agrismart-dashboard', accent: '#560BAD' },
  { title: 'ShopWave E-Commerce', cat: 'Web', industry: 'E-Commerce', filter: 'E-Commerce', desc: 'Full-featured Philippine e-commerce platform with GCash integration, seller dashboard, and real-time inventory sync.', slug: 'shopwave-ecommerce', accent: '#3A0CA3' },
  { title: 'CommunityConnect', cat: 'Mobile', industry: 'Government', filter: 'Mobile', desc: 'Barangay civic engagement mobile app for filing concerns, announcements, events, and government service requests.', slug: 'community-connect', accent: '#831DC6' },
  { title: 'RetailFlow POS', cat: 'Enterprise', industry: 'Retail', filter: 'Enterprise', desc: 'Multi-branch enterprise POS and ERP system for retail chains with real-time analytics and centralized inventory management.', slug: 'retailflow-pos', accent: '#4361EE' },
  { title: 'ThesisHub Platform', cat: 'Web', industry: 'Academic', filter: 'Academic', desc: 'Capstone and thesis management platform connecting students, advisors, and panelists with document management and scheduling.', slug: 'thesishub', accent: '#560BAD' },
  { title: 'LogiTrack', cat: 'Enterprise', industry: 'Logistics', filter: 'Enterprise', desc: 'Real-time logistics tracking platform with route optimization, driver dispatch, and delivery proof via mobile scan.', slug: 'logitrack', accent: '#3A0CA3' },
  { title: 'EduQuest LMS', cat: 'Web', industry: 'Academic', filter: 'Academic', desc: 'K-12 gamified learning platform with interactive quizzes, progress tracking, parent reports, and teacher dashboards.', slug: 'eduquest-lms', accent: '#831DC6' },
];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.filter === active);

  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="orb orb-blue w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-30" />
        <div className="section-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="section-eyebrow">Our Work</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title mt-3">Project <span className="gradient-text">Portfolio</span></motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mt-4 text-lg">
              A showcase of the digital products we have built — across industries, platforms, and technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-container">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)} className={`filter-tab ${active === f ? 'active' : ''}`}>{f}</button>
            ))}
          </div>

          {/* Projects grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-card shimmer-card group h-full flex flex-col overflow-hidden">
                    <div className="relative h-44" style={{ background: `linear-gradient(135deg, ${p.accent}30, ${p.accent}08)` }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl font-black opacity-10 text-white">{p.title[0]}</span>
                      </div>
                      {/* Glowing overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(ellipse at center, ${p.accent}20, transparent 70%)` }} />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="tag-violet">{p.cat}</span>
                        <span className="tag-blue">{p.industry}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <h3 className="text-white font-bold text-base group-hover:text-[#CFA3EA] transition-colors">{p.title}</h3>
                      <p className="text-[#CFA3EA]/55 text-sm leading-relaxed flex-1">{p.desc}</p>
                      <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-[#4361EE] hover:text-[#CFA3EA] transition-colors mt-auto border border-[#4361EE]/25 hover:border-[#831DC6]/50 rounded-lg px-3 py-2 hover:bg-[#831DC6]/10">
                        View Case Study
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'12px',height:'12px'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#CFA3EA]/40">No projects in this category.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell section-alt relative overflow-hidden">
        <div className="orb orb-violet w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="section-container relative z-10 text-center">
          <Section className="max-w-2xl mx-auto">
            <motion.span variants={fadeUp} className="section-eyebrow">Let&apos;s Create Something</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">Have a <span className="gradient-text">Project in Mind?</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mt-4">We are actively taking on new projects. Let us build something amazing together.</motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm px-10 py-4">
                <span>Start Your Project</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'16px',height:'16px',flexShrink:0}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/services" className="btn-outline text-sm px-10 py-4">View Our Services</Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </main>
  );
}
