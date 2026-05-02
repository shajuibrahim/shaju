import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/portfolio'

function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const isFloat = target.includes('.')
  const numeric = parseFloat(target)
  const suffix = target.replace(/[\d.]/g, '')

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = numeric / (duration / 16)
    const timer = setInterval(() => {
      start = Math.min(start + step, numeric)
      setCount(start)
      if (start >= numeric) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, numeric, duration])

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div className="bg-[#080f1f] border-y border-violet-500/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 100 }}
            className="text-center py-9 px-4 border-r border-violet-500/10 last:border-r-0 hover:bg-violet-500/5 transition-colors duration-300"
          >
            <div className="text-3xl font-black gradient-text">
              <CountUp target={s.num} />
            </div>
            <div className="text-xs text-slate-500 mt-1.5 uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
