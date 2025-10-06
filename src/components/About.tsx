'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function About() {
  const facts = [
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.location
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: siteConfig.degree
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.phone
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: siteConfig.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: siteConfig.linkedin,
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about transforming complex data into actionable insights and building intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {siteConfig.about}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'End-to-end data pipeline development',
                  'AI-powered automation solutions',
                  'Machine learning model deployment',
                  'Intelligent document processing',
                  'Real-time analytics systems',
                  'Research & development in NLP'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Facts & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Facts */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                      <fact.icon size={18} className="text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {fact.label}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow text-gray-600 dark:text-gray-300 hover:text-cyan-500"
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-semibold text-green-800 dark:text-green-300">
                  Available for Opportunities
                </h4>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400">
                Open to full-time positions, freelance projects, and research collaborations in data science and AI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
