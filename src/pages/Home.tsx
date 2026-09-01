import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, ExternalLink, Globe, Smartphone, Palette, Server, Brain, Cloud, Layers, CheckCircle2 } from 'lucide-react'
import CaseStudyBanner from '../components/home/CaseStudyBanner'
import projects from '../data/projects'
import team from '../data/team'
import services from '../data/services'
import styles from './Home.module.css'

const serviceIcons: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />,
  Smartphone: <Smartphone size={22} />,
  Palette: <Palette size={22} />,
  Server: <Server size={22} />,
  Brain: <Brain size={22} />,
  Cloud: <Cloud size={22} />,
}

const statusColor: Record<string, string> = {
  Live: 'badge--green',
  Completed: 'badge--accent',
  'In Progress': 'badge--violet',
  Research: 'badge',
}

const selectedProjects = projects.filter(p => p.id !== 'icck-diwali').slice(0, 4)

export default function Home() {
  return (
    <>
      <Helmet>
        <title>DaelonTech — Product &amp; Engineering Team</title>
        <meta name="description" content="DaelonTech is a software technology team. We design and build web platforms, mobile apps, backend architectures, and AI systems." />
      </Helmet>

      {/* ===== EDITORIAL HERO ===== */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          {/* Main Hero Column */}
          <div className={styles.heroContent}>
            <p className="section-label">Software &amp; Design Studio</p>

            <h1 className={`text-hero font-display ${styles.heroTitle}`}>
              We design and build digital products.
            </h1>

            <p className={`text-body-lg ${styles.heroSub}`}>
              Web platforms, mobile applications, backend architectures, and AI systems.
              We turn technical requirements into clean, production-ready software.
            </p>

            <div className={styles.heroCtas}>
              <Link to="/projects" className="btn btn--primary">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn--secondary">
                Start a Project
              </Link>
            </div>
          </div>

          {/* Right Editorial Studio Summary Card */}
          <div className={styles.heroSideCard}>
            <div className={styles.sideCardHeader}>
              <span className={styles.sideCardDot} />
              <span className={styles.sideCardTitle}>STUDIO CAPABILITIES</span>
            </div>

            <div className={styles.sideCardBody}>
              <div className={styles.sideCardItem}>
                <div className={styles.itemHeader}>
                  <Layers size={16} className={styles.itemIcon} />
                  <h4>Product &amp; System Design</h4>
                </div>
                <p>Bespoke design systems, responsive interfaces, and interaction design.</p>
              </div>

              <div className={styles.sideCardItem}>
                <div className={styles.itemHeader}>
                  <Server size={16} className={styles.itemIcon} />
                  <h4>Full-Stack &amp; Engineering</h4>
                </div>
                <p>React, Next.js, Python/Flask backends, PostgreSQL, and Docker setups.</p>
              </div>

              <div className={styles.sideCardItem}>
                <div className={styles.itemHeader}>
                  <Brain size={16} className={styles.itemIcon} />
                  <h4>AI &amp; Automation</h4>
                </div>
                <p>Multi-agent marketing automation, computer vision, and MCP integrations.</p>
              </div>

              <div className={styles.sideCardCollab}>
                <CheckCircle2 size={14} className={styles.collabCheck} />
                <span>Featured Client Collaboration: <strong>Talamanda AI</strong> &amp; <strong>ICCK Seoul</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED CASE STUDY ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">Featured Case Study</p>
            <h2 className="text-h2 font-display">Client Work in Production</h2>
          </div>
          <CaseStudyBanner />
        </div>
      </section>

      {/* ===== WHAT WE BUILD (SERVICES OUTCOME PREVIEW) ===== */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">What We Build</p>
            <h2 className="text-h2 font-display">Services &amp; Capabilities</h2>
            <p className="text-body-lg" style={{ maxWidth: '52ch' }}>
              We partner with teams to engineer digital products across the full development lifecycle.
            </p>
          </div>

          <div className="grid-3">
            {services.slice(0, 6).map(service => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {serviceIcons[service.icon]}
                </div>
                <h3 className={`text-h3 font-display ${styles.serviceTitle}`}>{service.title}</h3>
                <p className={styles.serviceOutcome}>{service.outcome}</p>
                <p className={styles.serviceDesc}>{service.description}</p>
                <div className={styles.serviceTags}>
                  {service.tags.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.centerBtn}>
            <Link to="/services" className="btn btn--secondary">
              View All Capabilities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MEET THE TEAM ===== */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">The Team</p>
            <h2 className="text-h2 font-display">Meet the Builders</h2>
            <p className="text-body-lg" style={{ maxWidth: '52ch' }}>
              A small, agile technology team with focused expertise across engineering and design.
            </p>
          </div>

          <div className="grid-3">
            {team.map(member => (
              <Link key={member.id} to={`/team/${member.id}`} className={`card card--accent ${styles.memberCard}`}>
                {member.github ? (
                  <img src={`${member.github}.png`} alt={`${member.name} avatar`} className={styles.memberAvatar} />
                ) : (
                  <div
                    className={styles.memberAvatar}
                    style={{ '--mc': member.color } as React.CSSProperties}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <h3 className={`text-h3 font-display ${styles.memberName}`}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberTagline}>{member.tagline}</p>
                <span className={`btn btn--ghost btn--sm ${styles.memberMore}`}>
                  View Profile &amp; Projects <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELECTED PROJECTS ===== */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">Portfolio</p>
            <h2 className="text-h2 font-display">More Selected Work</h2>
          </div>

          <div className={styles.projectsGrid}>
            {selectedProjects.map(project => (
              <article key={project.id} className={`card card--accent ${styles.projectCard}`}>
                <div className={styles.projectTop}>
                  <div className={styles.projectMeta}>
                    <span className={`badge ${statusColor[project.status]}`}>{project.status}</span>
                    <span className="badge">{project.year}</span>
                    {project.collaboration && (
                      <span className="badge">Collab: {project.collaboration.partnerName}</span>
                    )}
                  </div>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.projectLinkIcon}
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <h3 className={`text-h3 font-display ${styles.projectTitle}`}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.projectTech}>
                  {project.tech.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <div className={styles.projectFooter}>
                  <span className={styles.teamMeta}>
                    Built by {project.team.map(m => m.name).join(', ')}
                  </span>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--ghost btn--sm"
                    >
                      {project.link.label} <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.centerBtn}>
            <Link to="/projects" className="btn btn--secondary">
              Explore All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== START A PROJECT CTA BANNER ===== */}
      <section className={`section--sm ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <p className="section-label">Start a Project</p>
            <h2 className={`text-h2 font-display ${styles.ctaTitle}`}>
              Have a digital product in mind?
            </h2>
            <p className={`text-body-lg ${styles.ctaSub}`}>
              Tell us about what you're looking to build — we'll give you an honest breakdown of how we can help.
            </p>
            <Link to="/contact" className={`btn btn--primary ${styles.ctaBtn}`}>
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
