'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 70);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  { icon: '??', title: 'Custom Software', desc: 'Tailored solutions built from scratch to solve unique business challenges.', color: 'from-[#831DC6] to-[#560BAD]' },
  { icon: '??', title: 'Web Development', desc: 'Modern, responsive websites and apps that drive engagement and convert.', color: 'from-[#560BAD] to-[#4361EE]' },
  { icon: '??', title: 'Mobile Apps', desc: 'Cross-platform iOS & Android apps that users love and keep coming back to.', color: 'from-[#4361EE] to-[#3A0CA3]' },
  { icon: '??', title: 'System Integration', desc: 'Connect your tools, automate workflows, and eliminate data silos.', color: 'from-[#3A0CA3] to-[#831DC6]' },
  { icon: '??', title: 'Capstone Systems', desc: 'Complete thesis & capstone development with full documentation and support.', color: 'from-[#831DC6] to-[#4361EE]' },
  { icon: '???', title: 'IT Consulting', desc: 'Expert guidance on tech strategy, infrastructure, and digital transformation.', color: 'from-[#4361EE] to-[#831DC6]' },
];

const projects = [
  { title: 'BrainBridge LMS', industry: 'Education', cat: 'Web', desc: 'Comprehensive LMS for universities with live classes, assignments, and grading.', slug: 'brainbridge-lms', accent: '#831DC6' },
  { title: 'HealthTrack Pro', industry: 'Healthcare', cat: 'Web & Mobile', desc: 'Hospital patient management with appointment booking, records, and billing.', slug: 'healthtrack-pro', accent: '#4361EE' },
  { title: 'AgriSmart', industry: 'Agriculture', cat: 'Web', desc: 'IoT farming analytics dashboard for crop monitoring and yield prediction.', slug: 'agrismart-dashboard', accent: '#560BAD' },
];

const readySystems = [
  { name: 'SchoolEase', tagline: 'School Management System', price: '?15,000', period: 'one-time', features: ['Enrollment & Admissions', 'Grade Management', 'Attendance Tracking', 'Report Cards', 'Parent Portal'], icon: '??', color: 'from-[#831DC6] to-[#560BAD]' },
  { name: 'InventoPro', tagline: 'POS & Inventory System', price: '?12,000', period: 'one-time', features: ['Point-of-Sale Terminal', 'Stock Management', 'Sales Reports', 'Multi-Branch Support', 'Low Stock Alerts'], icon: '??', color: 'from-[#4361EE] to-[#3A0CA3]' },
];

const techs = [
  { icon: '??', name: 'React' }, { icon: '?', name: 'Next.js' }, { icon: '??', name: 'TypeScript' },
  { icon: '??', name: 'Node.js' }, { icon: '??', name: 'Flutter' }, { icon: '??', name: 'Laravel' },
  { icon: '??', name: 'Python' }, { icon: '??', name: 'PostgreSQL' }, { icon: '??', name: 'MongoDB' },
  { icon: '??', name: 'AWS' }, { icon: '??', name: 'Firebase' }, { icon: '??', name: 'Docker' },
];

const testimonials = [
  { quote: 'ProgreX built our entire platform in record time. Their team understood our vision and delivered beyond expectations.', name: 'Juan dela Cruz', pos: 'CEO', company: 'TechStart Inc.' },
  { quote: 'The capstone system they built was exceptional � intuitive, well-documented, and students loved it.', name: 'Maria Santos', pos: 'Academic Director', company: 'Lipa College' },
  { quote: 'InventoPro transformed our grocery ops. POS is lightning fast and reports are instant. Worth every peso!', name: 'Robert Tan', pos: 'Owner', company: 'FreshMart Grocery' },
];

export default function HomePage() {
  return (
    <main className="page-wrapper">
      <section className="relative min-h-[92vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-28 pb-14 md:pb-18">
        <div className="orb orb-zaffre" style={{ width: '580px', height: '580px', top: '10%', left: '-8%', opacity: 0.36 }} />
        <div className="orb orb-blue" style={{ width: '420px', height: '420px', top: '50%', right: '-6%', opacity: 0.28, animationDelay: '3s' }} />
        <div className="orb orb-violet" style={{ width: '320px', height: '320px', bottom: '5%', left: '40%', opacity: 0.22, animationDelay: '6s' }} />
        <div className="absolute inset-x-8 top-24 bottom-8 rounded-3xl border border-[#831DC6]/10 pointer-events-none hidden lg:block" />

        <div className="relative z-10 w-full max-w-275 mx-auto px-5 md:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="section-eyebrow">Software &amp; Technology Company</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="hero-title mt-3 max-w-4xl mx-auto">
              Build <span className="gradient-text">Faster.</span>{' '}Scale <span className="gradient-text">Smarter.</span>
              <br className="hidden sm:block" />
              Win with <span className="gradient-text">ProgreX.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle">
              We design &amp; develop modern digital products � custom software, web apps, and mobile solutions � that help businesses grow, automate, and lead.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href="/contact" className="btn-primary btn-lg">Get a Free Quote</Link>
              <Link href="/projects" className="btn-outline btn-lg">View Our Work</Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[{ v: 200, s: '+', l: 'Projects Delivered' }, { v: 98, s: '%', l: 'Client Satisfaction' }, { v: 5, s: '+', l: 'Years of Excellence' }].map((s) => (
              <div key={s.l} className="stat-card">
                <div className="stat-number"><Counter target={s.v} suffix={s.s} /></div>
                <p className="stat-label">{s.l}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-6 flex flex-col items-center gap-1.5">
            <span className="text-[#CFA3EA]/30 text-[0.65rem] tracking-widest uppercase">Scroll to explore</span>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
              <svg className="w-4 h-4 text-[#831DC6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">What We Do</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Our <span className="gradient-text">Services</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">End-to-end technology services � from idea to launch and beyond.</motion.p>
          </Section>
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="h-full">
                <div className="glass-card shimmer-card group h-full p-6 flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>{s.icon}</div>
                  <h3 className="text-white font-bold text-base group-hover:text-[#CFA3EA] transition-colors duration-300">{s.title}</h3>
                  <p className="text-[#CFA3EA]/58 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <Link href="/services" className="text-[#4361EE] text-xs font-semibold hover:text-[#CFA3EA] transition-colors duration-200 flex items-center gap-1 mt-auto">Learn more</Link>
                </div>
              </motion.div>
            ))}
          </Section>
          <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/services" className="btn-outline">View All Services ?</Link>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Portfolio</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Featured <span className="gradient-text">Projects</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">A glimpse at the work we are most proud of.</motion.p>
          </Section>
          <Section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="h-full">
                <div className="glass-card shimmer-card group h-full flex flex-col overflow-hidden">
                  <div className="relative h-44" style={{ background: `linear-gradient(135deg, ${p.accent}30, ${p.accent}10)` }}>
                    <div className="absolute inset-0 flex items-center justify-center"><span className="text-7xl font-black opacity-10 text-white">{p.title[0]}</span></div>
                    <div className="absolute top-3 left-3 flex gap-2"><span className="tag-violet">{p.cat}</span><span className="tag-blue">{p.industry}</span></div>
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-white font-bold text-base group-hover:text-[#CFA3EA] transition-colors">{p.title}</h3>
                    <p className="text-[#CFA3EA]/58 text-sm leading-relaxed flex-1">{p.desc}</p>
                    <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1.5 text-[#4361EE] text-xs font-semibold hover:text-[#CFA3EA] transition-colors mt-auto">View Case Study</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </Section>
          <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/projects" className="btn-outline">View All Projects ?</Link>
          </motion.div>
        </div>
      </section>

      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Ready-Made Systems</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Launch Faster with <span className="gradient-text">Pre-Built Systems</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">Turnkey software ready to deploy � minimal setup, maximum value.</motion.p>
          </Section>
          <Section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {readySystems.map((sys) => (
              <motion.div key={sys.name} variants={fadeUp} className="h-full">
                <div className="glow-card shimmer-card group h-full p-6 flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${sys.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>{sys.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-base group-hover:text-[#CFA3EA] transition-colors">{sys.name}</h3>
                      <p className="text-[#CFA3EA]/50 text-xs mt-0.5">{sys.tagline}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xl font-black gradient-text leading-none">{sys.price}</p>
                      <p className="text-[#CFA3EA]/40 text-[0.65rem] mt-1 uppercase tracking-wider">{sys.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {sys.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#CFA3EA]/72">
                        <svg className="text-[#4361EE] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '13px', height: '13px' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/systems" className="btn-primary w-full justify-center">View Details &amp; Demo</Link>
                </div>
              </motion.div>
            ))}
          </Section>
          <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/systems" className="btn-outline">Browse All Systems ?</Link>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Tech Stack</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Technologies <span className="gradient-text">We Master</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">Modern stack to build robust, scalable, and maintainable products.</motion.p>
          </Section>
          <Section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {techs.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <motion.div className="glass-card p-4 flex flex-col items-center justify-center gap-2 cursor-default group aspect-square" whileHover={{ y: -4, scale: 1.06 }} transition={{ type: 'spring', stiffness: 320, damping: 22 }}>
                  <span className="text-2xl">{t.icon}</span>
                  <span className="text-[#CFA3EA]/55 group-hover:text-[#CFA3EA] text-[0.68rem] font-semibold text-center transition-colors leading-tight">{t.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Client Reviews</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">What Our <span className="gradient-text">Clients Say</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">Real feedback from real people. We let our results speak for themselves.</motion.p>
          </Section>
          <Section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="h-full">
                <div className="glass-card group h-full p-6 flex flex-col gap-4">
                  <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => (<svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                  <p className="text-[#CFA3EA]/70 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-[#831DC6]/15">
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#831DC6] to-[#4361EE] flex items-center justify-center shrink-0"><span className="text-white font-bold text-sm">{t.name[0]}</span></div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-snug">{t.name}</p>
                      <p className="text-[#CFA3EA]/45 text-xs mt-0.5">{t.pos}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      <section className="section-shell relative overflow-hidden">
        <div className="orb orb-violet" style={{ width: '700px', height: '700px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.18 }} />
        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Section>
              <motion.span variants={fadeUp} className="section-eyebrow">Get Started Today</motion.span>
              <motion.h2 variants={fadeUp} className="section-title">Ready to Build <span className="gradient-text">Something Great?</span></motion.h2>
              <motion.p variants={fadeUp} className="section-subtitle">Turn your idea into a powerful digital product. On time, on budget, and beyond expectations.</motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-primary btn-lg">Start Your Project Now</Link>
                <Link href="/projects" className="btn-outline btn-lg">Browse Our Work</Link>
              </motion.div>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
