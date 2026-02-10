'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-dark to-dark-secondary overflow-hidden">
      {/* Animated Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 270, 180, 90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-electric/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-dark-secondary border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-dark-secondary border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>

              {/* Company Input */}
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full bg-dark-secondary border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                />
              </div>

              {/* Project Type Dropdown */}
              <div>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-secondary border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                >
                  <option value="">Select Project Type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI Solutions</option>
                  <option value="cloud">Cloud Infrastructure</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className="w-full bg-dark-secondary border border-dark-tertiary rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-pulse-glow"
              >
                Send Message
              </motion.button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4 bg-primary/20 border border-primary text-white px-6 py-4 rounded-lg"
              >
                Thank you! We'll be in touch soon.
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {/* Email */}
                <a href="mailto:contact@progrex.com" className="flex items-center text-gray-300 hover:text-primary-light transition-colors duration-300">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contact@progrex.com
                </a>

                {/* Phone */}
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-primary-light transition-colors duration-300">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1 (XXX) XXX-XXXX
                </a>

                {/* Location */}
                <div className="flex items-center text-gray-300">
                  <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-dark-secondary border border-dark-tertiary rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-dark-secondary border border-dark-tertiary rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-dark-secondary border border-dark-tertiary rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="hidden lg:block w-64 h-64 mx-auto mt-12"
            >
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-purple rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute inset-8 bg-gradient-purple rounded-full opacity-30 blur-xl"></div>
                <div className="absolute inset-16 bg-primary rounded-full opacity-40"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
