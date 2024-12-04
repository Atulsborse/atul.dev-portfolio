import {
  Server,
  Database,
  Code2,
  Globe,
  Box,
  Terminal,
  Cpu,
  Cloud,
  Layout,
  FileCode,
  Brackets,
  Palette,
  Dumbbell,
} from 'lucide-react';

export const skillsData = [
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Building robust and scalable server-side applications',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Terminal },
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Creating responsive and interactive user interfaces',
    skills: [
      { name: 'React.js', icon: Code2 },
      { name: 'JavaScript', icon: FileCode },
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Palette },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Box,
    description: 'Leveraging modern development tools and platforms',
    skills: [
      { name: 'VS Code', icon: Brackets },
      { name: 'Azure', icon: Cloud },
      { name: 'Tailwind', icon: Palette },
      { name: 'C++', icon: Cpu },
    ],
  },
];