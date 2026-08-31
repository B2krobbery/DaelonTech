import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Palette, Code2, Brain, ExternalLink } from 'lucide-react'
import team from '../data/team'
import styles from './About.module.css'

const pillars = [
  {
    icon: <Palette size={28} />,
    title: 'Design-First',
    color: '#5B6EF5',
    body: 'Every product we build starts with a clear visual direction. We care deeply about interfaces that feel intuitive, modern, and clean — because design is how software communicates.',
  },
  {
    icon: <Code2 size={28} />,
    title: 'Engineering Depth',
    color: '#8B5CF6',
    body: 'We write production-grade code across the full stack — from secure backend APIs and cloud deployments to responsive frontends and native mobile apps.',
  },
  {
    icon: <Brain size={28} />,
    title: 'Practical AI Integrations',
    color: '#22D3A8',
    body: 'We build ML pipelines, multi-agent workflows, and LLM integrations as first-class components in the digital products we build.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — DaelonTech</title>
        <meta name="description" content="DaelonTech is a software technology team combining UI/UX design, full-stack engineering, and AI to build modern digital products." />
      </Helmet>

      {/* Unified Hero & Story Section — Zero Dead Space */}
      <section className={`${styles.aboutHero} mesh-bg`}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.narrativeText}>
              <p className="section-label">Who We Are</p>
              <h1 className="text-h1 font-display">About DaelonTech</h1>

              <div className={styles.storyDivider} />

              <p className="section-label">Our Story</p>
              <h2 className="text-h2 font-display" style={{ fontSize: '1.65rem' }}>
                A team that covers the full stack — literally.
              </h2>
              <p className="text-body-lg">
                DaelonTech is a technology team building modern digital products. We combine{' '}
                <strong>UI/UX design</strong>, <strong>software engineering</strong>, and{' '}
                <strong>AI systems</strong> to deliver practical solutions for real-world applications.
              </p>
              <p className="text-body">
                Our team of three brings together hands-on experience in Linux systems, full-stack and
                backend development, computer vision, reinforcement learning, agentic AI, mobile apps,
                cloud infrastructure, and product design.
              </p>
              <p className="text-body">
                Our flagship live client project — the <strong>ICCK Diwali Ball 2026</strong> website for the
                Indian Chamber of Commerce in Korea — is live in production at the Fairmont Ambassador, Seoul.
              </p>
              <div>
                <a
                  href="https://diwali.indochamkorea.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--secondary btn--sm"
                >
                  View Live ICCK Site <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className={styles.narrativeStats}>
              {[
                { label: 'Team Members', value: '3' },
                { label: 'Live Client Project', value: '1' },
                { label: 'Projects Built', value: '10+' },
                { label: 'Technologies Used', value: '30+' },
              ].map(stat => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={`section ${styles.pillarsSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">Our Approach</p>
            <h2 className="text-h2 font-display">How We Work</h2>
          </div>
          <div className="grid-3">
            {pillars.map(p => (
              <div
                key={p.title}
                className={styles.pillarCard}
                style={{ '--pillar-color': p.color } as React.CSSProperties}
              >
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className="text-h3 font-display">{p.title}</h3>
                <p className="text-body" style={{ fontSize: '0.9rem' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="section-label">The People</p>
            <h2 className="text-h2 font-display">Meet the Team</h2>
          </div>
          <div className="grid-3">
            {team.map(m => (
              <Link key={m.id} to={`/team/${m.id}`} className={`card card--accent ${styles.memberCard}`}>
                <div
                  className={styles.memberAvatar}
                  style={{ '--mc': m.color } as React.CSSProperties}
                >
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700 }}>{m.name}</h3>
                  <p style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono', lineHeight: 1.5 }}>
                    {m.role.split('·')[0].trim()}
                  </p>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{m.tagline}</p>
                <span className="btn btn--ghost btn--sm" style={{ alignSelf: 'flex-start', color: 'var(--accent)' }}>
                  View Profile <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
