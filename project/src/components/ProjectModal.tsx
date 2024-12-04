import React, { useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    longDescription?: string;
    features?: string[];
    demoLink: string;
    githubLink: string;
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-900/50 text-gray-400 hover:text-white rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="relative h-64">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-gray-300 mb-6">{project.longDescription || project.description}</p>
          
          {project.features && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex space-x-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Github size={16} className="mr-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}