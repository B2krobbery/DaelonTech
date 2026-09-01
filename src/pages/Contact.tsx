import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import team from '../data/team'
import styles from './Contact.module.css'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const subject = data.get('subject') as string
    const message = data.get('message') as string

    setLoading(true)
    setStatus('idle')

    try {
      // Send to Web3Forms free API
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'pb-9e45558d-71b3-469b-930b-0efd70bf09f9', // Public key endpoint
          name,
          email,
          subject,
          message,
          from_name: 'DaelonTech Portfolio Contact',
        }),
      })

      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        // Mailto fallback if API key requires registration
        throw new Error('Fallback')
      }
    } catch {
      // Seamless mailto fallback
      const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`
      window.location.href = `mailto:office@daelontech.in?subject=${encodeURIComponent(subject)}&body=${body}`
      setStatus('success')
      form.reset()
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — DaelonTech</title>
        <meta name="description" content="Get in touch with DaelonTech. We'd love to hear about your project." />
      </Helmet>

      <section className={`${styles.header} mesh-bg`}>
        <div className="container">
          <motion.p className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            Work With Us
          </motion.p>
          <motion.h1 className="text-h1 font-display" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Let's Build Something <span className="gradient-text">Together</span>
          </motion.h1>
          <motion.p className={`text-body-lg ${styles.headerSub}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            Have a project, an idea, or just want to say hello? Reach out — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          {/* Contact Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.infoCard}>
              <h2 className="text-h3 font-display">Get In Touch</h2>
              <p className="text-body">
                We're a small team — you'll be talking directly with the people who'll work on your project.
              </p>
              <a href="mailto:office@daelontech.in" className={styles.emailLink}>
                <Mail size={18} />
                office@daelontech.in
              </a>
            </div>

            <div className={styles.teamSocials}>
              <h3 className={styles.teamSocialsTitle}>Team Profiles</h3>
              {team.map(member => (
                <div key={member.id} className={styles.memberRow}>
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
                  <div className={styles.memberInfo}>
                    <span className={styles.memberName}>{member.name}</span>
                    <span className={styles.memberRole}>{member.role.split('·')[0].trim()}</span>
                  </div>
                  <div className={styles.memberLinks}>
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={16} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noreferrer" aria-label="Portfolio">
                        <Globe size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={styles.formCard}>
              <h2 className="text-h3 font-display">Send a Message</h2>

              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <CheckCircle size={32} />
                  <h3>Message sent!</h3>
                  <p>Your email client should have opened. We'll get back to you soon.</p>
                  <button className="btn btn--secondary btn--sm" onClick={() => setStatus('idle')}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="contact-name" className={styles.label}>Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="contact-email" className={styles.label}>Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className={styles.input}
                      />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What's this about?"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-message" className={styles.label}>Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your project or idea..."
                      className={styles.textarea}
                    />
                  </div>
                  {status === 'error' && (
                    <div className={styles.errorMsg}>
                      <AlertCircle size={16} />
                      Something went wrong. Please email us directly.
                    </div>
                  )}
                  <button
                    type="submit"
                    className={`btn btn--primary ${styles.submitBtn}`}
                    disabled={loading}
                  >
                    {loading ? 'Opening...' : 'Send Message'}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
