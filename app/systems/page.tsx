'use client';

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
