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
    <section id="blogs" className="relative py-20 bg-gradient-to-b from-dark-secondary to-dark overflow-hidden">
      <div ref={ref} className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with our tech and business blogs
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-dark-secondary rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Category Badge */}
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-semibold backdrop-blur-sm"
                >
                  {blog.category}
                </motion.span>

                {/* Dark Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-dark/60 transition-opacity duration-300"
                ></motion.div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {blog.readTime}
                  </motion.span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <a href="#" className="inline-flex items-center text-primary-light hover:text-accent transition-colors duration-300 font-semibold">
                  Read Article
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gradient-purple hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            Explore All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
