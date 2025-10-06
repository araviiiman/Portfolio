'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`w-full mb-24 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex flex-col lg:flex items-center gap-12`}
    >
      {/* Project Content */}
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <motion.h3 
            className="text-3xl font-bold text-gray-900 dark:text-white"
            whileHover={{ color: '#06b6d4' }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {project.summary}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium rounded-full"
              >
                {metric}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="space-y-2">
            {project.architecture.slice(0, 3).map((arch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
              >
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                <span className="text-sm">{arch}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          >
            <ExternalLink size={16} />
            View Details
          </motion.button>
          
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-500 transition-colors"
            >
              <Github size={16} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* 3D Workflow Visualization */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="card-3d relative w-full h-80 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"
        >
          <div className="card-3d-inner relative w-full h-full">
            {project.imageLayers.map((image, idx) => (
              <Image
                key={idx}
                src={`/images/${image}`}
                alt={`${project.title} workflow layer ${idx + 1}`}
                fill
                className="image-layer"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ))}
            
            {/* Fallback content if images don't exist */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto flex items-center justify-center">
                  <ExternalLink className="text-white" size={24} />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.title} Workflow
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
