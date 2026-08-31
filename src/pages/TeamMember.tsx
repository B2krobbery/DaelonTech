import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Github, Linkedin, ExternalLink, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import team from '../data/team'
import projects from '../data/projects'
import styles from './TeamMember.module.css'

export default function TeamMember() {
  const { memberId } = useParams()
  const member = team.find(m => m.id === memberId)

  if (!member) return <Navigate to="/team" replace />

  const memberProjects = projects.filter(p => member.projectIds.includes(p.id))

  return (
    <>
      <Helmet>
        <title>{member.name} — DaelonTech</title>
        <meta name="description" content={`${member.name}: ${member.role}. ${member.tagline}`} />
      </Helmet>

      {/* Hero */}
      <section
        className={`${styles.hero} mesh-bg`}
        style={{ '--mc': member.color } as React.CSSProperties}
      >
        <div className="container">
          <Link to="/team" className={styles.back}>
            <ArrowLeft size={16} /> Back to Team
          </Link>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className={styles.avatar}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className={`text-h1 font-display ${styles.heroName}`}>{member.name}</h1>
              <p className={styles.heroRole}>{member.role}</p>
              <p className={styles.heroTagline}>"{member.tagline}"</p>
            </div>
          </motion.div>

          <div className={styles.heroLinks}>
            {member.github && (
              <a href={member.github} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm">
                <Github size={15} /> GitHub
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm">
                <Linkedin size={15} /> LinkedIn
              </a>
            )}
            {member.portfolio && (
              <a href={member.portfolio} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                <Globe size={15} /> Portfolio
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className={`container ${styles.layout}`}>
          {/* Left: Bio + Skills */}
          <motion.div
            className={styles.main}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Bio */}
            <div className={styles.bioCard}>
              <h2 className={`font-display ${styles.sectionTitle}`}>About</h2>
              <p className="text-body-lg">{member.bio}</p>
              <p className={styles.education}>{member.education}</p>
            </div>

            {/* Skills */}
            <div className={styles.skillsCard}>
              <h2 className={`font-display ${styles.sectionTitle}`}>Skills & Expertise</h2>
              <div className={styles.skillGroups}>
                {member.skillGroups.map(sg => (
                  <div key={sg.category} className={styles.skillGroup}>
                    <h3 className={styles.skillCat}>{sg.category}</h3>
                    <div className={styles.skillTags}>
                      {sg.items.map(item => (
                        <span key={item} className="badge">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Projects */}
          <motion.div
            className={styles.sidebar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className={`font-display ${styles.sectionTitle}`}>Projects</h2>
            <div className={styles.projectsList}>
              {memberProjects.map(p => (
                <article
                  key={p.id}
                  id={p.id}
                  className={styles.projectCard}
                  style={{ '--mc': member.color } as React.CSSProperties}
                >
                  <div className={styles.projectTop}>
                    <span className="badge">{p.year}</span>
                    {p.link && (
                      <a
                        href={p.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.projectLink}
                        aria-label="Open project"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <h3 className={`font-display ${styles.projectTitle}`}>{p.title}</h3>
                  <p className={styles.projectSubtitle}>{p.subtitle}</p>
                  <p className={styles.projectDesc}>{p.description}</p>
                  <div className={styles.projectTech}>
                    {p.tech.slice(0, 6).map(t => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
