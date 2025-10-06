import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Download } from 'lucide-react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/"
              className="text-xl font-semibold text-gray-900 dark:text-white hover:text-cyan-500 transition-colors"
            >
              Aravind Manoj
            </Link>
            
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {project.summary}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium rounded-full"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-12">
              {project.imageLayers.map((image, idx) => (
                <Image
                  key={idx}
                  src={`/images/${image}`}
                  alt={`${project.title} workflow layer ${idx + 1}`}
                  fill
                  className="absolute inset-0 object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              ))}
              
              {/* Fallback content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto flex items-center justify-center">
                    <ExternalLink className="text-white" size={24} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.title} Workflow Visualization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Problem & Approach */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Problem Statement
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Approach & Solution
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.approach}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Outcomes
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Architecture & Tech Stack */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Architecture
                  </h2>
                  <ul className="space-y-3">
                    {project.architecture.map((arch, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Technology Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Live Demo
                    </a>
                  )}
                  
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-500 transition-colors"
                    >
                      <Download size={16} />
                      Download Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Snippet Example */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Code Example
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-gray-300 text-sm">
                <code>{`// Example implementation snippet
def process_documents(document_path):
    """Process documents for compliance checking"""
    try:
        # Extract text using OCR
        text = extract_text(document_path)
        
        # Apply compliance rules
        compliance_result = check_compliance(text)
        
        # Generate report
        report = generate_report(compliance_result)
        
        return report
    except Exception as e:
        logger.error(f"Error processing document: {e}")
        return None`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Aravind Manoj. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
