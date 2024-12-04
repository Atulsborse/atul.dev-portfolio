import React from 'react';
import { Code2, Server, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
            <p className="text-gray-400">Creating responsive and intuitive user interfaces with React</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Server className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
            <p className="text-gray-400">Building robust APIs and services with Node.js and Express</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Database</h3>
            <p className="text-gray-400">Managing data with MongoDB and SQL databases</p>
          </div>
        </div>

        <div className="bg-gray-800/30 p-8 rounded-2xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            As a Computer Engineering and Technology graduate (B.Tech 2024), I specialize in building scalable backend systems
            and full-stack applications. With expertise in Node.js and modern web technologies, I focus on creating
            efficient, maintainable, and user-friendly solutions that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}