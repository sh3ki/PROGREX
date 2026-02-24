'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] as [number,number,number,number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>{children}</motion.div>;
}

const categories = ['All', 'Tech', 'Business', 'Academic', 'Case Studies', 'Development'];

const posts = [
  { id: 1, title: 'How We Built a Real-Time LMS for 5,000 Students', cat: 'Case Studies', readTime: '8 min read', date: 'July 10, 2025', author: 'Mark Rivera', excerpt: 'A deep dive into the technical architecture behind BrainBridge LMS — from WebRTC live classes to automated grading pipelines.', accent: '#831DC6', featured: true },
  { id: 2, title: 'Why Every Philippine SME Needs a Custom POS System', cat: 'Business', readTime: '5 min read', date: 'July 3, 2025', author: 'Ava Santos', excerpt: 'Off-the-shelf POS tools come with hidden costs and limitations. We explore why custom-built POS systems pay off in just 6 months.', accent: '#4361EE', featured: false },
  { id: 3, title: 'IoT + Agriculture: Our AgriSmart Project Breakdown', cat: 'Tech', readTime: '10 min read', date: 'June 25, 2025', author: 'Luis Bautista', excerpt: 'How we connected Arduino sensors, MQTT, and machine learning to help 120+ rice farmers in Nueva Ecija reduce water costs by 30%.', accent: '#560BAD', featured: false },
  { id: 4, title: 'The Rise of Academic Platforms in Philippine Schools', cat: 'Academic', readTime: '6 min read', date: 'June 18, 2025', author: 'Ava Santos', excerpt: 'K-12 digitalization is accelerating in the Philippines. Here is how schools are adopting tech-driven learning management tools.', accent: '#3A0CA3', featured: false },
  { id: 5, title: 'Next.js vs. React: What to Choose for Your 2025 Project', cat: 'Development', readTime: '7 min read', date: 'June 10, 2025', author: 'Mark Rivera', excerpt: 'We compare Next.js App Router vs. traditional React SPAs — evaluating SEO, performance, and developer experience for modern web apps.', accent: '#831DC6', featured: false },
  { id: 6, title: 'Building a Clinic Management System in 4 Months', cat: 'Case Studies', readTime: '9 min read', date: 'June 1, 2025', author: 'Luis Bautista', excerpt: 'How we delivered CliniCore — a full EMR, billing, and appointment system — in four months for a private clinic in Cebu.', accent: '#4361EE', featured: false },
  { id: 7, title: 'Tailwind CSS v4: The Future of Styling for Web Apps', cat: 'Development', readTime: '5 min read', date: 'May 25, 2025', author: 'Ava Santos', excerpt: 'Tailwind CSS v4 brings native CSS variables, zero-config setup, and major performance improvements. Here is what changed and why it matters.', accent: '#560BAD', featured: false },
  { id: 8, title: 'Top 5 Tech Stacks for Philippine Startups in 2025', cat: 'Tech', readTime: '6 min read', date: 'May 18, 2025', author: 'Mark Rivera', excerpt: 'From Next.js + Supabase to Laravel + Vue, we break down the most cost-effective and scalable tech stacks for Filipino startup founders.', accent: '#3A0CA3', featured: false },
];

export default function BlogsPage() {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  const filtered = rest.filter(p => {
    const matchCat = active === 'All' || p.cat === active;
    const matchSearch = search === '' || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="orb orb-blue w-[500px] h-[500px] top-0 right-0 -translate-y-1/4 opacity-30" />
        <div className="section-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="section-eyebrow">Insights & Stories</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title mt-3">The <span className="gradient-text">ProgreX Blog</span></motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mt-4 text-lg">
              Tech insights, project breakdowns, business tips, and opinions from the ProgreX engineering team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && (
        <section className="section-shell section-alt">
          <div className="section-container">
            <Section>
              <motion.div variants={fadeUp}>
                <div className="glow-card p-1">
                  <div className="rounded-xl overflow-hidden">
                    <div className="relative h-56 md:h-72" style={{ background: `linear-gradient(135deg, ${featured.accent}40, ${featured.accent}08, #050012)` }}>
                      <div className="absolute inset-0 flex items-end p-6 md:p-10">
                        <div className="flex flex-col gap-3 max-w-2xl">
                          <div className="flex gap-2">
                            <span className="tag-violet">{featured.cat}</span>
                            <span className="tag-blue">Featured</span>
                          </div>
                          <h2 className="text-white font-black text-2xl md:text-3xl leading-snug">{featured.title}</h2>
                          <p className="text-[#CFA3EA]/65 text-sm line-clamp-2">{featured.excerpt}</p>
                          <div className="flex items-center gap-4 text-xs text-[#CFA3EA]/45">
                            <span>{featured.author}</span>
                            <span>&bull;</span>
                            <span>{featured.date}</span>
                            <span>&bull;</span>
                            <span>{featured.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Section>
          </div>
        </section>
      )}

      {/* FILTER + SEARCH + GRID */}
      <section className="section-shell">
        <div className="section-container">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setActive(c)} className={`filter-tab ${active === c ? 'active' : ''} text-xs`}>{c}</button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#CFA3EA]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                type="text" placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)}
                className="form-input pl-9 text-sm py-2.5"
              />
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3 }}>
                  <div className="glass-card shimmer-card flex flex-col h-full group overflow-hidden">
                    <div className="relative h-36" style={{ background: `linear-gradient(135deg, ${p.accent}30, ${p.accent}06)` }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl font-black opacity-10 text-white">{p.title[0]}</span>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="tag-blue text-xs">{p.cat}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <h3 className="text-white font-bold text-sm leading-snug group-hover:text-[#CFA3EA] transition-colors line-clamp-2">{p.title}</h3>
                      <p className="text-[#CFA3EA]/50 text-xs leading-relaxed flex-1 line-clamp-3">{p.excerpt}</p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#831DC6]/10">
                        <div className="text-[#CFA3EA]/40 text-xs">{p.author} &bull; {p.readTime}</div>
                        <span className="text-[#4361EE] text-xs font-semibold hover:text-[#CFA3EA] transition-colors cursor-pointer flex items-center gap-1">
                          Read
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'10px',height:'10px'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#CFA3EA]/40 text-sm">No articles match your search.</div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="section-shell section-alt relative overflow-hidden">
        <div className="orb orb-violet w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="section-container relative z-10">
          <Section className="max-w-2xl mx-auto text-center">
            <motion.span variants={fadeUp} className="section-eyebrow">Stay Updated</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">Subscribe to Our <span className="gradient-text">Newsletter</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mt-4">Get the latest articles, case studies, and tech insights — straight to your inbox. No spam, ever.</motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="form-input flex-1 text-sm" />
              <button className="btn-primary text-sm px-6 py-3 shrink-0"><span>Subscribe</span></button>
            </motion.div>
          </Section>
        </div>
      </section>
    </main>
  );
}
