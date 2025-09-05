import React, { useState, useEffect, useRef } from 'react';
import { Zap, ChevronRight, Code, Palette, Server, Database, Cloud } from 'lucide-react';
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
    <div className={`group/skill transition-all duration-300 hover:scale-[1.01]`}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover/skill:rotate-12 transition-all duration-300`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <div className={`text-sm font-bold text-white bg-gradient-to-r ${skill.color} px-3 py-1 rounded-full shadow-lg transition-all duration-300`}>
          {displayLevel}%
        </div>
      </div>
      
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-all duration-300">
        {/* Background shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[200%] transition-transform duration-1000"></div>
        
        {/* Progress bar */}
        <div 
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out shadow-lg group-hover/skill:shadow-xl`}
          style={{ width: `${width}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
        </div>
        
        {/* Skill level indicators */}
        <div className="absolute inset-0 flex justify-between items-center px-1">
          {[25, 50, 75].map((marker) => (
            <div 
              key={marker}
              className="w-0.5 h-1 bg-white/30 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkillsOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <div className="relative">
            <Zap className="w-6 h-6 text-yellow-500 group-hover:animate-spin transition-all duration-500" />
            <div className="absolute inset-0 w-6 h-6 bg-yellow-300 animate-ping opacity-20 [animation-duration:3s]"></div>
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent 
                          bg-clip-text group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-500">
            Skills Overview
          </span>
        </h2>
        <button className="inline-flex items-center text-blue-600 dark:text-blue-400  transition-all duration-300 link-underline-80
                          hover:scale-110 hover:text-blue-600 dark:hover:text-blue-300 text-sm font-semibold">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <AnimatedProgressBar 
            key={skill.name}
            skill={skill} 
            index={index} 
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};