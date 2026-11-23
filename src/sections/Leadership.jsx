import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'
import { organizations } from '../data/cvData'

function GuildCard({ org, index }) {
  const [expanded, setExpanded] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className={`relative flex ${isLeft ? 'lg:justify-start' : 'lg:justify-end'}`}
    >
      {/* Timeline node */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 z-10">
        <div className="w-3.5 h-3.5 rotate-45 bg-obsidian border border-gold/70 shadow-[0_0_12px_rgba(197,164,109,0.3)]" />
      </div>

      <button
        onClick={() => setExpanded(e => !e)}
        className={`w-full lg:w-[calc(50%-2.5rem)] text-left parchment-panel rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-400 p-6 group ${expanded ? 'shadow-[0_0_32px_rgba(197,164,109,0.10)]' : ''}`}
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="font-mono text-[10px] tracking-[0.25em] text-gold/70">{org.period}</span>
          <span className={`text-gold/50 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>⌄</span>
        </div>

        <h3 className="font-display text-base sm:text-lg text-parchment group-hover:text-gold transition-colors leading-snug">
          {org.role}
        </h3>
        <p className="font-editorial italic text-mystic mt-1">{org.org}</p>

        <span className="inline-block mt-3 font-mono text-[9px] tracking-[0.2em] uppercase text-parchment/40 border border-gold/15 px-2 py-0.5 rounded-full">
          {org.type}
        </span>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="gold-rule my-4" />
              <p className="text-[13px] text-parchment/65 leading-relaxed">
                {org.contribution}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <p className="text-[11px] text-gold/40 mt-3 font-mono tracking-wider group-hover:text-gold/70 transition-colors">
            + Expand record
          </p>
        )}
      </button>
    </motion.div>
  )
}

export default function Leadership() {
  return (
    <SectionWrapper
      id="leadership"
      numeral="VI"
      title="THE GUILD & FELLOWSHIP"
      subtitle="Around the round table — seven chapters of service and responsibility."
      fog
    >
      <div className="relative">
        {/* Central timeline line (desktop) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

        {/* Mobile line */}
        <div className="lg:hidden absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

        <div className="flex flex-col gap-10">
          {organizations.map((org, i) => (
            <div key={org.id} className="relative lg:pl-0 pl-8">
              {/* Mobile node */}
              <div className="lg:hidden absolute left-0 top-7 w-3.5 h-3.5 rotate-45 bg-obsidian border border-gold/70" />
              <GuildCard org={org} index={i} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
