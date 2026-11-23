import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionWrapper from '../components/layout/SectionWrapper'
import OrnamentalFrame from '../components/medieval/OrnamentalFrame'
import { projects } from '../data/cvData'

function ArchiveLabel({ numeral, year }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="font-mono text-[10px] tracking-[0.3em] text-gold/70">
        PROJECT {numeral}
      </span>
      <span className="font-mono text-[10px] text-parchment/40 px-2 py-0.5 border border-gold/20 rounded-full">
        {year}
      </span>
    </div>
  )
}

function TechTags({ tech }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {tech.map(t => (
        <span key={t} className="px-2 py-0.5 font-mono text-[10px] text-mystic border border-mystic/30 rounded-sm">
          {t}
        </span>
      ))}
    </div>
  )
}

function ReadSeal() {
  return (
    <span className="inline-flex items-center gap-2 mt-5 font-display text-[10px] tracking-[0.25em] uppercase text-gold/0 group-hover:text-gold transition-colors duration-300">
      Open the Archive <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </span>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <SectionWrapper
      id="projects"
      numeral="IV"
      title="THE ROYAL ARCHIVES"
      subtitle="Seven chronicles of creation — each sealed with real technical work."
      fog
    >
      {/* Featured project — large horizontal panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Link to={`/project/${featured.id}`} className="group block">
          <OrnamentalFrame glow className="p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative giant numeral */}
            <span className="absolute -right-4 -top-8 font-display text-[160px] leading-none text-gold/[0.05] select-none">
              {featured.numeral}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative">
              <div className="lg:col-span-2">
                <ArchiveLabel numeral={featured.numeral} year={featured.year} />
                <h3 className="font-display text-2xl sm:text-3xl text-parchment leading-snug group-hover:text-gold transition-colors duration-300">
                  {featured.title}
                </h3>
                {featured.client && (
                  <p className="font-mono text-[11px] text-mystic mt-2 tracking-wide">
                    Commissioned by {featured.client}
                  </p>
                )}
                <p className="text-sm text-parchment/65 leading-relaxed mt-5">
                  {featured.overview}
                </p>
                <TechTags tech={featured.tech} />
                <ReadSeal />
              </div>

              {/* Meta column */}
              <div className="border-l border-gold/15 pl-6 hidden lg:block">
                <p className="font-mono text-[10px] text-gold/60 tracking-[0.3em] uppercase mb-3">Type</p>
                <p className="font-editorial italic text-lg text-parchment/70">{featured.type}</p>
                <div className="gold-rule my-5" />
                <p className="font-mono text-[10px] text-gold/60 tracking-[0.3em] uppercase mb-3">Status</p>
                <p className="text-sm text-parchment/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  Archived Chronicle
                </p>
              </div>
            </div>
          </OrnamentalFrame>
        </Link>
      </motion.div>

      {/* Remaining projects — staggered asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
            className={i % 3 === 1 ? 'lg:mt-10' : ''} // stagger rhythm
          >
            <Link to={`/project/${p.id}`} className="group block h-full">
              <OrnamentalFrame className="p-7 h-full flex flex-col hover:border-gold/50 hover:shadow-[0_0_36px_rgba(197,164,109,0.10)] transition-all duration-500">
                <ArchiveLabel numeral={p.numeral} year={p.year} />
                <h3 className="font-display text-lg text-parchment leading-snug group-hover:text-gold transition-colors duration-300">
                  {p.title}
                </h3>
                {p.client && (
                  <p className="font-mono text-[10px] text-mystic mt-1.5">{p.client}</p>
                )}
                <p className="text-[13px] text-parchment/60 leading-relaxed mt-4 flex-1">
                  {p.overview}
                </p>
                <TechTags tech={p.tech} />
                <ReadSeal />
              </OrnamentalFrame>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
