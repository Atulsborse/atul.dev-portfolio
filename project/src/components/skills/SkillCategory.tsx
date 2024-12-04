import React from 'react';
import { LucideIcon } from 'lucide-react';
import SkillCard from './SkillCard';

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Array<{
    name: string;
    icon: LucideIcon;
  }>;
}

export default function SkillCategory({ title, icon: Icon, description, skills }: SkillCategoryProps) {
  return (
    <div className="group relative">
      {/* Gradient glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      
      {/* Category content */}
      <div className="relative bg-gray-800/30 p-8 rounded-2xl hover:bg-gray-800/40 transition-colors duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl flex items-center justify-center">
            <Icon className="text-blue-400" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm mt-1">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}