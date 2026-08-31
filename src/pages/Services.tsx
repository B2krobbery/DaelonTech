import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Palette, Globe, Smartphone, Server, Brain, Cloud } from 'lucide-react'
import services from '../data/services'
import team from '../data/team'
import styles from './Services.module.css'

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={26} />,
  Smartphone: <Smartphone size={26} />,
  Palette: <Palette size={26} />,
  Server: <Server size={26} />,
  Brain: <Brain size={26} />,
  Cloud: <Cloud size={26} />,
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services &amp; Capabilities — DaelonTech</title>
        <meta name="description" content="Outcome-driven software services: Web platforms, Mobile applications, UI/UX Design, Backend architecture, AI systems, and Cloud deployment." />
      </Helmet>

      {/* Header */}
      <section className={`${styles.header} mesh-bg`}>
        <div className="container">
          <p className="section-label">What We Build</p>
          <h1 className="text-h1 font-display">Services &amp; Capabilities</h1>
          <p className={`text-body-lg ${styles.headerSub}`}>
            Client-focused digital product engineering — delivering clean design, scalable backends, and practical AI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    {iconMap[service.icon]}
                  </div>
                  <div className={styles.titleGroup}>
                    <h2 className={`text-h3 font-display ${styles.serviceTitle}`}>{service.title}</h2>
                    <p className={styles.serviceOutcome}>{service.outcome}</p>
                  </div>
                </div>

                <p className={styles.serviceDesc}>{service.description}</p>

                <div className={styles.serviceMeta}>
                  <span className={styles.metaLabel}>Technologies &amp; Skills:</span>
                  <div className={styles.serviceTags}>
                    {service.tags.map(t => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.serviceTeam}>
                  <span className={styles.metaLabel}>Core Builders:</span>
                  <div className={styles.teamChips}>
                    {service.team.map(id => {
                      const member = team.find(m => m.id === id)
                      if (!member) return null
                      return (
                        <Link key={id} to={`/team/${id}`} className={styles.teamChip} title={member.name}>
                          {member.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section--sm ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className="text-h2 font-display">Have a project in mind?</h2>
            <p className="text-body-lg">Tell us about what you're looking to build and we'll figure out how we can help.</p>
            <Link to="/contact" className="btn btn--primary">
              Start a Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
