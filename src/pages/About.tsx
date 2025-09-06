import React, { useState } from 'react';
import { User, Code, Palette, Server, Github, Mail, Coffee, Target, Heart, Zap } from 'lucide-react';

const personalStats = [
  { label: 'Coffee Cups', value: '847', icon: Coffee },
  { label: 'Lines of Code', value: '50K+', icon: Code },
  { label: 'Projects Completed', value: '12', icon: Target },
  { label: 'Happy Users', value: '20+', icon: Heart }
];

const About: React.FC = () => {
  type TabKey = 'story' | 'techStack';
  const [activeTab, setActiveTab] = useState<TabKey>('story');

  const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: 'story', label: 'My Story', icon: User },
  ];

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

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* Personal Stats */}
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {personalStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transform transition-all duration-500 text-center group`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === tab.key
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Story Section */}
            <div className="p-8">
              {activeTab === 'story' && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        "Xyon" means "above" — and for me, it;s a reminder to always aim higher, learn more,and grow with every project I
                        take on. My journey into development really started with curiosity, exploring how websites and apps worked and
                        trying to recreate them on my own.  
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        I'm still early in my journey as a developer, but each project I work on teaches me something new, from
                        problem-solving and writing cleaner code, to understanding the people who will use what I build. My goal is to keep
                        improving, keep experimenting, and create work that reflects progress, not perfection.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What Drives Me</h3>
                      <ul className="space-y-3">
                        {[
                          'Creating intuitive user experiences',
                          'Solving complex technical challenges',
                          'Mentoring upcoming developers',
                          'Building sustainable, scalable solutions',
                          'Staying ahead of technology trends'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;