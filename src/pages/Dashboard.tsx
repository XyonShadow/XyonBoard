import React from 'react';
import { HeroSection } from '../components/dashboard/HeroSection';
import { StatsCards } from '../components/dashboard/StatsCards';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsCards />
    </div>
  );
};

export default Dashboard;