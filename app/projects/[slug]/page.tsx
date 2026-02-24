'use client';

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
