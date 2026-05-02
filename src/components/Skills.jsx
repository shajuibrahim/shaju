import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navyAlt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20 mb-3">
            Skills
          </span>
          <h2 className="text-4xl font-black text-white mb-3">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400">Built and shipped across 6 technology domains in production environments.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ scale: 1.02, borderColor: 'rgba(139,92,246,0.4)' }}
              className="glow-card rounded-2xl p-6 cursor-default"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.08 }}
                    className="tag cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
