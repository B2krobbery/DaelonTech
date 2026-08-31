export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  outcome: string;
  description: string;
  tags: string[];
  team: string[];
}

const services: ServiceItem[] = [
  {
    id: 'web',
    icon: 'Globe',
    title: 'Websites & Web Platforms',
    outcome: 'High-performance web applications built for conversion and scale.',
    description: 'We design and engineer responsive web products — from interactive marketing sites to complex web applications with authentication, real-time data, and seamless UX.',
    tags: ['React', 'Next.js', 'TypeScript', 'Vite', 'SEO & CWV'],
    team: ['visal', 'adarsh'],
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Mobile Applications',
    outcome: 'Native Android and mobile experiences with clean architecture.',
    description: 'We build mobile products focused on fast response times, real-time location mapping, offline storage, and clean architecture (MVVM).',
    tags: ['Kotlin', 'Android', 'MVVM', 'SQLite / Room', 'Map APIs'],
    team: ['rahul', 'visal'],
  },
  {
    id: 'uiux',
    icon: 'Palette',
    title: 'UI/UX & Product Design',
    outcome: 'User-centered interfaces and complete design systems.',
    description: 'We create intuitive, modern design systems, wireframes, and production-ready visual interfaces that communicate product value immediately.',
    tags: ['Design Systems', 'Responsive UI', 'Interaction Design', 'Wireframing'],
    team: ['visal'],
  },
  {
    id: 'backend',
    icon: 'Server',
    title: 'Backend & API Architecture',
    outcome: 'Secure, production-grade REST APIs and database systems.',
    description: 'We architect backend infrastructures with role-based access control (RBAC), JWT authentication, input validation, audit logging, and normalized schemas.',
    tags: ['Flask', 'Node.js', 'PostgreSQL', 'JWT / RBAC', 'Docker'],
    team: ['adarsh', 'rahul'],
  },
  {
    id: 'aiml',
    icon: 'Brain',
    title: 'AI & Automation Systems',
    outcome: 'Intelligent multi-agent platforms and machine learning pipelines.',
    description: 'We build practical AI features — from custom computer vision and deep learning classifiers to automated agentic workflows using MCP and LLMs.',
    tags: ['PyTorch', 'TensorFlow', 'MCP', 'Agent Workflows', 'SerpAPI'],
    team: ['adarsh', 'rahul'],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Cloud & Infrastructure',
    outcome: 'Reliable containerized deployment and Linux environment setups.',
    description: 'We handle cloud provisioning, containerized orchestration with Docker Compose, Azure Linux VM setup, and reproducible system setups.',
    tags: ['Docker', 'Azure', 'Firebase', 'Linux VMs', 'CI/CD'],
    team: ['adarsh'],
  },
];

export default services;
