import React, { useState, useEffect, useRef } from 'react';
import './RecentProjects.css';
import { ExternalLink, Github, Star } from 'lucide-react';

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
      {/* Gradient baackground */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 z-[-2]">
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-transform duration-500`}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-[-1]">
          {[...Array(5)].map((_, i) => {
            const left = Math.random() * 90;
            const top = Math.random() * 90;
            
            return (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-white/30 rounded-full animate-float-${i + 1}`}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            );
          })}
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block backdrop-blur-sm cursor-default ${
            project.status === 'live' ? 'bg-emerald-500/90 text-white animate-pulse-slow' :
            project.status === 'featured' ? 'bg-yellow-500/90 text-black animate-glow' :
            'bg-blue-500/90 text-white animate-bounceGentle'
          }`}>
            {project.status === 'live' ? 'Live' : 
              project.status === 'featured' ? 'Featured' : 
              'In Development'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-fadeInRight">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

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
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
          <div className="relative">
            <Star className="w-6 h-6 text-yellow-500 animate-spin" style={{animationDuration:'8s'}}/>
            <div className="absolute inset-0 w-6 h-6 text-yellow-300 animate-ping opacity-30"></div>
          </div>
          <span>Featured Projects</span>
        </h2>
        <div className={`${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
          <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300
                            text-sm font-semibold link-underline hover:scale-110 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>

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