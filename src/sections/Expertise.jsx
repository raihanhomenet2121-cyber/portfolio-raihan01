import { motion } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'
import OrnamentalFrame from '../components/medieval/OrnamentalFrame'
import { useSiteData } from '../App'

export default function Expertise() {
  const { skillCategories, proficiency } = useSiteData()

  return (
    <SectionWrapper
      id="expertise"
      numeral="III"
      title="THE ARSENAL OF KNOWLEDGE"
      subtitle="Instruments of craft — forged through study, practice, and discipline."
      particles
    >
      {/* Skill categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {skillCategories && skillCategories.length > 0 ? (
          skillCategories.map((cat, ci) => (
            <motion.div
              key={cat._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <OrnamentalFrame className="p-7 h-full hover:border-gold/50 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl">{cat.icon ?? '⚔️'}</span>
                  <h3 className="font-display text-sm tracking-[0.15em] text-gold uppercase">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(cat.skills ?? []).map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + si * 0.04 }}
                      className="px-3 py-1.5 text-xs font-mono text-parchment/75 bg-obsidian/60 border border-gold/20 rounded hover:border-gold/60 hover:text-gold transition-colors duration-300 cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </OrnamentalFrame>
            </motion.div>
          ))
        ) : (
          <p className="col-span-2 text-center text-parchment/40 font-mono text-sm py-10">
            — Skill categories pending. Add via Sanity Studio —
          </p>
        )}
      </div>

      {/* Proficiency */}
      {proficiency && proficiency.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-8 text-center">
            Technical Proficiency
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7 max-w-4xl mx-auto">
            {proficiency.map((p, i) => (
              <div key={p._id}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-display text-xs tracking-[0.12em] text-parchment/85 uppercase">{p.name}</span>
                  <span className="font-mono text-[10px] text-gold/60">{p.level}%</span>
                </div>
                <div className="h-[3px] bg-stone rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-burgundy to-gold"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${p.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </SectionWrapper>
  )
}
