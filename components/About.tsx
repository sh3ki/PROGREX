'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: 'Successful Projects', value: 200, suffix: '+' },
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
];

function Counter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-shell relative">
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-3xl opacity-40" />
      
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">Our Story</span>
          <h2 className="section-title">
            About <span className="section-title-gradient">ProgreX</span>
          </h2>
          <p className="section-subtitle">
            A software company focused on product quality, execution speed, and long-term partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 glass-card-premium p-8 md:p-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg text-slate-200 leading-relaxed"
            >
              ProgreX helps companies turn complex ideas into clear, scalable software products. We blend product strategy, engineering, and design to build systems that are both user-friendly and business-ready.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-slate-300 leading-relaxed"
            >
              From early discovery to deployment and optimization, our team works closely with clients to deliver outcomes that are measurable: faster operations, better customer experiences, and stronger digital foundations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base md:text-lg text-slate-300 leading-relaxed"
            >
              We prioritize thoughtful architecture, clean implementation, and transparent communication—so teams can move faster today and stay flexible tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <a href="#contact" className="inline-flex items-center text-primary-light hover:text-accent transition-colors duration-300 font-semibold text-base md:text-lg">
                Work With ProgreX
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const gradients = [
                'from-purple-400 to-purple-700',
                'from-purple-500 to-purple-800',
                'from-purple-400 to-purple-800',
                'from-purple-600 to-purple-900',
              ];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="gradient-border group cursor-pointer"
                >
                  <div className="gradient-border-inner text-center h-full flex flex-col items-center justify-center py-8">
                    <div className="relative mb-3">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="relative text-5xl md:text-6xl font-bold gradient-text"
                      >
                        <Counter end={stat.value} suffix={stat.suffix} />
                      </motion.div>
                    </div>
                    <p className="text-gray-400 font-semibold text-sm md:text-base group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Let’s Collaborate
          </button>
        </motion.div>
      </div>
    </section>
  );
}
