import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#030812] border-t border-white/5 py-6 text-center"
    >
      <p className="text-slate-500 text-sm">
        &copy; 2026 <span className="text-slate-400">N. Shajunisha Ibrahim</span> · Full Stack Developer · Tiruppur, Tamil Nadu
      </p>
    </motion.footer>
  )
}
