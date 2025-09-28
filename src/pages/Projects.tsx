import React, {useState, useMemo} from "react";
import { ExternalLink, Github, Calendar, Code, Eye, Heart} from 'lucide-react';
import './Projects.css';
import { projects } from '../data/projects';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web-app' | 'mobile-app' | 'design';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  completedDate: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const views = useMemo(() => Math.floor(Math.random() * 1000) + 100, []);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 10);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div 
      className={`group relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:scale-105 transform'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/30 rounded-full animate-float-${i + 1}`}
              style={{
                left: `${20 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 animate-fadeInLeft">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            project.featured ? 'bg-yellow-500/90 text-black animate-glow' :
            project.status === 'completed' ? 'bg-emerald-500/90 text-white animate-pulse-slow' :
            'bg-blue-500/90 text-white animate-bounce-gentle'
          }`}>
            {project.featured ? '⭐ Featured' : 
             project.status === 'completed' ? '✅ Completed' : 
             '🚧 In Progress'}
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

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-red-400' : ''}`} />
        </button>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
        
        {/* Technologies */}
        <div className="flex gap-2 flex-wrap">
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <span 
              key={tech}
              className={`px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-800 hover:scale-110 transition-transform duration-300 cursor-pointer opacity-0 animate-fadeInUp`}
              style={{ animationDelay: `${0.5 + techIndex * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium hover:scale-110 transition-transform duration-300 cursor-pointer">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(project.completedDate).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

        {/* Animated Background Accents */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-400/20 rounded-full blur-2xl animate-floatReverse" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-2 mb-6 shadow-md">
            <Code className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">
              My Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Explore My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400">
              Featured Projects
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed\">
            A curated collection of the work I'm most proud of — from innovative web apps to sleek UI designs that solve real-world
            challenges.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#projects-list"
              className="inline-block mt-3 bg-white text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Projects Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Projects
        </h2>

        {/* Projects Grid/List */}
        <div>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;