import React, { useState, useEffect, useRef } from 'react';
import { Zap, Code, Palette, Server, Database, Cloud } from 'lucide-react';

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

    const timer = setTimeout(() => {
      setWidth(skill.level);
      
      // Animate the number counting
      let start = 0;
      const duration = 1500;
      const startTime = Date.now();
      
      const animateNumber = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setDisplayLevel(Math.floor(easeOutQuart * skill.level));
        
        if (progress < 1) {
          requestAnimationFrame(animateNumber);
        }
      };
      
      requestAnimationFrame(animateNumber);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [skill.level, index, isVisible]);

  const Icon = skill.icon;

  return (
    <div className={`group transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <div className={`text-sm font-bold text-white bg-gradient-to-r ${skill.color} px-3 py-1 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300`}>
          {displayLevel}%
        </div>
      </div>
      
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden group-hover:h-4 transition-all duration-300">
        {/* Background shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        
        {/* Progress bar */}
        <div 
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out shadow-lg group-hover:shadow-xl`}
          style={{ width: `${width}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
          
          {/* Pulse effect at the end */}
          <div className="absolute right-0 top-0 w-1 h-full bg-white/50 animate-pulse"></div>
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
            <div className="absolute inset-0 w-6 h-6 text-yellow-300 animate-ping opacity-20"></div>
          </div>
          <span className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            Skills Overview
          </span>
        </h2>
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold transition-all duration-300 hover:scale-110 hover:underline decoration-wavy">
          View All →
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

      {/* Floating skill badges */}
      <div className={`mt-8 flex flex-wrap gap-2 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
        <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          Frontend
        </div>
        <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          Backend
        </div>
        <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          Design
        </div>
        <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          DevOps
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};