import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-navyAlt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20 mb-3">
            Experience
          </span>
          <h2 className="text-4xl font-black text-white mb-3">
            <span className="gradient-text">5+ Years</span> of Technical Delivery
          </h2>
          <p className="text-slate-400">From support engineering to building production software end-to-end.</p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 90 }}
              className="glow-card rounded-2xl p-7"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{e.company}</h3>
                  <p className="text-violet-300 text-sm font-medium italic">{e.role}</p>
                  <p className="text-slate-500 text-xs mt-1">📍 {e.location}</p>
                </div>
                <span className="text-xs bg-violet-500/15 text-violet-400 border border-violet-500/20 px-3 py-1.5 rounded-full font-semibold whitespace-nowrap self-start">
                  {e.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="space-y-3 border-t border-white/5 pt-4">
                {e.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + j * 0.1 }}
                    className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                  >
                    <span className="text-violet-500 mt-0.5 flex-shrink-0 font-bold">→</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
