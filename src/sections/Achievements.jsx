import { motion } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'
import { useSiteData } from '../App'

const categories = [
  { key: 'Academic Excellence', icon: '🎓' },
  { key: 'Competition & Recognition', icon: '⚔️' },
  { key: 'Religious & Educational', icon: '🕌' },
  { key: 'Leadership Recognition', icon: '👑' },
]

function Medallion({ index }) {
  return (
    <div className="relative w-10 h-10 flex-shrink-0">
      <div className="absolute inset-0 rounded-full border border-gold/50 bg-gradient-to-br from-stone to-obsidian flex items-center justify-center">
        <span className="font-display text-[11px] text-gold">{String(index).padStart(2, '0')}</span>
      </div>
      <div className="absolute inset-[-3px] rounded-full border border-gold/15" />
    </div>
  )
}

export default function Achievements() {
  const { achievements } = useSiteData()
  const total = achievements?.length ?? 0

  return (
    <SectionWrapper
      id="achievements"
      numeral="V"
      title="THE HALL OF ACHIEVEMENTS"
      subtitle={`${total || 'Twelve'} honors displayed upon the stone pillars — each preserved in its original meaning.`}
      particles
    >
      {total === 0 ? (
        <p className="text-center text-parchment/40 font-mono text-sm py-16">
          — The hall awaits its honors. Add achievements via Sanity Studio —
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, ci) => {
            const items = achievements.filter(a => a.category === cat.key)
            if (!items.length) return null

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: ci * 0.1 }}
                className="parchment-panel rounded-lg p-7 sm:p-8 border border-gold/20 relative overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy rounded-b" />

                <div className="flex items-center gap-3 mb-7 mt-1">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-display text-sm tracking-[0.2em] text-gold uppercase">{cat.key}</h3>
                </div>

                <div className="flex flex-col gap-5">
                  {items.map((a, i) => (
                    <motion.div
                      key={a._id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex gap-4 items-start group"
                    >
                      <Medallion index={i + 1} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] text-parchment/80 leading-relaxed group-hover:text-parchment transition-colors">
                          {a.name}
                        </p>
                        {a.year && (
                          <p className="font-mono text-[10px] text-gold/50 mt-1 tracking-wider">{a.year}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-editorial italic text-center text-mystic mt-14 text-lg"
      >
        "Honor is not given — it is earned through endeavour."
      </motion.p>
    </SectionWrapper>
  )
}
