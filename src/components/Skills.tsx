'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI/ML',
    skills: [
      { name: 'Machine Learning', level: 3 },
      { name: 'Deep Learning', level: 3 },
      { name: 'NLP', level: 3 },
      { name: 'Computer Vision', level: 2 },
      { name: 'LLMs', level: 3 },
      { name: 'Vector Databases', level: 2 }
    ]
  },
  {
    title: 'Data Engineering',
    skills: [
      { name: 'Python', level: 3 },
      { name: 'SQL', level: 3 },
      { name: 'Pandas', level: 3 },
      { name: 'Apache Spark', level: 2 },
      { name: 'ETL Pipelines', level: 3 },
      { name: 'Data Warehousing', level: 2 }
    ]
  },
  {
    title: 'Automation',
    skills: [
      { name: 'n8n', level: 3 },
      { name: 'Docker', level: 3 },
      { name: 'Kubernetes', level: 2 },
      { name: 'CI/CD', level: 2 },
      { name: 'API Development', level: 3 },
      { name: 'Workflow Orchestration', level: 3 }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 3 },
      { name: 'AWS', level: 2 },
      { name: 'Obsidian', level: 3 },
      { name: 'Jupyter', level: 3 },
      { name: 'VS Code', level: 3 },
      { name: 'Linux', level: 2 }
    ]
  }
];

export default function Skills() {
  const getLevelColor = (level: number) => {
    switch (level) {
      case 3: return 'bg-cyan-500';
      case 2: return 'bg-cyan-400';
      case 1: return 'bg-cyan-300';
      default: return 'bg-gray-300';
    }
  };

  const getLevelText = (level: number) => {
    switch (level) {
      case 3: return 'Expert';
      case 2: return 'Proficient';
      case 1: return 'Familiar';
      default: return 'Learning';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and data-driven solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level / 3) * 100}%` }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Always exploring new technologies and methodologies. Currently diving deeper into 
              MLOps, advanced NLP techniques, and cloud-native architectures for scalable AI systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
