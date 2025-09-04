import React from 'react';
import { Code, Palette, Server, Database, Cloud } from 'lucide-react';
import './SkillsOverview.css';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  icon: React.ElementType;
  color: string;
}

const skills: Skill[] = [
  { name: 'React/TypeScript', level: 95, category: 'frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { name: 'Node.js/Express', level: 90, category: 'backend', icon: Server, color: 'from-green-500 to-emerald-500' },
  { name: 'UI/UX Design', level: 85, category: 'design', icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'Database Design', level: 88, category: 'backend', icon: Database, color: 'from-orange-500 to-red-500' },
  { name: 'Cloud/DevOps', level: 80, category: 'tools', icon: Cloud, color: 'from-indigo-500 to-purple-500' },
  { name: 'Mobile Development', level: 75, category: 'frontend', icon: Code, color: 'from-teal-500 to-cyan-500' }
];

export const SkillsOverview: React.FC = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
      <h2 className="text-xl font-bold mb-4">Skills Overview</h2>
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.name} className="p-4 bg-gray-50 rounded-lg shadow-sm">
            {s.name} - {s.level}%
          </div>
        ))}
      </div>
    </div>
  );
};