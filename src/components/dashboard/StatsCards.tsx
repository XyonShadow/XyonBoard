import React, { useEffect, useState } from 'react';
import './StatsCards.css';
import { Target, Clock, Award, Code } from 'lucide-react';
import './StatsCards.css'

interface StatCardData {
  value: string;
  numericValue: number;
  label: string;
  color: string;
  icon: React.ElementType;
}

const statsCards: StatCardData[] = [
  { value: '50+', numericValue: 50, label: 'Projects Completed', color: 'from-blue-500 to-cyan-500', icon: Target },
  { value: '5+', numericValue: 5, label: 'Years Experience', color: 'from-emerald-500 to-teal-500', icon: Clock },
  { value: '98%', numericValue: 98, label: 'Client Satisfaction', color: 'from-purple-500 to-pink-500', icon: Award },
  { value: '15+', numericValue: 15, label: 'Technologies Mastered', color: 'from-orange-500 to-red-500', icon: Code }
];

const AnimatedCounter: React.FC<{ 
  end: number; 
  suffix?: string; 
  duration?: number;
  isVisible: boolean;
}> = ({ end, suffix = '', duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span>{count}{suffix}</span>;
};

export const StatsCards: React.FC = () => {
  const isVisible = true;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.label.includes('%') ? (
                <AnimatedCounter end={stat.numericValue} suffix="%" isVisible={isVisible} duration={2500} />
              ) : (
                <AnimatedCounter end={stat.numericValue} suffix="+" isVisible={isVisible} duration={2000} />
              )}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}