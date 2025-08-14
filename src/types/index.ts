// src/types/index.ts

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface StatCard {
  value: string;
  label: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}