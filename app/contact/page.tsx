'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] as [number,number,number,number] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>{children}</motion.div>;
}

const contactInfo = [
  { icon: '✉️', label: 'Email Us', val: 'hello@progrex.dev', href: 'mailto:hello@progrex.dev' },
  { icon: '📞', label: 'Call Us', val: '+63 917 123 4567', href: 'tel:+639171234567' },
  { icon: '📍', label: 'Location', val: 'Quezon City, Metro Manila, Philippines', href: '#' },
  { icon: '⏰', label: 'Business Hours', val: 'Mon – Fri, 8AM – 6PM PHT', href: '#' },
];

const subjects = ['Web / Mobile App Development', 'Ready-Made System Inquiry', 'Custom Enterprise System', 'UI/UX Design', 'Technical Consultation', 'Partnership / Collaboration', 'General Inquiry'];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Simple websites take 2–4 weeks. Web apps and systems typically take 2–6 months depending on complexity and scope.' },
  { q: 'Do you offer site visits or meetings?', a: 'Yes! We do both in-person meetings in Metro Manila and virtual consultations via Google Meet or Zoom.' },
  { q: 'What is your payment structure?', a: 'We typically work with a 50% downpayment to begin, and 50% upon project completion and turnover.' },
  { q: 'Can I request changes after launch?', a: 'Yes. We offer 30 days of free post-launch support. Extended maintenance plans are available for ongoing changes.' },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-[#831DC6]/05 transition-colors">
        <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-[#4361EE] text-xl font-light shrink-0">+</motion.span>
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }} className="overflow-hidden">
        <p className="px-5 pb-5 text-[#CFA3EA]/60 text-sm leading-relaxed border-t border-[#831DC6]/15 pt-4">{faq.a}</p>
      </motion.div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: subjects[0], message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="page-wrapper">
      {/* HERO */}
      <section className="page-hero">
        <div className="orb orb-violet w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-30" />
        <div className="orb orb-blue w-[350px] h-[350px] top-20 right-0 opacity-20" />
        <div className="section-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="section-eyebrow">Get In Touch</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title mt-3">Let&rsquo;s Work <span className="gradient-text">Together</span></motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle mt-4 text-lg">
              Whether you have a project in mind, a question about our services, or just want to say hello — we would love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((c) => (
              <motion.a key={c.label} variants={fadeUp} href={c.href} className="glass-card shimmer-card p-5 text-center flex flex-col items-center gap-3 group">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{c.icon}</div>
                <div>
                  <p className="text-[#CFA3EA]/45 text-xs uppercase tracking-widest mb-1">{c.label}</p>
                  <p className="text-white font-semibold text-xs leading-snug">{c.val}</p>
                </div>
              </motion.a>
            ))}
          </Section>
        </div>
      </section>

      {/* MAIN FORM + SIDEBAR */}
      <section className="section-shell">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                <div className="mb-7">
                  <h2 className="text-white font-black text-2xl">Send Us a Message</h2>
                  <p className="text-[#CFA3EA]/50 text-sm mt-1">We respond within 24 hours on business days.</p>
                </div>

                {sent ? (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#831DC6] to-[#4361EE] flex items-center justify-center text-3xl">✓</div>
                    <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                    <p className="text-[#CFA3EA]/60 text-sm max-w-xs">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    <button onClick={() => setSent(false)} className="btn-outline text-sm px-6 py-2.5 mt-2">Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Juan dela Cruz" className="form-input" />
                      </div>
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="juan@company.com" className="form-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Phone Number</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+63 9XX XXX XXXX" className="form-input" />
                      </div>
                      <div>
                        <label className="form-label">Subject *</label>
                        <select name="subject" value={form.subject} onChange={handleChange} required className="form-input">
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project, goals, budget, and timeline..." className="form-input resize-none" />
                    </div>
                    <button type="submit" className="btn-primary text-sm py-4 justify-center">
                      <span>Send Message</span>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:'16px',height:'16px',flexShrink:0}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              <div className="glass-card p-6">
                <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <span className="circuit-dot" />
                  Book a Free Consultation
                </h3>
                <p className="text-[#CFA3EA]/55 text-sm leading-relaxed mb-5">Schedule a 30-minute discovery call with our team. We will understand your needs and propose the best approach.</p>
                <a href="mailto:hello@progrex.dev?subject=Book%20Consultation" className="btn-primary text-xs py-3 w-full justify-center">
                  <span>Schedule a Call</span>
                </a>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <span className="circuit-dot" />
                  Follow Us
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { name: 'LinkedIn', handle: '@progrex', href: '#' },
                    { name: 'Facebook', handle: '@ProgreXDevPH', href: '#' },
                    { name: 'GitHub', handle: '@progrex-dev', href: '#' },
                  ].map((s) => (
                    <a key={s.name} href={s.href} className="flex items-center gap-3 text-sm text-[#CFA3EA]/60 hover:text-[#CFA3EA] transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-[#831DC6]/15 group-hover:bg-[#831DC6]/30 flex items-center justify-center transition-colors">
                        <svg className="text-[#4361EE]" fill="currentColor" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-xs">{s.name}</p>
                        <p className="text-[#CFA3EA]/40 text-xs">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-white font-bold text-sm mb-3 flex items-center gap-2"><span className="circuit-dot" />Response Time</h3>
                <div className="space-y-2">
                  {[{lbl:'Email Inquiries', t:'Within 24 hours'},{lbl:'Project Quotes', t:'1–2 business days'},{lbl:'Urgent Support', t:'Same day'}].map(r => (
                    <div key={r.lbl} className="flex items-center justify-between text-xs">
                      <span className="text-[#CFA3EA]/50">{r.lbl}</span>
                      <span className="text-[#4361EE] font-medium">{r.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="section-shell section-alt">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Location</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Find <span className="gradient-text">Us Here</span></motion.h2>
          </Section>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-[#831DC6]/20 h-64 md:h-80 bg-gradient-to-br from-[#0F0335] to-[#0A0225] flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <p className="text-[#CFA3EA]/60 text-sm">Quezon City, Metro Manila</p>
              <p className="text-[#CFA3EA]/40 text-xs mt-1">Google Maps integration available</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-shell">
        <div className="section-container">
          <Section className="section-header">
            <motion.span variants={fadeUp} className="section-eyebrow">Questions</motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-2">Frequently <span className="gradient-text">Asked Questions</span></motion.h2>
          </Section>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} faq={f} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
