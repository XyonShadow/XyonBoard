import React, { useEffect, useRef, useState } from 'react';
import './StatsCards.css';
import { Target, Clock, Award, Code } from 'lucide-react';
import './StatsCards.css'

// Define the structure for a single stats card
interface StatCardData {
  value: string;
  numericValue: number;
  label: string;
  color: string;
  icon: React.ElementType;
}

// The array of stats cards to display
const statsCards: StatCardData[] = [
  { value: '50+', numericValue: 50, label: 'Projects Completed', color: 'from-blue-500 to-cyan-500', icon: Target },
  { value: '5+', numericValue: 5, label: 'Years Experience', color: 'from-emerald-500 to-teal-500', icon: Clock },
  { value: '98%', numericValue: 98, label: 'Client Satisfaction', color: 'from-purple-500 to-pink-500', icon: Award },
  { value: '15+', numericValue: 15, label: 'Technologies Mastered', color: 'from-orange-500 to-red-500', icon: Code }
];

// AnimatedCounter component: smoothly counts from 0 → end when visible
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

    // Animate using requestAnimationFrame
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime; // Set start time on first frame

      // Calculate progress (0 -> 1)
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease out effect for smooth acceleration/deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      // Update counter value
      setCount(Math.floor(easeOutQuart * end));

      // Continue animating if not finished
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    // Cleanup: cancel animation if component unmounts
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span>{count}{suffix}</span>;
};

// Main StatsCards component
export const StatsCards: React.FC = () => {
  // Track which cards are visible (for animation trigger)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(statsCards.length).fill(false));

  // Refs for each card to observe when it enters viewport
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver to detect when cards are visible
  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Stagger animation for each card by index
            setTimeout(() => {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200); // Delay in per card
          }
        },
        { threshold: 0.3 } // Trigger when 30% of card is visible
      );

      observer.observe(ref);
      return observer;
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((stat, index) => {
        const Icon = stat.icon;
        const isVisible = visibleCards[index]; // Check if this card is visible

        return (
          <div
            key={index}
            ref={el => { cardRefs.current[index] = el; }} // Assign ref for IntersectionObserver
            className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl
                        shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50
                        dark:border-gray-700/50 hover:scale-105 transform cursor-pointer opacity-0
                        ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'} // Slide in when visible
                      `}
            style={{ animationDelay: `${index * 0.1}s` }} // Slight delay per card
          >
            {/* Gradient Overlay appears on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>
            
            {/* Floating content on hover */}
            <div className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <Icon className="w-6 h-6 text-white group-hover:animate-pulse" />
              </div>
              
              {/* Animated counter */}
              <h3 className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.label.includes('%') ? (
                  <AnimatedCounter end={stat.numericValue} suffix="%" isVisible={isVisible} duration={2500} />
                ) : (
                  <AnimatedCounter end={stat.numericValue} suffix="+" isVisible={isVisible} duration={2000} />
                )}
              </h3>

              {/* Label */}
              <p className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
            
            {/* Sparkle effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full animate-sparkle"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}