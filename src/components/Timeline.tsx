'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: 'Winkl',
    role: 'Data Science Intern',
    period: '2024 - Present',
    location: 'Remote',
    description: 'Contributing to campaign automation and data-driven marketing solutions',
    achievements: [
      'Contributed to ₹30–50L monthly sales through automated campaign optimization',
      'Scaled revenue generation to ₹50L–1Cr/month through improved targeting algorithms',
      'Implemented influencer workflow automation reducing manual processing time by 70%',
      'Enhanced pitch throughput by 3x through automated content generation and matching'
    ],
    tech: ['Python', 'Machine Learning', 'Campaign Automation', 'Data Analytics']
  },
  {
    company: 'SEEM Research Lab',
    role: 'Research Intern',
    period: '2023 - 2024',
    location: 'Bangalore, India',
    description: 'Conducted research in media bias analysis and NLP applications',
    achievements: [
      'Developed media bias analysis pipeline processing 50,000+ articles',
      'Achieved 45% improvement in macro-F1 score for bias detection',
      'Implemented minority class optimization boosting recall by 10x',
      'Published research findings on NLP-based bias detection methodologies'
    ],
    tech: ['BERTopic', 'DistilBERT', 'RoBERTa', 'NLP', 'Research']
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Building impactful solutions through data science and AI
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content */}
                <div className="ml-16 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-cyan-500 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <TrendingUp size={16} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                M.Sc. Data Science
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Specializing in Machine Learning, NLP, and AI Systems
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
