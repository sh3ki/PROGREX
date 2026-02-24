'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] as [number,number,number,number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>{children}</motion.div>;
}

const values = [
  { icon: '\u{1F3C6}', title: 'Excellence', desc: 'We hold ourselves to the highest standards in every project we deliver.' },
  { icon: '\u{1F4A1}', title: 'Innovation', desc: 'We embrace new technologies and creative thinking to solve complex problems.' },
  { icon: '\u{1F91D}', title: 'Integrity', desc: 'We operate with transparency, honesty, and accountability in everything.' },
  { icon: '\u2764\uFE0F', title: 'Client-First', desc: 'Your success is our success — we prioritize your goals at every stage.' },
  { icon: '\u26A1', title: 'Reliability', desc: 'We deliver on time, on budget, and on scope — every single time.' },
  { icon: '\u{1F310}', title: 'Collaboration', desc: 'We work as a unified extension of your team, not just an external vendor.' },
];

const team = [
  { name: 'John Reyes', pos: 'CEO & Founder', bio: '10+ years in software engineering. Visionary leader driving ProgreX forward.', initials: 'JR', color: 'from-[#831DC6] to-[#560BAD]' },
  { name: 'Ana Lim', pos: 'Lead Developer', bio: 'Full-stack expert with mastery in React, Node.js, and cloud architecture.', initials: 'AL', color: 'from-[#4361EE] to-[#3A0CA3]' },
  { name: 'Carlo Mendoza', pos: 'UI/UX Designer', bio: 'Design systems specialist crafting intuitive and beautiful user experiences.', initials: 'CM', color: 'from-[#560BAD] to-[#4361EE]' },
  { name: 'Therese Garcia', pos: 'Project Manager', bio: 'Agile certified PM ensuring projects are delivered smoothly and on time.', initials: 'TG', color: 'from-[#3A0CA3] to-[#831DC6]' },
];

const process = [
  { step: '01', title: 'Discovery & Planning', desc: 'We start by understanding your business, goals, and target audience to craft a precise project roadmap.' },
  { step: '02', title: 'Design & Prototype', desc: 'Our designers create wireframes and high-fidelity prototypes for your review and approval before any coding begins.' },
  { step: '03', title: 'Development', desc: 'Our engineers build your product using best practices, clean code, and modern technology stacks.' },
  { step: '04', title: 'Testing & QA', desc: 'Rigorous testing across devices and scenarios ensures a bug-free, performant product launch.' },
  { step: '05', title: 'Launch & Deploy', desc: 'We handle deployment, configuration, and go-live support for a smooth and successful launch.' },
  { step: '06', title: 'Support & Growth', desc: 'Post-launch, we provide ongoing maintenance, feature enhancements, and performance monitoring.' },
];

export default function AboutPage() {
  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="orb orb-violet w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="section-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="section-eyebrow">Who We Are</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title mt-3">About <span className="gradient-text">ProgreX</span></motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mt-4 text-lg">
              We are a team of passionate developers, designers, and consultants dedicated to building world-class digital products for businesses of all sizes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="section-shell section-alt">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Section>
              <motion.span variants={fadeUp} className="section-eyebrow">Our Story</motion.span>
              <motion.h2 variants={fadeUp} className="section-title mt-3">Built with <span className="gradient-text">Purpose</span></motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 mt-6">
                <p className="text-[#CFA3EA]/65 leading-relaxed">
                  ProgreX was founded with a simple mission: to make enterprise-grade technology accessible to every business — from startups to established corporations. We saw a gap between the quality of software being built globally and what was available locally in the Philippines.
                </p>
                <p className="text-[#CFA3EA]/65 leading-relaxed">
                  Since our founding, we have delivered over 200 projects across education, healthcare, agriculture, e-commerce, and more. We combine global best practices with deep understanding of the local market to deliver solutions that truly work.
                </p>
                <p className="text-[#CFA3EA]/65 leading-relaxed">
                  Today, ProgreX is trusted by businesses, schools, startups, and government agencies to build and maintain their most critical digital systems.
                </p>
              </motion.div>
            </Section>
            <Section className="grid grid-cols-2 gap-4">
              {[{n:'200+',l:'Projects Delivered'},{n:'98%',l:'Satisfaction Rate'},{n:'5+',l:'Years Experience'},{n:'50+',l:'Expert Team'}].map((s) => (
                <motion.div key={s.l} variants={fadeUp} className="stat-card">
                  <div className="stat-number">{s.n}</div>
                  <p className="stat-label">{s.l}</p>
                </motion.div>
              ))}
            </Section>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-shell">
        <div className="section-container">
          <Section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp}>
              <div className="glow-card p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#831DC6] to-[#560BAD] flex items-center justify-center text-2xl mb-5 shadow-lg">🎯</div>
                <h3 className="text-white font-bold text-xl mb-3">Our Mission</h3>
                <p className="text-[#CFA3EA]/65 leading-relaxed">
                  To empower organizations through innovative, reliable, and beautifully designed software solutions that drive real business impact and lasting competitive advantage.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="glow-card p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4361EE] to-[#3A0CA3] flex items-center justify-center text-2xl mb-5 shadow-lg">🔭</div>
                <h3 className="text-white font-bold text-xl mb-3">Our Vision</h3>
                <p className="text-[#CFA3EA]/65 leading-relaxed">
                  To become the most trusted technology partner in Southeast Asia — known for exceptional quality, a people-first culture, and technology that changes lives and transforms industries.
                </p>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">What Drives Us</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Our Core <span className="gradient-text">Values</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">The principles that guide every decision, every line of code, and every client relationship.</motion.p>
          </Section>
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <div className="glass-card shimmer-card group h-full p-6 flex flex-col gap-4">
                  <div className="text-3xl">{v.icon}</div>
                  <h3 className="text-white font-bold text-base group-hover:text-[#CFA3EA] transition-colors">{v.title}</h3>
                  <p className="text-[#CFA3EA]/55 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-shell">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">The People</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Meet the <span className="gradient-text">Team</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">Talented individuals united by a shared passion for great technology and great work.</motion.p>
          </Section>
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <motion.div key={m.name} variants={fadeUp}>
                <div className="glass-card shimmer-card group h-full p-6 flex flex-col items-center text-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-xl ring-2 ring-[#831DC6]/30`}>
                    <span className="text-white font-black text-2xl">{m.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base group-hover:text-[#CFA3EA] transition-colors">{m.name}</h3>
                    <p className="text-[#4361EE] text-xs font-semibold mt-0.5">{m.pos}</p>
                  </div>
                  <p className="text-[#CFA3EA]/55 text-sm leading-relaxed">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">How We Work</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Our <span className="gradient-text">Process</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">A structured, transparent approach to turning ideas into reality.</motion.p>
          </Section>
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p) => (
              <motion.div key={p.step} variants={fadeUp}>
                <div className="glass-card shimmer-card group h-full p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="step-number">{p.step}</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#831DC6]/40 to-transparent" />
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-[#CFA3EA] transition-colors">{p.title}</h3>
                  <p className="text-[#CFA3EA]/55 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* WHY US CTA */}
      <section className="section-shell relative overflow-hidden">
        <div className="orb orb-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="section-container relative z-10 text-center">
          <Section className="max-w-2xl mx-auto">
            <motion.span variants={fadeUp} className="section-eyebrow">Work With Us</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">Ready to <span className="gradient-text">Partner With Us?</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mt-4">Let us show you what a great technology partner looks like. Start a conversation today.</motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm px-10 py-4">
                <span>Get in Touch</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'16px',height:'16px',flexShrink:0}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/projects" className="btn-outline text-sm px-10 py-4">See Our Work</Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </main>
  );
}
