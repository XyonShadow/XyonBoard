import React, { useState, useEffect, useRef } from 'react';
import './RecentProjects.css';
import { ExternalLink, Github, Star, Calendar, ArrowLeft, TrendingUp } from 'lucide-react';

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
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [dotPositions] = useState(() =>
    [...Array(5)].map(() => ({
      left: Math.random() * 90,
      top: Math.random() * 90,
      delay: Math.random() * 2,
    }))
  );

  return (
    <div 
      className={`group relative h-[26rem] opacity-0 perspective-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-1500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all
                          duration-500 border border-gray-200/50 dark:border-gray-700/50 h-full group-hover:scale-105 transform">
            
            {/* Project Image */}
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}></div>

              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {dotPositions.map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-white/30 rounded-full animate-float-${i + 1}`}
                    style={{
                      left: `${pos.left}%`,
                      top: `${pos.top}%`,
                      animationDelay: `${pos.delay}s`,
                    }}
                  />
                ))}
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

              {/* Flip Button */}
              <button 
                onClick={() => setIsFlipped(true)}
                className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              >
                <TrendingUp size={16} />
              </button>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-800 hover:scale-110 transition-transform duration-300 cursor-default opacity-0 animate-fadeInUp`}
                    style={{ animationDelay: `${0.5 + techIndex * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-lg h-full text-white p-6 flex flex-col justify-center">
            <button 
              onClick={() => setIsFlipped(false)}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft size={18} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center">Project Stats</h3>
            
            {/* Stats */}
            <div className="space-y-4">
              {project.stats?.rating && (
                <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star size={18} />
                    <span>Active Users</span>
                  </div>
                  <span className="font-bold text-xl">{project.stats.rating}</span>
                </div>
              )}
              
              {project.stats?.growth && (
                <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} />
                    <span>Growth Rate</span>
                  </div>
                  <span className="font-bold text-xl text-green-300">{project.stats.growth}</span>
                </div>
              )}
              
              {project.stats?.completion && (
                <div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>Completion</span>
                  </div>
                  <span className="font-bold text-xl">{project.stats.completion}</span>
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm opacity-80">Click the links above to explore this project!</p>
            </div>
          </div>
        </div>
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