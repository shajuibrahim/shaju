import { motion } from 'framer-motion'
import { certifications } from '../data/portfolio'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const item = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-navyAlt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20 mb-3">
            Certifications
          </span>
          <h2 className="text-4xl font-black text-white mb-3">
            Continuous Learning — <span className="gradient-text">Always Levelling Up</span>
          </h2>
          <p className="text-slate-400">Combining formal credentials with hands-on, project-based skill development.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {certifications.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ scale: 1.03, borderColor: 'rgba(139,92,246,0.4)' }}
              className="glow-card rounded-2xl p-5 flex gap-4 items-start cursor-default"
            >
              <span className="text-3xl flex-shrink-0">{c.icon}</span>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm leading-snug mb-1">{c.title}</p>
                <p className="text-slate-500 text-xs leading-snug">{c.provider}</p>
                <span className={`inline-block mt-2 text-xs font-bold px-2 py-0.5 rounded ${
                  c.badge === 'Completed'
                    ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                    : 'bg-violet-500/15 text-violet-400 border border-violet-500/20'
                }`}>
                  {c.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
