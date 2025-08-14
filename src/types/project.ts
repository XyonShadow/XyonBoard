// src/types/project.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  completedDate: string;
}

export type ProjectCategory = 
  | 'web-app' 
  | 'mobile-app' 
  | 'desktop-app' 
  | 'api' 
  | 'design' 
  | 'other';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface ProjectFilter {
  category: ProjectCategory | 'all';
  technology: string | 'all';
  status: ProjectStatus | 'all';
}