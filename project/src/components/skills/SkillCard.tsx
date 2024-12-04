import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
}

export default function SkillCard({ icon: Icon, name }: SkillCardProps) {
  return (
    <div className="group relative">
      {/* Gradient glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      
      {/* Card content */}
      <div className="relative bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-blue-400 group-hover:text-blue-300 transition-colors" size={32} />
          </div>
          <span className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">{name}</span>
        </div>
      </div>
    </div>
  );
}