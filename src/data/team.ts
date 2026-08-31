export interface SkillGroup {
  category: string;
  items: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  education: string;
  color: string;
  skillGroups: SkillGroup[];
  projectIds: string[];
  github?: string;
  linkedin?: string;
  portfolio?: string;
  avatarUrl?: string;
}

const team: TeamMember[] = [
  {
    id: 'visal',
    name: 'Visal Vijay',
    role: 'UI/UX Designer · Frontend Developer · Linux & Open Source',
    tagline: 'Crafting interfaces that feel intentional — from pixel to system.',
    bio: `Visal is a designer and frontend developer with a strong foundation in Linux systems, open-source contribution, and UI/UX design. He brings a precise, systems-thinking approach to every interface — whether building a polished event website or configuring a Wayland compositor from scratch. He contributed pull requests to the Hyprland ecosystem and collaborated on the design and development of the ICCK Diwali Ball 2026 website.`,
    education: 'B.Tech, Electrical & Computer Engineering — Amrita School of Engineering, Amritapuri (2023–2027)',
    color: '#5B6EF5',
    skillGroups: [
      {
        category: 'Design',
        items: ['UI/UX Design', 'Product Interface Design', 'Responsive Web Design', 'Mobile App UI', 'Design Systems'],
      },
      {
        category: 'Frontend',
        items: ['HTML/CSS', 'JavaScript', 'Frontend Implementation', 'Component Design'],
      },
      {
        category: 'Linux & Open Source',
        items: ['Arch Linux', 'Hyprland / Wayland', 'Shell Scripting', 'Git / GitHub', 'Networking', 'Open-Source Contribution', 'System Troubleshooting'],
      },
    ],
    projectIds: ['icck-diwali', 'hyprland-config'],
    github: 'https://github.com/B2krobbery',
    linkedin: 'https://www.linkedin.com/in/visal-vijay-a6185932a/',
    portfolio: 'https://b2krobbery.is-a.dev/',
  },
  {
    id: 'adarsh',
    name: 'Adarsh Binu',
    role: 'Full-Stack Developer · Backend Engineer · AI/Agentic Systems',
    tagline: 'Building the systems that think, scale, and ship.',
    bio: `Adarsh is a full-stack and backend engineer with deep experience in AI integrations, agentic workflows, and cloud deployment. As a Software/AI Intern at Talamanda AI, he is building Agentic Marketing — a multi-agent platform that automates research, campaign planning, content generation, and outreach. His project portfolio spans secure Flask/PostgreSQL backends, MCP-based platforms, blockchain validation pipelines, and medical image classification models. He competed in the Smart India Hackathon 2025 and the MCP to the Moon Hackathon (2026).`,
    education: 'B.Tech, Computer Science & Engineering — Amrita Vishwa Vidyapeetham (2023–2027), CGPA: 7.68',
    color: '#8B5CF6',
    skillGroups: [
      {
        category: 'Languages',
        items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'Haskell'],
      },
      {
        category: 'Frontend & Full-Stack',
        items: ['React', 'Next.js', 'Node.js', 'REST APIs'],
      },
      {
        category: 'Backend',
        items: ['Flask', 'PostgreSQL', 'SQL', 'JWT', 'RBAC', 'Input Validation', 'Audit Logging'],
      },
      {
        category: 'AI / ML',
        items: ['PyTorch', 'TensorFlow', 'DenseNet201', 'CNNs', 'PCA', 'SVM', 'NLP', 'LLM Integration', 'Agentic Workflows', 'MCP'],
      },
      {
        category: 'Cloud & DevOps',
        items: ['Docker', 'Docker Compose', 'Firebase', 'Azure', 'Linux', 'Git / GitHub'],
      },
      {
        category: 'Security & Blockchain',
        items: ['SHA-256', 'ECDSA', 'Solidity', 'Smart Contracts', 'Web App Security'],
      },
    ],
    projectIds: ['agentic-marketing', 'nulltrace', 'echo-runtime', 'hash-farmers', 'brain-tumor', 'icck-diwali'],
    github: 'https://github.com/marvelpokemaster',
    linkedin: 'https://linkedin.com/in/adarsh-binu',
  },
  {
    id: 'rahul',
    name: 'Rahul Rajan',
    role: 'AI/ML Engineer · Full-Stack Developer · Intelligent Systems',
    tagline: 'Turning algorithms into solutions — from mobile apps to research-grade AI.',
    bio: `Rahul is an AI/ML engineer and full-stack developer with research-level experience in reinforcement learning, wireless body area networks, and intelligent routing systems. His Q-Learning WBAN project applies adaptive routing algorithms to IoMT networks, focusing on energy efficiency and medical data prioritisation. He also builds production applications — Stride Wars is a full MERN-stack location-based fitness gamification platform, and GEOSAFE is an Android safety app with real-time crime heatmaps and location-aware alerts.`,
    education: 'B.Tech, Computer Science & Engineering — Amrita Vishwa Vidyapeetham (2023–present), CGPA: 7.05',
    color: '#22D3A8',
    skillGroups: [
      {
        category: 'Languages',
        items: ['Python', 'C', 'Java', 'JavaScript', 'Kotlin', 'SQL'],
      },
      {
        category: 'AI / ML',
        items: ['PyTorch', 'TensorFlow', 'Reinforcement Learning', 'Q-Learning', 'Deep Learning', 'Machine Learning', 'MATLAB'],
      },
      {
        category: 'Full-Stack',
        items: ['React.js', 'Node.js', 'Express.js', 'Laravel', 'REST APIs', 'MongoDB', 'MySQL', 'PostgreSQL'],
      },
      {
        category: 'Mobile',
        items: ['Kotlin', 'Android', 'MVVM Architecture', 'SQLite / Room', 'OpenStreetMap'],
      },
      {
        category: 'Research & Networking',
        items: ['Wireless Body Area Networks (WBANs)', 'Network Simulation', 'NS-3', 'IoMT', 'DSA', 'Operating Systems', 'Computer Networks'],
      },
    ],
    projectIds: ['qlearning-wban', 'stride-wars', 'geosafe'],
    github: 'https://github.com/rahu1rajan',
    linkedin: 'https://linkedin.com/in/rahul-rajan-sabastian',
  },
];

export default team;
