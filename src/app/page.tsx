import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Nav />
      
      <main>
        <Hero />
        
        <About />
        
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Three signature projects showcasing expertise in AI, data engineering, and automation
              </p>
            </div>
            
            <div className="space-y-24">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        <Skills />
        
        <Timeline />
        
        <ContactForm />
      </main>
      
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
