import React from "react";
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Simple Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg max-w-xl mx-auto">
          A simple page to showcase my work.
        </p>
      </div>
    </div>
  );
};

export default Projects;