import React from 'react';
import { X, Home, User, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, socialLinks } from '../../data/navigation';

interface SidebarProps {
  isOpen: boolean;        // whether the sidebar is open
  onClose: () => void;    // function to close sidebar (for mobile)
  onNavigate: () => void;
}

// map icon names from navigation data
const iconComponents = {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  const location = useLocation(); // gives current route path

  // Called when a navigation link is clicked
  const handleNavigation = () => {
    onNavigate();
  };

  // checks if the current route matches the link path
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 shadow-2xl transform transition-all duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Xyonboard
            </h1>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-3">
            {navigationItems.map((item) => {
              const Icon = iconComponents[item.icon as keyof typeof iconComponents];
              const isActive = isActiveRoute(item.path);
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <Icon size={20} className={`mr-3 transition-transform group-hover:scale-110 ${isActive ? 'scale-110' : ''}`} />
                    <span className="font-medium">{item.label}</span>
                     {/* Pulse dot if active route */}
                    {isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="px-6 py-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = iconComponents[link.icon as keyof typeof iconComponents];
              return (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-110 hover:shadow-lg"
                  aria-label={link.platform}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};