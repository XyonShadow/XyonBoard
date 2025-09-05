import React from 'react';
import { Folder, Download, Mail, ChevronRight } from 'lucide-react';
import { HeroSection } from '../components/dashboard/HeroSection';
import { StatsCards } from '../components/dashboard/StatsCards';
import { SkillsOverview } from '../components/dashboard/SkillsOverview';

const quickActions = [
  { label: 'View All Projects', icon: Folder, gradient: 'from-blue-500 to-blue-600' },
  { label: 'Download Resume', icon: Download, gradient: 'from-emerald-500 to-emerald-600' },
  { label: 'Get In Touch', icon: Mail, gradient: 'from-purple-500 to-purple-600' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsCards />
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <SkillsOverview />
        
        {/* Quick Actions Panel */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Quick Actions
          </h2>
          
          <div className="space-y-4">
              {quickActions.map(({ label, icon: Icon, gradient }) => (
              <button
                key={label}
                className={`w-full p-4 bg-gradient-to-r ${gradient} text-white rounded-xl transition-all duration-300
                            flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform
                          `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-semibold">{label}</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </button>
            ))}
          </div>
          
          {/* Status Indicator */}
          <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;