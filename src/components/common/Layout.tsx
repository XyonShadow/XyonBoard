import React from 'react';

// Define the props for the Layout component
interface LayoutProps {
  children: React.ReactNode;
}

// Main Layout component
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};
