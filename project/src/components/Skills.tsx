import React from 'react';
import { Dumbbell, Code2 } from 'lucide-react';
import SkillCategory from './skills/SkillCategory';
import { skillsData } from './skills/skillsData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              description={category.description}
              skills={category.skills}
            />
          ))}
          
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl mt-12">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Code2 className="text-blue-400" size={24} />
                </div>
                <span className="text-white font-medium">Coding</span>
              </div>
              <span className="text-2xl text-gray-500">+</span>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <Dumbbell className="text-purple-400" size={24} />
                </div>
                <span className="text-white font-medium">Fitness</span>
              </div>
              <span className="text-2xl text-gray-500">=</span>
              <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                Balanced Lifestyle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}