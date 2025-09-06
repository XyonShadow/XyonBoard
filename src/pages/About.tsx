import React from 'react';
import { User, Code, Palette, Server, Github, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20`}>
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full translate-y-32 -translate-x-16 blur-2xl animate-floatReverse" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">About Me</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Michael</span>
              </h1>
              
              <p className="text-xl leading-relaxed">
                A passionate developer who loves creating beautiful, functional, and user-centered digital experiences.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-white">Available for hire</span>
                </div>
                <a
                  href="https://github.com/XyonShadow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Profile Image Placeholder with Animation */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-spin opacity-20" style={{animationDuration: '8s'}}/>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-8xl font-bold animate-float">
                  👨‍💻
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full animate-bounceGentle">
                  <Code className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm p-3 rounded-full animate-bounceGentle" style={{ animationDelay: '0.5s' }}>
                  <Palette className="w-6 h-6" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-white/20 backdrop-blur-sm p-3 rounded-full animate-bounceGentle" style={{ animationDelay: '1s' }}>
                  <Server className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;