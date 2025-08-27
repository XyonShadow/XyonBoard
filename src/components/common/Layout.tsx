import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

// Define the props for the Layout component
interface LayoutProps {
  children: React.ReactNode;
}

// Main Layout component
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // State to track if the sidebar is open
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // function from the header to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to force-close the sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={closeSidebar}
          onNavigate={closeSidebar}
        />
        
        <div className="flex-1 lg:ml-64">
          <Header onMenuClick={toggleSidebar} />
          
          <main className="p-6">
            {children}
          </main>
        </div>

        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
            onClick={closeSidebar}
          />
        )}
      </div>
    </div>
  );
};
