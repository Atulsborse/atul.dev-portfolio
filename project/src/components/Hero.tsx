import React from 'react';
import atulBorse from './image/atul borse.jpg';
import { Github, Linkedin, Mail, ArrowDown, Code2, Dumbbell, BriefcaseIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-900 to-gray-900">
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-8">
        <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
            Eat, Code, Gym, Sleep, Repeat
          </span>


        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="px-4 py-2 bg-blue-500/10 rounded-full">
                <span className="text-blue-400 font-medium flex items-center">
                  <BriefcaseIcon size={16} className="mr-2" />
                  Open to Work
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="block text-white">Hi, I'm Atul Borse</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Transforming ideas into elegant solutions through code.
              B.Tech 2024 graduate passionate about building impactful applications.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/Atulsborse" className="text-gray-300 hover:text-white transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/atul-borse-522115229/" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:atulsborse7@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={28} />
              </a>
            </div>
            <a href="#about" className="inline-block animate-bounce">
              <ArrowDown className="text-white" size={32} />
            </a>
          </div>
          <div className="relative hidden md:block">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50"></div>
              
              <img
  src={atulBorse}
  alt="Atul Borse"
  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/10"
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
