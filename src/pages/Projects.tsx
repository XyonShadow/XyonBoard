import React from "react";
import { Code } from "lucide-react";
import './Projects.css';

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
    </div>
  );
};

export default Projects;