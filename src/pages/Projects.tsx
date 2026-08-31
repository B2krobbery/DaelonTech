import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ExternalLink, Users, Code, Shield, Cpu, Smartphone, Sparkles, Award } from 'lucide-react'
import projects, { ProjectTag } from '../data/projects'
import styles from './Projects.module.css'

const ALL_FILTERS: ('All' | ProjectTag)[] = ['All', 'Web', 'Mobile', 'AI/ML', 'Backend', 'Open Source', 'Research', 'Blockchain', 'Hackathon']

const statusColor: Record<string, string> = {
  Live: 'badge--green',
  Completed: 'badge--accent',
  'In Progress': 'badge--violet',
  Research: 'badge',
}

export default function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectTag>('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter as ProjectTag))

  return (
    <>
      <Helmet>
        <title>Work &amp; Selected Projects — DaelonTech</title>
        <meta name="description" content="Explore DaelonTech's project portfolio: web applications, mobile apps, AI/ML systems, backend architectures, and open-source contributions." />
      </Helmet>

      {/* Page Header */}
      <section className={`${styles.header} mesh-bg`}>
        <div className="container">
          <p className="section-label">Selected Work</p>
          <h1 className="text-h1 font-display">
            Projects &amp; Case Studies
          </h1>
          <p className={`text-body-lg ${styles.headerSub}`}>
            Built by our team. Spanning production client software, hackathon builds, AI research, and open-source systems.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className={`container ${styles.filters}`}>
        {ALL_FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <section className={`section--sm ${styles.grid}`}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {filtered.map(project => (
              <article
                key={project.id}
                id={project.id}
                className={`card card--accent ${styles.projectCard} ${project.featured ? styles.featured : ''}`}
              >
                {/* Visual Banner Header */}
                <div className={`${styles.visualBanner} ${styles[`visual_${project.visualType || 'code-terminal'}`]}`}>
                  {project.visualType === 'gold-event' && <Award size={22} className={styles.bannerIconGold} />}
                  {project.visualType === 'agentic-ai' && <Sparkles size={22} className={styles.bannerIconViolet} />}
                  {project.visualType === 'security-dark' && <Shield size={22} className={styles.bannerIconGreen} />}
                  {project.visualType === 'mobile-app' && <Smartphone size={22} className={styles.bannerIconBlue} />}
                  {project.visualType === 'health-ai' && <Cpu size={22} className={styles.bannerIconViolet} />}
                  {(!project.visualType || project.visualType === 'code-terminal') && <Code size={22} className={styles.bannerIconBlue} />}
                  <span className={styles.bannerTag}>{project.tags[0]}</span>
                </div>

                <div className={styles.projectTop}>
                  <div className={styles.projectMeta}>
                    <span className={`badge ${statusColor[project.status]}`}>
                      {project.status === 'Live' ? 'Live Project' : project.status}
                    </span>
                    <span className="badge">{project.year}</span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.externalLink}
                      aria-label="Open live project"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <h2 className={`text-h3 font-display ${styles.projectTitle}`}>
                  {project.title}
                </h2>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <div className={styles.projectFooter}>
                  <div className={styles.teamMeta}>
                    <Users size={14} />
                    Built by {project.team.map(m => m.name).join(', ')}
                  </div>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--primary btn--sm"
                    >
                      {project.link.label} <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
