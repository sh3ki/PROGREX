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

const servicesList = [
  {
    icon: '\u2699\uFE0F', title: 'Custom Software Development', color: 'from-[#831DC6] to-[#560BAD]',
    desc: 'Tailored software built from scratch to solve your unique business challenges. We architect robust, scalable systems perfectly aligned with your workflows.',
    process: ['Requirements Gathering', 'Architecture Design', 'Development', 'Testing & QA', 'Deployment', 'Maintenance'],
    tech: ['Python', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis'],
  },
  {
    icon: '\u{1F310}', title: 'Web Development', color: 'from-[#560BAD] to-[#4361EE]',
    desc: 'Modern, responsive websites and web applications that drive engagement and convert visitors into customers. Built with cutting-edge front-end and back-end technologies.',
    process: ['Wireframing', 'UI/UX Design', 'Frontend Dev', 'Backend Dev', 'Testing', 'Launch'],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  },
  {
    icon: '\u{1F4F1}', title: 'Mobile App Development', color: 'from-[#4361EE] to-[#3A0CA3]',
    desc: 'Cross-platform iOS and Android apps with native-like performance. From concept to App Store — we handle everything including design, development, and submission.',
    process: ['App Planning', 'UI Design', 'Development', 'Device Testing', 'Store Submission', 'Updates'],
    tech: ['Flutter', 'React Native', 'Firebase', 'iOS', 'Android', 'REST APIs'],
  },
  {
    icon: '\u{1F517}', title: 'System Integration', color: 'from-[#3A0CA3] to-[#831DC6]',
    desc: 'Connect your existing tools, automate workflows, and eliminate data silos. We build middleware, APIs, and integration layers that make your tech ecosystem work as one.',
    process: ['Systems Audit', 'Integration Design', 'API Development', 'Testing', 'Migration', 'Go-Live'],
    tech: ['REST APIs', 'GraphQL', 'Webhooks', 'Zapier', 'n8n', 'Message Queues'],
  },
  {
    icon: '\u{1F393}', title: 'Academic / Capstone Systems', color: 'from-[#831DC6] to-[#4361EE]',
    desc: 'Comprehensive thesis and capstone system development — from ideation to documentation. We help students build impressive, functional systems that earn top marks.',
    process: ['Topic Planning', 'System Design', 'Development', 'Documentation', 'Presentation Prep', 'Defense Support'],
    tech: ['React', 'Laravel', 'MySQL', 'Python', 'Arduino', 'Machine Learning'],
  },
  {
    icon: '\u{1F6E1}\uFE0F', title: 'IT Consulting / Infrastructure', color: 'from-[#4361EE] to-[#831DC6]',
    desc: 'Expert technology guidance to help you make the right decisions. From cloud migration to digital transformation strategy — we provide clarity in a complex tech landscape.',
    process: ['Business Analysis', 'Tech Assessment', 'Strategy Design', 'Implementation', 'Training', 'Ongoing Support'],
    tech: ['AWS', 'Azure', 'GCP', 'Linux', 'Networking', 'Security'],
  },
];

export default function ServicesPage() {
  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="orb orb-zaffre w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-30" />
        <div className="section-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="section-eyebrow">What We Offer</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title mt-3">Our <span className="gradient-text">Services</span></motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mt-4 text-lg">
              End-to-end technology services designed to help businesses grow, automate, and win in the digital era.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section-shell">
        <div className="section-container">
          <div className="space-y-6">
            {servicesList.map((s, i) => (
              <Section key={s.title}>
                <motion.div variants={fadeUp}>
                  <div className={`glow-card shimmer-card group p-8 ${i % 2 === 1 ? 'section-alt' : ''}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left */}
                      <div className="lg:col-span-1 flex flex-col gap-5">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-3xl shadow-xl`}>{s.icon}</div>
                        <h2 className="text-white font-bold text-xl group-hover:text-[#CFA3EA] transition-colors">{s.title}</h2>
                        <p className="text-[#CFA3EA]/60 text-sm leading-relaxed">{s.desc}</p>
                        <Link href="/contact" className="btn-primary text-xs py-2.5 w-fit">
                          <span>Request Proposal</span>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'12px',height:'12px'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                      </div>
                      {/* Middle: Process */}
                      <div className="lg:col-span-1">
                        <h4 className="text-[#CFA3EA] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="circuit-dot" />Our Process
                        </h4>
                        <ol className="space-y-3">
                          {s.process.map((p, idx) => (
                            <li key={p} className="flex items-center gap-3 text-sm text-[#CFA3EA]/65 group/step">
                              <div className="step-number text-xs">{String(idx+1).padStart(2,'0')}</div>
                              <span className="group-hover/step:text-[#CFA3EA] transition-colors duration-200">{p}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      {/* Right: Tech */}
                      <div className="lg:col-span-1">
                        <h4 className="text-[#CFA3EA] font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="circuit-dot" />Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {s.tech.map((t) => (
                            <span key={t} className="tech-pill">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell section-alt relative overflow-hidden">
        <div className="orb orb-violet w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="section-container relative z-10 text-center">
          <Section className="max-w-2xl mx-auto">
            <motion.span variants={fadeUp} className="section-eyebrow">Start Today</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">Need a <span className="gradient-text">Custom Solution?</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mt-4">Tell us about your project and we will craft a personalized proposal within 24 hours.</motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm px-10 py-4">
                <span>Request a Proposal</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'16px',height:'16px',flexShrink:0}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/projects" className="btn-outline text-sm px-10 py-4">See Our Portfolio</Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </main>
  );
}
