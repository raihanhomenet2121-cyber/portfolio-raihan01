import { motion } from 'framer-motion'

/**
 * SectionHeading — chapter numeral + title + gold rules.
 * Used by detail pages and non-wrapper sections.
 */
export default function SectionHeading({ numeral, title, subtitle, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignCls} mb-14`}
    >
      {numeral && (
        <p className="font-mono text-[10px] tracking-[0.5em] text-gold/60 uppercase mb-3">
          Chapter {numeral}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-parchment tracking-wide">
        {title}
      </h2>
      {subtitle && <p className="font-editorial italic text-lg text-mystic mt-4 max-w-2xl">{subtitle}</p>}
      <div className="flex items-center gap-3 mt-6">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
        <span className="text-gold text-sm">✦</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
      </div>
    </motion.div>
  )
}
