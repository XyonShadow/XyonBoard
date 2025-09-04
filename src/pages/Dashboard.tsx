import React from 'react';
import { HeroSection } from '../components/dashboard/HeroSection';
import { StatsCards } from '../components/dashboard/StatsCards';
import { SkillsOverview } from '../components/dashboard/SkillsOverview';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsCards />

      <SkillsOverview />
    </div>
  );
};

export default Dashboard;