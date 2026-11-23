import { motion } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'
import { interests } from '../data/cvData'

export default function Interests() {
  return (
    <SectionWrapper
      id="interests"
      numeral="VII"
      title="BEYOND THE KINGDOM"
      subtitle="Beyond the archives and workshops — where the scribe rests and grows."
      particles
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {interests.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group parchment-panel rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-400 p-7 flex flex-col items-center text-center gap-3 hover:shadow-[0_8px_40px_rgba(197,164,109,0.12)] cursor-default"
          >
            <motion.span
              className="text-3xl transition-transform duration-400 group-hover:scale-125"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {it.icon}
            </motion.span>
            <p className="font-display text-[11px] tracking-[0.15em] uppercase text-parchment/75 group-hover:text-gold transition-colors">
              {it.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Countryside divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center gap-3 mt-14"
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
        <span className="text-gold/70 text-xs">✦</span>
        <p className="font-editorial italic text-mystic text-sm">The journey continues beyond work</p>
        <span className="text-gold/70 text-xs">✦</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
      </motion.div>
    </SectionWrapper>
  )
}
