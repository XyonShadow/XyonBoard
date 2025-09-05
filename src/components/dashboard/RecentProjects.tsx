import React, { useState, useEffect, useRef } from 'react';
import './RecentProjects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: 'live' | 'featured' | 'development';
  liveUrl?: string;
  githubUrl?: string;
  stats?: {
    rating?: string;
    growth?: string;
    completion?: string;
  };
}

const Projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, real-time inventory, and advanced analytics dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    status: 'live',
    liveUrl: '#',
    githubUrl: '#',
    stats: {
      rating: '4/5',
      growth: '+25%',
      completion: '100%'
    }
  },
  {
    id: 'ai-dashboard',
    title: 'AI Analytics Dashboard',
    description: 'Machine learning dashboard with predictive analytics, real-time data visualization, and automated insights.',
    technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js'],
    status: 'featured',
    liveUrl: '#',
    githubUrl: '#',
    stats: {
      rating: '4.5/5',
      growth: '+40%',
      completion: '95%'
    }
  },
  {
    id: 'health-tracker-app',
    title: 'Health Tracker App',
    description: 'A mobile app to track fitness activities, monitor health metrics, and provide personalized wellness insights.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Chart.js'],
    status: 'development',
    liveUrl: '#',
    githubUrl: '#',
    stats: {
      rating: '5/5',
      completion: '60%',
      growth: '+20%'
    }
  }
];

const ProjectCard: React.FC<{ 
  project: Project;
  index: number; 
  isVisible: boolean;
}> = ({ project, index, isVisible }) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50"
                    opacity-0 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {project.technologies.map(tech => (
          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export const RecentProjects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
}