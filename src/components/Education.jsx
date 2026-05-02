import { motion } from 'framer-motion'
import { education, publications } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20 mb-3">
            Education
          </span>
          <h2 className="text-4xl font-black text-white mb-3">
            Strong <span className="gradient-text">Academic Foundation</span>
          </h2>
          <p className="text-slate-400">Consistently achieved top scores across 2 postgraduate and undergraduate degrees.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="glow-card rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-cyan-500" />
              <div className="text-4xl font-black gradient-text mb-1">{e.degree}</div>
              <div className="text-violet-400 font-semibold text-sm mb-2">{e.field}</div>
              <div className="text-slate-400 text-sm leading-snug mb-4">{e.institution}</div>
              {e.note && (
                <div className="text-slate-500 text-xs mb-4 italic">{e.note}</div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-xs">{e.year}</span>
                <span className="bg-violet-500/15 text-violet-300 border border-violet-500/20 px-3 py-1 rounded-full text-sm font-bold">
                  {e.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research & Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-card rounded-2xl p-7"
        >
          <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <span className="text-2xl">📄</span> Research &amp; Publications
            <span className="ml-2 text-xs bg-violet-500/15 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full">
              3 Papers
            </span>
          </h3>
          <div className="space-y-4">
            {publications.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className={`text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                  p.type === 'Journal'
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/20'
                    : 'bg-violet-500/20 text-violet-400 border border-violet-500/20'
                }`}>
                  {p.type}
                </span>
                <div>
                  <p className="text-slate-200 text-sm font-medium">{p.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{p.venue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
