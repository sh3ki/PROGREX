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
    <section id="testimonials" className="relative py-20 bg-dark overflow-hidden">
      {/* Animated Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #7C3AED 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></motion.div>
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-secondary border border-dark-tertiary rounded-2xl p-8 md:p-12"
            >
              {/* Company Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-purple rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {testimonials[currentIndex].logo}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Author */}
              <div className="text-center">
                <p className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-dark-secondary border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-dark-secondary border border-primary rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-dark-tertiary hover:bg-primary/50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
