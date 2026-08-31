import { ExternalLink, Award, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import projects from '../../data/projects'
import styles from './CaseStudyBanner.module.css'

export default function CaseStudyBanner() {
  const icck = projects.find(p => p.id === 'icck-diwali')
  if (!icck || !icck.caseStudy) return null

  const { caseStudy } = icck

  return (
    <motion.section
      className={styles.banner}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header Bar */}
        <div className={styles.bannerHeader}>
          <div className={styles.headerTitleGroup}>
            <span className={styles.clientTag}>
              <Award size={13} /> Featured Case Study
            </span>
            <span className="badge badge--green">Live Production Site</span>
          </div>
          <a
            href={icck.link?.url}
            target="_blank"
            rel="noreferrer"
            className={styles.liveLinkHeader}
          >
            diwali.indochamkorea.org <ExternalLink size={13} />
          </a>
        </div>

        {/* Title */}
        <div className={styles.titleSection}>
          <h3 className={`text-h2 font-display ${styles.title}`}>
            {icck.title}
          </h3>
          <p className={styles.subtitle}>{caseStudy.clientName} · {caseStudy.location}</p>
        </div>

        {/* Structured Case Study Grid */}
        <div className={styles.gridContainer}>
          {/* Challenge */}
          <div className={styles.caseBox}>
            <h4 className={styles.boxTitle}>01 / The Challenge</h4>
            <p className={styles.boxText}>
              The Indian Chamber of Commerce in Korea needed a luxury digital presence for their annual flagship gala &amp; business awards event in Seoul. The platform required an elegant aesthetic, business awards nomination portal, and ticketing workflow.
            </p>
          </div>

          {/* What We Built */}
          <div className={styles.caseBox}>
            <h4 className={styles.boxTitle}>02 / What We Built</h4>
            <p className={styles.boxText}>
              We designed and engineered a custom web platform featuring a bespoke dark gold design system, business awards submission flow, interactive event schedule, photo recap gallery, and responsive ticketing CTAs.
            </p>
          </div>

          {/* Key Features */}
          <div className={styles.caseBoxFull}>
            <h4 className={styles.boxTitle}>03 / Key Features</h4>
            <ul className={styles.featureList}>
              {caseStudy.highlights.map((item, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <CheckCircle2 size={15} className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bar: Tech Stack & CTA */}
        <div className={styles.bannerFooter}>
          <div className={styles.techStack}>
            <span className={styles.techLabel}>Tech Stack:</span>
            {icck.tech.map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
          <a
            href={icck.link?.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--sm"
          >
            Visit Live Site <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}
