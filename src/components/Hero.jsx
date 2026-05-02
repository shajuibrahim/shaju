import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const speed = deleting ? 50 : 100
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1))
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1600)
      } else {
        setText(word.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

const floatingTags = ['React.js', 'Electron.js', 'n8n', 'AI Agents', 'Node.js']

export default function Hero() {
  const typed = useTypewriter(personal.roles)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Freelance &amp; Remote Work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
        >
          <span className="gradient-text">Shajunisha Ibrahim</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-violet-400 font-semibold mb-6 h-8"
        >
          {typed}
          <span className="cursor-blink ml-0.5 text-violet-300">|</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Delivered <strong className="text-slate-200">4 production-ready software solutions</strong> including
          a desktop accounting system, corporate website, CRM, and AI-powered chatbot integrating{' '}
          <strong className="text-slate-200">3 platforms</strong>. M.Tech IT · 5+ years · Udemy Certified.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-14"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/20"
          >
            View My Work
          </button>
          <a
            href="resume.pdf"
            download="Shajunisha_Ibrahim_Resume.pdf"
            className="px-7 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Floating tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {floatingTags.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.06 }}
              className="tag text-xs"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-0.5 h-8 bg-gradient-to-b from-violet-500 to-transparent rounded"
        />
      </motion.div>
    </section>
  )
}
