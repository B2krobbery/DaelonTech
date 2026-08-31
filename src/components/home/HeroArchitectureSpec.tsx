import { useState } from 'react'
import { Palette, Code2, Brain, Cloud, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import styles from './HeroArchitectureSpec.module.css'

interface TechLayer {
  id: string
  number: string
  title: string
  icon: React.ReactNode
  stack: string[]
  description: string
  status: string
}

const layers: TechLayer[] = [
  {
    id: 'design',
    number: '01',
    title: 'Product & UX Design',
    icon: <Palette size={18} />,
    stack: ['Space Grotesk', 'Design Systems', 'Responsive Layouts', 'Wireframing'],
    description: 'Bespoke design systems & interface architecture focused on visual clarity and user conversion.',
    status: 'Design Standard',
  },
  {
    id: 'fullstack',
    number: '02',
    title: 'Full-Stack & API Architecture',
    icon: <Code2 size={18} />,
    stack: ['React', 'Next.js', 'TypeScript', 'Flask', 'PostgreSQL'],
    description: 'Production-grade applications, RBAC-protected REST APIs, and normalized database models.',
    status: 'Built & Deployed',
  },
  {
    id: 'ai',
    number: '03',
    title: 'AI & Automation Systems',
    icon: <Brain size={18} />,
    stack: ['PyTorch', 'DenseNet201', 'MCP Protocol', 'SerpAPI', 'Agent Workflows'],
    description: 'Computer vision classifiers, multi-agent marketing pipelines, and Model Context Protocol tools.',
    status: 'Active Pipeline',
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud & Infrastructure',
    icon: <Cloud size={18} />,
    stack: ['Docker Compose', 'Azure Linux VM', 'Firebase', 'Arch Linux', 'CI/CD'],
    description: 'Containerized deployment setups, Linux VM provisioning, and reproducible system setups.',
    status: 'Production Infrastructure',
  },
]

export default function HeroArchitectureSpec() {
  const [selectedId, setSelectedId] = useState<string>('fullstack')
  const selectedLayer = layers.find(l => l.id === selectedId) || layers[1]

  return (
    <div className={styles.container}>
      {/* Box */}
      <div className={styles.specBox}>
        {/* Box Top Header */}
        <div className={styles.specHeader}>
          <div className={styles.headerTitleGroup}>
            <span className={styles.specDot} />
            <span className={styles.headerTitle}>DAELONTECH / SYSTEM SPECIFICATION</span>
          </div>
          <span className={styles.headerStatus}>TECHNICAL ARCHITECTURE</span>
        </div>

        {/* Spec Layers Grid */}
        <div className={styles.layersList}>
          {layers.map(layer => {
            const isSelected = layer.id === selectedId
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedId(layer.id)}
                className={`${styles.layerRow} ${isSelected ? styles.selectedRow : ''}`}
              >
                <div className={styles.layerLeft}>
                  <span className={styles.layerNum}>{layer.number}</span>
                  <span className={styles.layerIcon}>{layer.icon}</span>
                  <span className={styles.layerTitle}>{layer.title}</span>
                </div>
                <div className={styles.layerRight}>
                  <span className={styles.layerStatusBadge}>{layer.status}</span>
                  <ArrowUpRight size={14} className={styles.arrowIcon} />
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Layer Details Panel */}
        <div className={styles.detailPanel}>
          <div className={styles.detailHeader}>
            <span className={styles.detailNum}>{selectedLayer.number} / CAPABILITY DETAIL</span>
            <span className={styles.detailBadge}>
              <CheckCircle2 size={12} /> {selectedLayer.status}
            </span>
          </div>
          <p className={styles.detailDesc}>{selectedLayer.description}</p>
          <div className={styles.stackTags}>
            {selectedLayer.stack.map(tech => (
              <span key={tech} className={styles.stackTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
