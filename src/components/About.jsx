import { motion } from 'framer-motion'

const differentiators = [
  {
    label: 'Career Pivot',
    title: 'Support → Full Stack at the same company',
    desc: 'Earned the transition by delivering — not by changing jobs.',
    icon: '🔄',
  },
  {
    label: 'Research Mindset',
    title: 'IEEE-published researcher turned engineer',
    desc: 'From academic papers on clustering algorithms to live production deployments.',
    icon: '📄',
  },
  {
    label: 'Full Ownership',
    title: 'Design → Build → Deploy → Maintain',
    desc: 'No external team, no handoffs. Every project owned end-to-end.',
    icon: '🎯',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-navyAlt">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 rounded-full border border-violet-500/20 mb-3">
            About Me
          </span>
          <h2 className="text-4xl font-black text-white mb-3">
            I didn't start as a developer —{' '}
            <span className="gradient-text">I became one by building real things.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-10 lg:gap-14 items-start">

          {/* Left — photo + tags */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
                <img
                  src="shaju.png"
                  alt="Shajunisha Ibrahim"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </span>
            </div>
            <div className="flex flex-col gap-2 w-full mt-3">
              <span className="tag text-center text-xs">📍 Tiruppur, Tamil Nadu</span>
              <span className="tag text-center text-xs">🌐 Tamil · English</span>
              <span className="tag text-center text-xs">💼 Freelance & Remote</span>
            </div>
          </motion.div>

          {/* Right — story + differentiator cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 mb-7"
            >
              <p className="text-slate-300 text-lg leading-relaxed">
                After completing M.Tech in IT, I joined Synergy Technology as a Support Engineer. Instead of waiting
                for an opportunity, I <span className="text-white font-semibold">built one</span> — teaching myself
                full-stack development and delivering 4 production software solutions for the same company I worked at.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Today I combine a research-grade problem analysis mindset with hands-on engineering — from Electron.js
                desktop apps to AI-powered n8n automation workflows. I don't build demos. Everything I ship is in
                active daily use.
              </p>
            </motion.div>

            <div className="space-y-3">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="glow-card rounded-xl p-4 flex gap-4 items-start"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{d.icon}</span>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-0.5">{d.label}</div>
                    <div className="text-white font-semibold text-sm mb-0.5">{d.title}</div>
                    <div className="text-slate-400 text-xs leading-snug">{d.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
