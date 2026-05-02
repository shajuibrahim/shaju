import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase())
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(l) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-xl border-b border-violet-500/10 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="text-white font-bold text-lg tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="gradient-text">Shajunisha</span>
          <span className="text-slate-500 font-normal"> Ibrahim</span>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
            >
              <span className={active === l ? 'text-white' : 'text-slate-400 group-hover:text-white'}>
                {l}
              </span>
              {active === l && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-violet-500/15 rounded-lg border border-violet-500/25 pointer-events-none"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="resume.pdf"
            download="Shajunisha_Ibrahim_Resume.pdf"
            className="ml-3 px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-violet-500/25"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block h-0.5 bg-current origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 bg-current" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-0.5 bg-current origin-center" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-navy/98 backdrop-blur-xl border-b border-violet-500/10 px-6 pb-5"
          >
            {links.map((l, i) => (
              <motion.button
                key={l}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(l)}
                className={`block w-full text-left py-2.5 text-sm font-medium transition-colors ${
                  active === l ? 'text-violet-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
