interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web-app' | 'mobile-app' | 'design';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  completedDate: string;
}

export const projects : Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    longDescription: 'Built a complete e-commerce platform using React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory management.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'web-app',
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    featured: true,
    status: 'completed',
    completedDate: '2024-01-15'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'Developed a modern task management application using Next.js and Prisma. Features real-time collaboration, drag-and-drop task organization, team management, and progress tracking.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io', 'React Query'],
    category: 'web-app',
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/yourusername/task-manager',
    featured: true,
    status: 'completed',
    completedDate: '2023-11-22'
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication.',
    technologies: ['React Native', 'Firebase', 'Redux', 'React Navigation'],
    category: 'mobile-app',
    githubUrl: 'https://github.com/yourusername/mobile-banking',
    featured: true,
    status: 'completed',
    completedDate: '2023-09-10'
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with interactive data visualizations.',
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    category: 'web-app',
    liveUrl: 'https://analytics-demo.com',
    githubUrl: 'https://github.com/yourusername/analytics-dashboard',
    featured: false,
    status: 'completed',
    completedDate: '2023-08-05'
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'A beautiful weather app with 7-day forecasts and location-based services.',
    technologies: ['React', 'OpenWeather API', 'Styled Components'],
    category: 'web-app',
    liveUrl: 'https://weather-demo.com',
    githubUrl: 'https://github.com/yourusername/weather-app',
    featured: false,
    status: 'completed',
    completedDate: '2023-07-12'
  },
  {
    id: 'portfolio-redesign',
    title: 'Portfolio Website Redesign',
    description: 'A modern portfolio redesign with dark mode and smooth animations.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'MDX'],
    category: 'design',
    liveUrl: 'https://portfolio-demo.com',
    githubUrl: 'https://github.com/yourusername/portfolio-v2',
    featured: false,
    status: 'completed',
    completedDate: '2023-06-18'
  }
];