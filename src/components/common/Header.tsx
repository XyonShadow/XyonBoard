import React from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

// Define the props the Header expects
interface HeaderProps {
  onMenuClick: () => void; // Function passed in from Layout to toggle sidebar
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
      <div className="flex items-center justify-between h-16 px-6">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <div className="flex items-center space-x-4 ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};