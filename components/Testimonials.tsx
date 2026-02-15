'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  {
    quote: "ProgreX transformed our entire digital infrastructure. The results exceeded our expectations with a 300% ROI in the first year.",
    name: "Sarah Johnson",
    title: "CEO, TechCorp",
    company: "TechCorp",
    rating: 5,
    logo: "TC",
  },
  {
    quote: "Their AI solutions automated 80% of our manual processes. The team's expertise and dedication were exceptional.",
    name: "Michael Chen",
    title: "CTO, InnovateLab",
    company: "InnovateLab",
    rating: 5,
    logo: "IL",
  },
  {
    quote: "Working with ProgreX was a game-changer. They delivered a scalable platform that handles millions of users seamlessly.",
    name: "Emily Rodriguez",
    title: "Product Director, CloudScale",
    company: "CloudScale",
    rating: 5,
    logo: "CS",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-shell relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/15 to-purple-700/15 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            Trusted by <span className="section-title-gradient">Industry Leaders</span>
          </h2>
          <p className="section-subtitle">
            Real feedback from teams that partnered with ProgreX to ship high-impact digital products.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-card-premium p-10 md:p-16"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center shadow-2xl">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-2xl md:text-3xl text-white text-center mb-10 italic leading-relaxed font-light">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="w-7 h-7 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Author Info */}
              <div className="text-center">
                <p className="text-white font-bold text-xl mb-1 gradient-text">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-400 text-lg">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-800 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-800 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-purple-500 to-purple-800'
                    : 'w-3 bg-gray-600 hover:bg-purple-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
