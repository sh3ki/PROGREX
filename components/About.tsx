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
    <section id="about" className="relative py-20 bg-dark overflow-hidden">
      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-radial-purple"
      ></motion.div>

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            About ProgreX
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              At ProgreX, we're not just building technology—we're crafting the future. Our team of 
              innovative engineers, designers, and strategists work tirelessly to deliver solutions 
              that don't just meet expectations, they exceed them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Founded with a vision to transform businesses through intelligent technology, we've 
              grown into a trusted partner for organizations worldwide. Our mission is simple: 
              empower businesses with cutting-edge solutions that drive measurable success.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              We believe in collaboration, innovation, and excellence. Every project we undertake 
              is an opportunity to push boundaries and create something extraordinary. Our values 
              guide everything we do—from the code we write to the relationships we build.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Whether you're a startup looking to disrupt an industry or an enterprise seeking 
              digital transformation, ProgreX has the expertise and passion to bring your vision 
              to life.
            </motion.p>

            {/* Team Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#" className="inline-flex items-center text-primary-light hover:text-accent transition-colors duration-300 font-semibold text-lg">
                Meet Our Team
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-secondary border border-dark-tertiary rounded-2xl p-8 text-center hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-5xl font-bold bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent mb-3"
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
