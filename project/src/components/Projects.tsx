import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'DevTinder',
    description: 'A platform connecting developers with potential collaborators, featuring real-time matching and chat functionality.',
    longDescription: 'DevTinder is a comprehensive platform that helps developers find the perfect project partners. It uses an advanced matching algorithm based on skills, interests, and project preferences.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
    tech: ['Node.js', 'React', 'MongoDB', 'Gimini Ai','express','MongoDB'],
    features: [
      'secure user athentication and admin user control',
      'Skill-based matching algorithm',
      'Project proposal system',
      '',
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Atulsborse/devTinder'
  },
  {
    title: 'StudyNotion',
    description: 'E-learning platform with interactive courses, progress tracking, and personalized learning paths.',
    longDescription: 'StudyNotion revolutionizes online learning with its adaptive learning system and interactive content delivery.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80',
    tech: ['Express.js', 'React', 'MongoDB', 'Node.js',"cloudnary",'razorpay', 'inprogess'],
    features: [
      'Personalized learning paths',
      'Interactive quizzes and assignments',
      'Progress tracking dashboard',
      'allowing user to register,login,logout,purchase',
    ],
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'WikiScarbe',
    description: 'Knowledge sharing platform with advanced search and categorization features.',
    longDescription: 'WikiScarbe is a modern knowledge management system that makes information sharing and discovery effortless.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    tech: ['Node.js', 'MongoDB', 'React', 'TelegramBot','Telegram Api'],
    features: [
      'Advanced search functionality',
      'Collaborative editing',
      'Category management',
      'Telegram bot for post data on telegram',
    ],
    demoLink: '#',
    githubLink: 'https://github.com/Atulsborse/WikiScrape'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative"
              onClick={() => setSelectedProject(project)}
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              
              {/* Card content */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative p-6 bg-gradient-to-t from-gray-800/95 to-gray-800/80">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} className="mr-1" /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}