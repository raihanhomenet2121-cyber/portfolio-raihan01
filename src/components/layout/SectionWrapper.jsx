import { motion } from 'framer-motion'

/**
 * SectionWrapper — standard medieval section container with header
 * (chapter numeral + title + gold rule) and entrance animation.
 */
export default function SectionWrapper({
  id,
  numeral,
  title,
  subtitle,
  children,
  className = '',
  fog = false,
  particles = false,
}) {
  return (
    <section id={id} className={`relative py-28 ${className}`}>
      {fog && <FogLayerLazy />}
      {particles && <ParticlesLazy />}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          {numeral && (
            <p className="font-mono text-[10px] tracking-[0.5em] text-gold/60 uppercase mb-3">
              Chapter {numeral}
            </p>
          )}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="font-editorial italic text-lg text-mystic mt-4">{subtitle}</p>
          )}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold text-sm">✦</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </motion.div>

        {children}
      </div>
    </section>
  )
}

// Lazy-loaded atmosphere to keep initial bundle light
import FogLayer from '../medieval/FogLayer'
import MedievalParticles from '../medieval/MedievalParticles'
function FogLayerLazy() { return <FogLayer density="light" /> }
function ParticlesLazy() { return <MedievalParticles count={16} /> }
