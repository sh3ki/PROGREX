'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const blogs = [
  {
    title: 'The Future of AI in Business Automation',
    excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.',
    category: 'AI & ML',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    date: 'Feb 5, 2026',
  },
  {
    title: 'Building Scalable Cloud Architecture',
    excerpt: 'Learn the best practices for designing cloud infrastructure that scales with your business needs and maintains peak performance.',
    category: 'Cloud',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    date: 'Feb 3, 2026',
  },
  {
    title: 'Modern Web Development Trends 2026',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development and user experience design.',
    category: 'Development',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    date: 'Jan 28, 2026',
  },
];

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blogs" className="section-shell relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl opacity-50" />
      
      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">Blog & Insights</span>
          <h2 className="section-title">
            Latest <span className="section-title-gradient">Insights</span>
          </h2>
          <p className="section-subtitle">
            Practical ideas and technology insights from our team for leaders building digital-first businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group gradient-border cursor-pointer"
            >
              <div className="gradient-border-inner p-0 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                  >
                    {blog.category}
                  </motion.span>

                  {/* Read Time Badge */}
                  <span className="absolute bottom-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold rounded-full">
                    {blog.readTime}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <svg className="w-4 h-4 mr-1.5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 font-semibold transition-colors duration-300 group-hover:gap-4">
                    <span>Read Article</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-ghost"
          >
            Explore More Insights
          </button>
        </motion.div>
      </div>
    </section>
  );
}
