import { motion } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'
import OrnamentalFrame from '../components/medieval/OrnamentalFrame'
import { urlFor } from '../lib/sanityClient'
import { useSiteData } from '../App'

export default function About() {
  const { profile, education } = useSiteData()

  return (
    <SectionWrapper
      id="about"
      numeral="II"
      title="THE SCRIBE"
      subtitle="The hand behind the chronicle — a scholar of engineering and endeavour."
      fog
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* Manuscript panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <OrnamentalFrame glow className="p-8 sm:p-10">
            <div className="absolute -top-4 right-8 w-9 h-9 rounded-full bg-burgundy shadow-lg shadow-burgundy/40 flex items-center justify-center rotate-6">
              <span className="font-display text-[10px] text-gold">R</span>
            </div>

            {/* Portrait */}
            {profile?.photo && (
              <div className="flex items-center gap-5 mb-7">
                <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-b from-gold via-[#8A6D3B] to-gold/50 shadow-[0_0_20px_rgba(197,164,109,0.3)]">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-obsidian">
                    <img
                      src={urlFor(profile.photo).width(200).height(200).fit('crop').url()}
                      alt={profile.name ?? 'Portrait'}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-display text-base sm:text-lg tracking-[0.15em] text-parchment uppercase">
                    {profile?.name ?? 'Muhammad Raihan Nugraha'}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-gold/70 uppercase mt-1.5">
                    {profile?.title}{profile?.epithet ? ` · ${profile.epithet}` : ''}
                  </p>
                </div>
              </div>
            )}

            <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-5">
              Professional Summary
            </p>
            <p className="text-parchment/85 leading-relaxed text-[15px]">
              {profile?.summary ??
                'Fresh graduate majoring in Software Engineering (RPL) from SMKN 1 Cimahi with strong achievements and dedication to technology.'}
            </p>

            <div className="gold-rule my-7" />

            <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-4">
              Personal Philosophy
            </p>
            <blockquote className="font-editorial italic text-xl text-parchment/75 leading-relaxed">
              "{profile?.philosophy ?? 'I am a disciplined, fast-learning individual committed to delivering the best results.'}"
            </blockquote>

            <div className="gold-rule my-7" />

            <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-4">
              Professional Focus
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: '⚒️', label: 'The Engineer', desc: 'Software development & problem solving' },
                { icon: '🛡️', label: 'The Leader', desc: 'Organization, communication & teamwork' },
                { icon: '📜', label: 'The Endeavourer', desc: 'Discipline & continuous development' },
              ].map(f => (
                <div key={f.label} className="border border-gold/15 rounded-lg p-4 bg-obsidian/40">
                  <span className="text-lg">{f.icon}</span>
                  <p className="font-display text-[11px] tracking-[0.15em] text-gold/90 uppercase mt-2">{f.label}</p>
                  <p className="text-xs text-parchment/50 mt-1 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </OrnamentalFrame>
        </motion.div>

        {/* Academic record */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <div className="parchment-panel rounded-lg p-7">
            <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-6">
              Academic Record
            </p>

            {education && education.length > 0 ? (
              <div className="relative pl-6">
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent" />
                {education.map((ed, i) => (
                  <motion.div
                    key={ed._id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pb-7 last:pb-0"
                  >
                    <div className="absolute -left-6 top-1 w-[11px] h-[11px] rotate-45 border border-gold/70 bg-obsidian" />
                    <p className="font-mono text-[10px] text-gold/70 tracking-wider">{ed.period}</p>
                    <p className="font-display text-sm text-parchment mt-1">{ed.institution}</p>
                    <p className="text-xs text-parchment/45 mt-0.5">{ed.detail}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-parchment/40 font-mono">— Academic record pending. Add via Sanity Studio —</p>
            )}
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
