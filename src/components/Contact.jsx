import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

const contactItems = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: '✉️' },
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}`, icon: '📞' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shaju-ibrahim', href: personal.linkedin, icon: '💼' },
  { label: 'GitHub', value: 'github.com/shajuibrahim', href: personal.github, icon: '🐙' },
  { label: 'Location', value: personal.address, href: null, icon: '📍' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20 mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Open to <span className="gradient-text">Freelance &amp; Remote</span> Work
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Available for web development, automation, AI integration, and CRM projects.
            Response within <strong className="text-slate-200">24 hours</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {contactItems.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="glow-card rounded-2xl p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="text-violet-400 hover:text-violet-300 font-medium text-sm transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-slate-300 font-medium text-sm">{c.value}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${personal.email}`}
            className="px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-violet-500/25"
          >
            Send Email
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-cyan-500/25"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="resume.pdf"
            download="Shajunisha_Ibrahim_Resume.pdf"
            className="px-8 py-3.5 border border-slate-700 hover:border-violet-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
