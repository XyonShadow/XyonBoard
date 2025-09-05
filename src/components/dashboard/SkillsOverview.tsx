import React, { useEffect, useState } from 'react';
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

const AnimatedProgressBar: React.FC<{ 
  skill: Skill; 
  index: number; 
  isVisible: boolean;
}> = ({ skill, index, isVisible }) => {
  const [width, setWidth] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame: number;

    const timer = setTimeout(() => {
      setWidth(skill.level);
      
      // Animate the number counting
      const duration = 1500;
      let startTime: number;
      
      const animateNumber = (currentTime: number) => {
        if(!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setDisplayLevel(Math.floor(easeOutQuart * skill.level));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateNumber);
        }
      };
      
      animationFrame = requestAnimationFrame(animateNumber);
    }, index * 200);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, [skill.level, index, isVisible]);

  const Icon = skill.icon;

   return (
    <div className={`group transition-all duration-300 ${isVisible ? 'opacity-1`' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold">{skill.name}</span>
        </div>
        <div className={`text-sm font-bold text-white bg-gradient-to-r ${skill.color} px-3 py-1 rounded-full`}>
          {displayLevel}%
        </div>
      </div>

      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

export const SkillsOverview: React.FC = () => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
      <h2 className="text-xl font-bold mb-4">Skills Overview</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <AnimatedProgressBar 
            key={skill.name}
            skill={skill} 
            index={index} 
            isVisible={true}
          />
        ))}
      </div>
    </div>
  );
};