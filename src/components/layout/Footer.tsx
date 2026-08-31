import { Link } from 'react-router-dom'
import { Zap, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import styles from './Footer.module.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Team' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const teamLinks = [
  {
    name: 'Visal Vijay',
    github: 'https://github.com/B2krobbery',
    linkedin: 'https://www.linkedin.com/in/visal-vijay-a6185932a/',
  },
  {
    name: 'Adarsh Binu',
    github: 'https://github.com/marvelpokemaster',
    linkedin: 'https://linkedin.com/in/adarsh-binu',
  },
  {
    name: 'Rahul Rajan',
    github: 'https://github.com/rahu1rajan',
    linkedin: 'https://linkedin.com/in/rahul-rajan-sabastian',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <Zap size={18} strokeWidth={2.5} />
            DaelonTech
          </Link>
          <p className={styles.tagline}>
            A technology team building modern digital products —
            spanning design, engineering, and AI.
          </p>
          <a href="mailto:office@daelontech.in" className={styles.email}>
            <Mail size={15} />
            office@daelontech.in
          </a>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Navigation</h3>
          <ul className={styles.colLinks}>
            {navLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={styles.colLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Team */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Team</h3>
          <ul className={styles.teamList}>
            {teamLinks.map(m => (
              <li key={m.name} className={styles.teamItem}>
                <span className={styles.teamName}>{m.name}</span>
                <div className={styles.teamSocials}>
                  {m.github && (
                    <a href={m.github} target="_blank" rel="noreferrer" aria-label={`${m.name} GitHub`}>
                      <Github size={15} />
                    </a>
                  )}
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} LinkedIn`}>
                      <Linkedin size={15} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contact</h3>
          <a href="mailto:office@daelontech.in" className={styles.contactBtn}>
            <Mail size={16} />
            office@daelontech.in
          </a>
          <Link to="/contact" className={styles.contactLink}>
            Work with us <ExternalLink size={13} />
          </Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {year} DaelonTech. All rights reserved.</p>
        <p className={styles.copy}>daelontech.in</p>
      </div>
    </footer>
  )
}
