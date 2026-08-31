import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Github, Linkedin, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import team from '../data/team'
import projects from '../data/projects'
import styles from './Team.module.css'

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Team — DaelonTech</title>
        <meta name="description" content="Meet the DaelonTech team: Visal Vijay, Adarsh Binu, and Rahul Rajan — designers, engineers, and AI builders." />
      </Helmet>

      <section className={`${styles.header} mesh-bg`}>
        <div className="container">
          <motion.p className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            The People
          </motion.p>
          <motion.h1 className="text-h1 font-display" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Meet the Team
          </motion.h1>
          <motion.p className={`text-body-lg ${styles.headerSub}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            Three builders across design, engineering, and AI — working together to create products that matter.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.teamGrid}>
            {team.map((member, i) => {
              const memberProjects = projects.filter(p => member.projectIds.includes(p.id))
              return (
                <motion.article
                  key={member.id}
                  className={styles.memberCard}
                  style={{ '--mc': member.color } as React.CSSProperties}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                >
                  {/* Header */}
                  <div className={styles.memberHeader}>
                    <div className={styles.memberAvatar}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={styles.memberMeta}>
                      <h2 className={`font-display ${styles.memberName}`}>{member.name}</h2>
                      <p className={styles.memberRole}>{member.role}</p>
                    </div>
                  </div>

                  <p className={styles.memberTagline}>"{member.tagline}"</p>

                  {/* Skill Groups */}
                  <div className={styles.skills}>
                    {member.skillGroups.slice(0, 2).map(sg => (
                      <div key={sg.category} className={styles.skillGroup}>
                        <span className={styles.skillCat}>{sg.category}</span>
                        <div className={styles.skillTags}>
                          {sg.items.slice(0, 5).map(item => (
                            <span key={item} className="badge">{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Projects */}
                  <div className={styles.projects}>
                    <span className={styles.skillCat}>Projects</span>
                    <div className={styles.projectList}>
                      {memberProjects.slice(0, 3).map(p => (
                        <Link key={p.id} to={`/projects#${p.id}`} className={styles.projectChip}>
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className={styles.memberFooter}>
                    <div className={styles.socials}>
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
                          <Github size={18} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.portfolio && (
                        <a href={member.portfolio} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Portfolio">
                          <Globe size={18} />
                        </a>
                      )}
                    </div>
                    <Link to={`/team/${member.id}`} className="btn btn--primary btn--sm">
                      Full Profile <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
