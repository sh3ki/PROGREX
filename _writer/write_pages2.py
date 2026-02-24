"""Write Projects, Case Study, Systems, Blogs, Contact pages"""
import os

BASE = r"c:\Users\USER\Documents\SYSTEMS\WEB\NEXTJS\PROGREX"

# ═══════════ PROJECTS PAGE ═══════════════════════════════════
projects_tsx = r"""'use client';

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
"""

# ═══════════ CASE STUDY PAGE ═══════════════════════════════════
casestudy_tsx = r"""'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] as [number,number,number,number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>{children}</motion.div>;
}

const projectData: Record<string, {
  title: string; industry: string; cat: string; timeline: string; team: string;
  overview: string; challenge: string; solution: string;
  tech: string[]; results: {metric: string; label: string}[];
  testimonial: {quote: string; name: string; pos: string};
  accent: string;
}> = {
  'brainbridge-lms': {
    title: 'BrainBridge LMS', industry: 'Education', cat: 'Web Application', timeline: '3 months', team: '4 engineers',
    accent: '#831DC6',
    overview: 'BrainBridge is a full-featured Learning Management System built for a private university in Manila. The platform handles over 5,000 students with live classes, assignment management, automated grading, and real-time analytics for faculty and administrators.',
    challenge: 'The university was using outdated manual systems for grade submission and attendance, causing significant delays during enrollment and exam periods. Faculty had no centralized tool for class management, and students had no unified portal for course materials.',
    solution: 'We built a modern, cloud-based LMS with a React + Next.js frontend and a Node.js + PostgreSQL backend. The system features real-time class sessions via WebRTC, automated grade computation, a parent monitoring portal, and bulk reporting tools for the registrar.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Redis', 'Tailwind CSS'],
    results: [
      {metric: '5,000+', label: 'Active Students'},
      {metric: '40%', label: 'Faster Grade Processing'},
      {metric: '98%', label: 'Faculty Adoption Rate'},
      {metric: '3 months', label: 'Delivery Timeline'},
    ],
    testimonial: { quote: 'ProgreX transformed our outdated manual systems into a world-class platform. The LMS exceeded every expectation and our faculty love using it daily.', name: 'Dr. Anna Villanueva', pos: 'Registrar, Metro Manila University' },
  },
  'healthtrack-pro': {
    title: 'HealthTrack Pro', industry: 'Healthcare', cat: 'Web & Mobile', timeline: '5 months', team: '5 engineers',
    accent: '#4361EE',
    overview: 'HealthTrack Pro is a comprehensive hospital management system deployed at a 200-bed private hospital. It manages patient admissions, appointments, medical records, billing, pharmacy, and real-time bed availability monitoring.',
    challenge: 'The hospital relied on paper-based records and outdated spreadsheets, leading to billing errors, lost patient records, and long patient waiting times. The billing department had no automated system leading to revenue leakage.',
    solution: 'We developed a HIPAA-compliant web and mobile system with separate portals for patients, doctors, nurses, billing staff, and administrators. The mobile app allows patients to book appointments and view their records, while staff get real-time room and bed dashboards.',
    tech: ['React', 'Flutter', 'Laravel', 'MySQL', 'Firebase', 'AWS', 'REST APIs', 'PDF Generation'],
    results: [
      {metric: '60%', label: 'Reduced Waiting Time'},
      {metric: '0', label: 'Billing Errors Monthly'},
      {metric: '200+', label: 'Daily Patient Interactions'},
      {metric: '5 months', label: 'Full Implementation'},
    ],
    testimonial: { quote: 'Our billing errors dropped to zero and patient satisfaction scores reached an all-time high. The investment paid off in under 6 months.', name: 'Admin. Mark Peralta', pos: 'Hospital Administrator, St. Clara Medical Center' },
  },
  'agrismart-dashboard': {
    title: 'AgriSmart', industry: 'Agriculture', cat: 'Web Application', timeline: '4 months', team: '3 engineers',
    accent: '#560BAD',
    overview: 'AgriSmart is an IoT-powered smart farming analytics platform for a cooperative of rice farmers in Nueva Ecija. The dashboard aggregates real-time sensor data to help farmers make data-driven decisions on irrigation, fertilization, and harvest timing.',
    challenge: 'Farmers relied purely on experience and guesswork for critical decisions. Unpredictable weather and pests caused 20-30% annual crop losses. The cooperative needed a data-driven tool accessible even in areas with limited internet connectivity.',
    solution: 'We built a real-time dashboard using React and D3.js for visualizations, connected to Arduino-based IoT sensors via MQTT protocol. The system includes offline mode, SMS alerts for critical thresholds, and a yield prediction model trained on 5 years of farm data.',
    tech: ['React', 'Python', 'FastAPI', 'MQTT', 'Arduino', 'Machine Learning', 'PostgreSQL', 'D3.js'],
    results: [
      {metric: '25%', label: 'Yield Increase'},
      {metric: '30%', label: 'Water Cost Reduction'},
      {metric: '120+', label: 'Farmers Benefited'},
      {metric: '4 months', label: 'From Concept to Live'},
    ],
    testimonial: { quote: 'We used to guess when to irrigate. Now we know exactly. Our harvest this year was the best in a decade thanks to AgriSmart.', name: 'Eduardo Santos', pos: 'Cooperative President, NE Farmers Group' },
  },
};

const defaultProject = projectData['brainbridge-lms'];

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectData[slug] || defaultProject;

  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="orb orb-violet w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-30" />
        <div className="section-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <Link href="/projects" className="text-[#CFA3EA]/50 hover:text-[#CFA3EA] text-sm transition-colors flex items-center gap-1.5">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                All Projects
              </Link>
              <span className="text-[#CFA3EA]/25">/</span>
              <span className="text-[#CFA3EA]/50 text-sm">{project.title}</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex gap-2 justify-center mb-4">
              <span className="tag-violet">{project.cat}</span>
              <span className="tag-blue">{project.industry}</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="hero-title">{project.title}</motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mt-4 text-base">{project.overview}</motion.p>
          </motion.div>
          {/* Meta bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
            {[{label:'Industry', val:project.industry},{label:'Timeline', val:project.timeline},{label:'Team Size', val:project.team}].map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-1">
                <span className="text-[#CFA3EA]/40 text-xs uppercase tracking-widest">{m.label}</span>
                <span className="text-white font-bold">{m.val}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="section-shell section-alt">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Section>
              <motion.div variants={fadeUp}>
                <div className="glass-card p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#831DC6] to-[#560BAD] flex items-center justify-center text-xl">🎯</div>
                    <h2 className="text-white font-bold text-xl">The Challenge</h2>
                  </div>
                  <p className="text-[#CFA3EA]/65 leading-relaxed text-sm">{project.challenge}</p>
                </div>
              </motion.div>
            </Section>
            <Section>
              <motion.div variants={fadeUp}>
                <div className="glass-card p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4361EE] to-[#3A0CA3] flex items-center justify-center text-xl">💡</div>
                    <h2 className="text-white font-bold text-xl">Our Solution</h2>
                  </div>
                  <p className="text-[#CFA3EA]/65 leading-relaxed text-sm">{project.solution}</p>
                </div>
              </motion.div>
            </Section>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section-shell">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Built With</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Technologies <span className="gradient-text">Used</span></motion.h2>
          </Section>
          <Section className="flex flex-wrap gap-3 justify-center">
            {project.tech.map((t) => (
              <motion.span key={t} variants={fadeUp} className="tech-pill text-sm px-4 py-2">{t}</motion.span>
            ))}
          </Section>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Impact</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Results & <span className="gradient-text">Outcomes</span></motion.h2>
          </Section>
          <Section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.results.map((r) => (
              <motion.div key={r.label} variants={fadeUp} className="stat-card">
                <div className="stat-number text-3xl">{r.metric}</div>
                <p className="stat-label">{r.label}</p>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-shell">
        <div className="section-container">
          <Section className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp}>
              <div className="glass-card p-10 text-center">
                <div className="text-5xl font-serif text-[#831DC6] mb-4">&ldquo;</div>
                <p className="text-[#CFA3EA]/80 text-lg leading-relaxed italic mb-6">{project.testimonial.quote}</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#831DC6] to-[#4361EE] flex items-center justify-center">
                    <span className="text-white font-bold">{project.testimonial.name[0]}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold">{project.testimonial.name}</p>
                    <p className="text-[#CFA3EA]/50 text-sm">{project.testimonial.pos}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell section-alt relative overflow-hidden">
        <div className="orb orb-violet w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="section-container relative z-10 text-center">
          <Section className="max-w-2xl mx-auto">
            <motion.span variants={fadeUp} className="section-eyebrow">Your Turn</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">Ready to <span className="gradient-text">Start Your Project?</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mt-4">Build your own success story with ProgreX. Let us make it happen.</motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm px-10 py-4">
                <span>Start Your Project</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'16px',height:'16px',flexShrink:0}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/projects" className="btn-outline text-sm px-10 py-4">Back to Portfolio</Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </main>
  );
}
"""

# ═══════════ SYSTEMS PAGE ═══════════════════════════════════
systems_tsx = r"""'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] as [number,number,number,number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>{children}</motion.div>;
}

const systems = [
  {
    id: 'schoolease', name: 'SchoolEase', tagline: 'Complete School Management System', icon: '\u{1F3EB}',
    cat: 'Education', demo: 'Available', color: 'from-[#831DC6] to-[#560BAD]',
    pricing: [{ label: 'One-Time License', price: '\u20B115,000', desc: 'Full system, unlimited users', best: true }, { label: 'Annual Support', price: '\u20B13,000/yr', desc: 'Updates + priority support', best: false }],
    features: ['Student Enrollment & Profiling', 'Grade & Report Card Management', 'Attendance Tracking', 'Faculty Management', 'Parent Portal & Notifications', 'SMS & Email Alerts', 'Department & Subject Setup', 'School Year & Section Management'],
    industries: ['K-12 Public Schools', 'Private Schools', 'Universities', 'Vocational Schools'],
    screenshots: ['Dashboard Overview', 'Student Records', 'Grading Module', 'Parent Portal'],
    faqs: [
      { q: 'Is the source code included?', a: 'Yes, a full source code license is included with the one-time purchase.' },
      { q: 'Can it handle multiple campuses?', a: 'Yes, SchoolEase supports multi-campus management from a single admin panel.' },
      { q: 'Is training included?', a: 'We provide 2 days of on-site or remote training plus a full user manual.' },
    ],
  },
  {
    id: 'inventopro', name: 'InventoPro', tagline: 'POS & Inventory Management System', icon: '\u{1F3EA}',
    cat: 'Retail / Business', demo: 'Available', color: 'from-[#4361EE] to-[#3A0CA3]',
    pricing: [{ label: 'One-Time License', price: '\u20B112,000', desc: 'Full POS + inventory, unlimited products', best: true }, { label: 'Annual Support', price: '\u20B12,500/yr', desc: 'Updates + technical support', best: false }],
    features: ['Touchscreen POS Terminal', 'Real-Time Stock Management', 'Sales & Revenue Reports', 'Multi-Branch Support', 'Supplier & Purchase Orders', 'Low Stock Alerts', 'Barcode Scanning', 'Customer Loyalty Program'],
    industries: ['Grocery & Supermarkets', 'Clothing Boutiques', 'Hardware Stores', 'Restaurants & Cafes'],
    screenshots: ['POS Terminal', 'Inventory Dashboard', 'Sales Reports', 'Branch Management'],
    faqs: [
      { q: 'Does it work offline?', a: 'Yes, InventoPro has full offline mode. Data syncs automatically when connection is restored.' },
      { q: 'What hardware do I need?', a: 'A standard PC or tablet with a receipt printer. We help with setup and configuration.' },
      { q: 'Can I customize the receipt format?', a: 'Yes, you can fully customize receipt headers, footers, and branding.' },
    ],
  },
  {
    id: 'clinicore', name: 'CliniCore', tagline: 'Clinic & Health Center Management', icon: '\u{1F3E5}',
    cat: 'Healthcare', demo: 'Available', color: 'from-[#560BAD] to-[#831DC6]',
    pricing: [{ label: 'One-Time License', price: '\u20B118,000', desc: 'Full clinic system, unlimited records', best: true }, { label: 'Annual Support', price: '\u20B14,000/yr', desc: 'Updates + compliance patches', best: false }],
    features: ['Patient Records & EMR', 'Appointment Booking & Queue', 'Doctor & Staff Scheduling', 'Prescription Management', 'Billing & Payments', 'Lab Results Tracking', 'Inventory (Medicines)', 'Analytics Dashboard'],
    industries: ['Private Clinics', 'Health Centers', 'Dental Offices', 'OB-GYN Practices'],
    screenshots: ['Patient Dashboard', 'Appointment Calendar', 'Prescription Module', 'Billing System'],
    faqs: [
      { q: 'Is patient data secure?', a: 'Yes, CliniCore uses encryption for all patient records and is designed with healthcare data privacy in mind.' },
      { q: 'Can multiple doctors use it simultaneously?', a: 'Yes, CliniCore supports multiple doctor profiles with their own patient queues and schedules.' },
      { q: 'Can it generate PhilHealth forms?', a: 'Yes, common PhilHealth and insurance forms can be auto-filled from patient records.' },
    ],
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-[#831DC6]/05">
        <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-[#4361EE] text-xl font-light shrink-0">+</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-[#CFA3EA]/60 text-sm leading-relaxed border-t border-[#831DC6]/15 pt-4">{faq.a}</p>
      </motion.div>
    </div>
  );
}

export default function SystemsPage() {
  const [active, setActive] = useState(systems[0].id);
  const selected = systems.find(s => s.id === active) || systems[0];

  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="orb orb-zaffre w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-30" />
        <div className="section-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="section-eyebrow">Ready-Made Systems</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title mt-3">Pre-Built <span className="gradient-text">Systems</span></motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mt-4 text-lg">
              Fully functional, battle-tested systems ready to deploy. Buy once, use forever — no recurring software fees.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SYSTEM SELECTOR */}
      <section className="section-shell section-alt">
        <div className="section-container">
          {/* System tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {systems.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                  active === s.id
                    ? 'bg-gradient-to-r from-[#831DC6] to-[#4361EE] border-transparent text-white shadow-lg shadow-[#831DC6]/30'
                    : 'bg-transparent border-[#831DC6]/25 text-[#CFA3EA]/60 hover:border-[#831DC6]/50 hover:text-[#CFA3EA]'
                }`}
              >
                <span className="text-lg">{s.icon}</span>
                {s.name}
              </button>
            ))}
          </div>

          {/* Selected system detail */}
          <motion.div key={selected.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="glow-card p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center text-3xl shadow-xl`}>{selected.icon}</div>
                    <div>
                      <h2 className="text-white font-black text-2xl">{selected.name}</h2>
                      <p className="text-[#CFA3EA]/55 text-sm">{selected.tagline}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#CFA3EA] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><span className="circuit-dot" />Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selected.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#CFA3EA]/70">
                          <svg className="text-[#4361EE] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#CFA3EA] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><span className="circuit-dot" />Industries Served</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.industries.map((ind) => (
                        <span key={ind} className="tag-violet text-xs">{ind}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  {/* Pricing */}
                  <h4 className="text-[#CFA3EA] font-bold text-xs uppercase tracking-widest flex items-center gap-2"><span className="circuit-dot" />Pricing Plans</h4>
                  <div className="space-y-3">
                    {selected.pricing.map((p) => (
                      <div key={p.label} className={`glass-card p-5 flex items-center justify-between gap-4 ${p.best ? 'border-[#831DC6]/50' : ''}`}>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-white font-bold text-sm">{p.label}</p>
                            {p.best && <span className="tag-violet text-xs">Recommended</span>}
                          </div>
                          <p className="text-[#CFA3EA]/50 text-xs">{p.desc}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xl font-black gradient-text">{p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Demo screenshots */}
                  <div>
                    <h4 className="text-[#CFA3EA] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><span className="circuit-dot" />Screenshots Preview</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selected.screenshots.map((s) => (
                        <div key={s} className="aspect-video rounded-lg bg-gradient-to-br from-[#0F0335] to-[#0A0225] border border-[#831DC6]/20 flex items-center justify-center p-3">
                          <span className="text-[#CFA3EA]/40 text-xs text-center">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <Link href="/contact" className="btn-primary flex-1 text-xs py-3 justify-center">
                      <span>Buy / Get Demo</span>
                    </Link>
                    <Link href="/contact" className="btn-outline flex-1 text-xs py-3 justify-center">Request Quote</Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-shell">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Common Questions</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Frequently Asked <span className="gradient-text">Questions</span></motion.h2>
          </Section>
          <div className="max-w-3xl mx-auto space-y-3">
            {selected.faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
            <div className="glass-card p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold text-sm">Have another question?</p>
                <p className="text-[#CFA3EA]/50 text-xs mt-0.5">We respond within 24 hours.</p>
              </div>
              <Link href="/contact" className="btn-primary text-xs py-2.5 px-5 shrink-0">Ask Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell section-alt relative overflow-hidden">
        <div className="orb orb-violet w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="section-container relative z-10 text-center">
          <Section className="max-w-2xl mx-auto">
            <motion.span variants={fadeUp} className="section-eyebrow">Need Something Different?</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-4">Need a <span className="gradient-text">Custom System?</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mt-4">We build fully custom systems tailored to your exact requirements. Let us design something just for you.</motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-sm px-10 py-4">
                <span>Request Custom Build</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'16px',height:'16px',flexShrink:0}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/projects" className="btn-outline text-sm px-10 py-4">See Custom Projects</Link>
            </motion.div>
          </Section>
        </div>
      </section>
    </main>
  );
}
"""

files = {
    os.path.join(BASE, "app", "projects", "page.tsx"): projects_tsx,
    os.path.join(BASE, "app", "projects", "[slug]", "page.tsx"): casestudy_tsx,
    os.path.join(BASE, "app", "systems", "page.tsx"): systems_tsx,
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Written: {os.path.relpath(path, BASE)} ({len(content.splitlines())} lines)")

print("Batch 2 done.")
