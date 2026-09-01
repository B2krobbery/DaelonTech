export type ProjectTag = 'Web' | 'Mobile' | 'AI/ML' | 'Backend' | 'Open Source' | 'Research' | 'Blockchain' | 'Hackathon';

export interface ProjectMember {
  id: string;
  name: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface CollaborationPartner {
  partnerName: string;
  partnerUrl: string;
}

export interface CaseStudy {
  clientName: string;
  location: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: ProjectTag[];
  tech: string[];
  team: ProjectMember[];
  featured?: boolean;
  link?: ProjectLink;
  collaboration?: CollaborationPartner;
  year: string;
  status: 'Live' | 'Completed' | 'In Progress' | 'Research';
  visualType?: 'gold-event' | 'agentic-ai' | 'security-dark' | 'mobile-app' | 'health-ai' | 'code-terminal';
  caseStudy?: CaseStudy;
}

const projects: ProjectItem[] = [
  {
    id: 'icck-diwali',
    title: 'ICCK Diwali Ball 2026',
    subtitle: 'Event Website & Registration Platform',
    description: 'Designed and developed in collaboration with Talamanda AI (talamanda.com) for the ICCK Diwali Ball & Business Awards 2026 — a premium gala event at the Fairmont Ambassador, Seoul. The site features a luxury dark gold design system, animated hero section, event information, business awards nomination flow, ticketing CTA, photo gallery with 2025 recap, and sponsor sections.',
    tags: ['Web'],
    tech: ['React', 'TypeScript', 'TanStack Router', 'Tailwind CSS', 'Firebase', 'Resend'],
    team: [
      { id: 'visal', name: 'Visal Vijay' },
      { id: 'adarsh', name: 'Adarsh Binu' },
    ],
    collaboration: {
      partnerName: 'Talamanda AI',
      partnerUrl: 'https://talamanda.com',
    },
    featured: true,
    link: { label: 'View Live Site', url: 'https://diwali.indochamkorea.org/' },
    year: '2026',
    status: 'Live',
    caseStudy: {
      clientName: 'Indian Chamber of Commerce in Korea (ICCK)',
      location: 'Fairmont Ambassador, Seoul',
      highlights: [
        'Built in collaboration with Talamanda AI (talamanda.com)',
        'Custom Dark Gold & Champagne Luxury Design System tailored for Korean-Indian business leadership',
        'Interactive Business Awards nomination workflow & ticket reservation portal',
        'Optimised performance, mobile responsiveness, and 2025 event photo recap gallery',
      ],
    },
  },
  {
    id: 'agentic-marketing',
    title: 'Agentic Marketing Platform',
    subtitle: 'Multi-Agent AI Marketing Automation',
    description: 'A modular multi-agent platform built at Talamanda AI that automates market research, campaign planning, content generation, publishing, lead generation, and outreach. Built around a Marketing Orchestrator coordinating reusable services. Includes research and lead-generation pipelines via SerpAPI, automated Instagram publishing, and a Next.js + React frontend.',
    tags: ['AI/ML', 'Web', 'Backend'],
    tech: ['Python', 'Next.js', 'React', 'TypeScript', 'SerpAPI', 'Gemini AI', 'Firebase', 'MCP'],
    team: [{ id: 'adarsh', name: 'Adarsh Binu' }],
    collaboration: {
      partnerName: 'Talamanda AI',
      partnerUrl: 'https://talamanda.com',
    },
    featured: true,
    year: '2026',
    status: 'In Progress',
  },
  {
    id: 'nulltrace',
    title: 'NullTrace',
    subtitle: 'Opinion & Feedback Analytics Platform',
    description: 'A secure feedback and analytics platform with a Flask backend, JWT authentication, RBAC-protected REST APIs, and a normalised PostgreSQL schema. Features NLP sentiment analysis, JSONB-backed analytics endpoints, SHA-256 hash-chained audit logging, and defences against SQL injection, XSS, and CSRF. Containerised with Docker Compose and deployed to an Azure Linux VM.',
    tags: ['Backend', 'Web'],
    tech: ['Flask', 'PostgreSQL', 'Docker', 'Azure', 'JWT', 'RBAC', 'NLP', 'Python'],
    team: [{ id: 'adarsh', name: 'Adarsh Binu' }],
    featured: true,
    year: '2025–2026',
    status: 'Completed',
  },
  {
    id: 'echo-runtime',
    title: 'Echo Runtime',
    subtitle: 'MCP-Based Fraud Detection Platform',
    description: 'An AI-driven fraud analysis and user management platform built at the MCP to the Moon Hackathon (July 2026). Exposes backend capabilities as structured Model Context Protocol (MCP) tools using NitroStack. Architecture follows MCP Tool Layer → Service Layer → Application Logic. Built, tested, and deployed end-to-end within the hackathon timeline.',
    tags: ['AI/ML', 'Backend', 'Hackathon'],
    tech: ['TypeScript', 'Node.js', 'MCP', 'NitroStack', 'REST APIs'],
    team: [{ id: 'adarsh', name: 'Adarsh Binu' }],
    year: '2026',
    status: 'Completed',
  },
  {
    id: 'hash-farmers',
    title: 'Hash-Farmers',
    subtitle: 'Decentralised Crop Insurance System',
    description: 'A blockchain-based decentralised crop insurance solution for Smart India Hackathon 2025. Implements a cryptographic claim-validation pipeline using SHA-256 hashing and ECDSA signatures to authenticate off-chain farmer data. Integrates with Solidity smart contracts using ecrecover and threshold-based multi-report aggregation.',
    tags: ['Blockchain', 'Hackathon', 'Backend'],
    tech: ['Solidity', 'Python', 'SHA-256', 'ECDSA', 'Smart Contracts'],
    team: [{ id: 'adarsh', name: 'Adarsh Binu' }],
    year: '2025',
    status: 'Completed',
  },
  {
    id: 'brain-tumor',
    title: 'Brain Tumor MRI Classification',
    subtitle: 'Hybrid CNN-ML Medical Imaging Pipeline',
    description: 'A four-class medical image classification pipeline using DenseNet201 feature extraction and PCA-based dimensionality reduction. Benchmarked SVM, MLP, and Gaussian Naive Bayes classifiers, achieving 95.66% accuracy. Evaluated using precision, recall, F1-score, and confusion matrices.',
    tags: ['AI/ML', 'Research'],
    tech: ['TensorFlow', 'DenseNet201', 'PCA', 'SVM', 'Python', 'Scikit-learn'],
    team: [{ id: 'adarsh', name: 'Adarsh Binu' }],
    year: '2026',
    status: 'Completed',
  },
  {
    id: 'stride-wars',
    title: 'Stride Wars',
    subtitle: 'Location-Based Fitness Gamification Platform',
    description: 'A full-stack MERN platform that gamifies running by converting GPS-tracked routes into interactive territories to capture, conquer, and defend. Features secure JWT/bcrypt authentication, regional and global leaderboards, achievements, and competitive gameplay. Integrates GPS/Map APIs for real-time route tracking and territory visualisation.',
    tags: ['Web', 'Mobile'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'GPS / Map APIs', 'REST APIs'],
    team: [{ id: 'rahul', name: 'Rahul Rajan' }],
    year: '2025',
    status: 'Completed',
  },
  {
    id: 'geosafe',
    title: 'GEOSAFE',
    subtitle: 'Location-Based Community Safety Android App',
    description: 'An Android safety application enabling users to report nearby crime incidents and visualise activity through an interactive OpenStreetMap interface. Features real-time location tracking, risk-zone detection, in-app alerts for high-risk areas, and density-based crime heatmaps. Built with MVVM architecture and local SQLite/Room storage.',
    tags: ['Mobile'],
    tech: ['Kotlin', 'Android', 'OpenStreetMap', 'OSMDroid/MapLibre', 'SQLite / Room', 'MVVM'],
    team: [{ id: 'rahul', name: 'Rahul Rajan' }],
    year: '2025',
    status: 'Completed',
  },
  {
    id: 'qlearning-wban',
    title: 'Q-Learning Adaptive WBAN Routing',
    subtitle: 'Research — Intelligent Medical IoT Networking',
    description: 'A Q-Learning-based adaptive routing framework for Wireless Body Area Networks, dynamically selecting energy-efficient and reliable next-hop nodes based on network state, connectivity, and transmission conditions. Integrates priority-aware scheduling to differentiate critical medical data from routine sensor data. Evaluated across single-hop, two-hop, and hybrid routing strategies.',
    tags: ['AI/ML', 'Research'],
    tech: ['MATLAB', 'Q-Learning', 'Reinforcement Learning', 'WBAN', 'NS-3'],
    team: [{ id: 'rahul', name: 'Rahul Rajan' }],
    year: '2026',
    status: 'Research',
  },
  {
    id: 'hyprland-config',
    title: 'Hyprland Linux Desktop',
    subtitle: 'Open-Source Wayland Desktop Environment',
    description: 'A fully customised Hyprland Wayland desktop environment on Arch Linux — optimising window management, keybindings, and status bar configuration. Dotfiles managed via Git for reproducible setups. Submitted pull requests to multiple Hyprland ecosystem repositories addressing environment improvements, configuration fixes, and runtime behaviour issues.',
    tags: ['Open Source'],
    tech: ['Arch Linux', 'Hyprland', 'Wayland', 'Shell Scripting', 'Git'],
    team: [{ id: 'visal', name: 'Visal Vijay' }],
    year: '2025–Present',
    status: 'In Progress',
  },
];

export default projects;
