import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20 mb-3">
            Projects
          </span>
          <h2 className="text-4xl font-black text-white mb-3">
            <span className="gradient-text">4 Production Projects</span> Delivered
          </h2>
          <p className="text-slate-400">Every project below is built, deployed, and actively used — not demos. <span className="text-slate-500">Click any card for details.</span></p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 90 }}
              onClick={() => setExpanded(expanded === p.number ? null : p.number)}
              className="glow-card rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-500" />

              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-bold text-violet-400 tracking-widest bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
                <motion.span
                  animate={{ rotate: expanded === p.number ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="text-slate-500 group-hover:text-violet-400 text-xl leading-none flex-shrink-0 ml-2"
                >
                  +
                </motion.span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2 leading-snug">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex gap-5 border-t border-white/5 pt-4">
                {p.pstats.map((s) => (
                  <div key={s.label}>
                    <div className="text-violet-400 font-black text-xl">{s.val}</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Expanded bullets */}
              <AnimatePresence>
                {expanded === p.number && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-5 space-y-2 border-t border-white/5 pt-4">
                      {p.bullets.map((b, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.08 }}
                          className="flex gap-2 text-sm text-slate-400"
                        >
                          <span className="text-violet-500 mt-0.5 flex-shrink-0">→</span>
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
