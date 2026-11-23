import { motion } from 'framer-motion'
import CastleSilhouette from '../components/medieval/CastleSilhouette'
import FogLayer from '../components/medieval/FogLayer'
import MedievalParticles from '../components/medieval/MedievalParticles'
import HeraldicEmblem from '../components/medieval/HeraldicEmblem'
import { urlFor } from '../lib/sanityClient'
import { useSiteData } from '../App'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { profile } = useSiteData()
  const p = profile ?? {}

  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Atmosphere stack */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101418] via-[#151515] to-obsidian" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 45% at 78% 18%, rgba(83,110,133,0.22), transparent 70%)' }} />
      <CastleSilhouette />
      <FogLayer density="heavy" tint="rgba(83,110,133,0.13)" />
      <MedievalParticles count={30} />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-40"
      >
        {/* Portrait medallion */}
        <motion.div variants={item} className="mb-6 relative">
          <motion.div
            className="absolute -inset-2 rounded-full bg-gold/30 blur-xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-b from-gold via-[#8A6D3B] to-gold/60 shadow-[0_0_30px_rgba(197,164,109,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-obsidian bg-obsidian">
                {p.photo ? (
                  <img
                    src={urlFor(p.photo).width(300).height(300).fit('crop').url()}
                    alt={p.name ?? 'Profile portrait'}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <HeraldicEmblem className="w-16 h-16" />
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-px bg-gold/60" />
          </motion.div>
        </motion.div>

        <motion.p variants={item} className="font-mono text-[10px] sm:text-xs tracking-[0.6em] text-gold/70 uppercase mb-6">
          An archive of knowledge, creations &amp; endeavours
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-wide"
        >
          <span className="bg-gradient-to-b from-parchment via-gold to-[#8A6D3B] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(197,164,109,0.25)]">
            {(p.chronicle ?? 'THE CHRONICLES OF RAIHAN').split(' OF ')[0]}
          </span>
          <br />
          <span className="bg-gradient-to-b from-parchment via-gold to-[#8A6D3B] bg-clip-text text-transparent">
            OF {(p.chronicle ?? 'THE CHRONICLES OF RAIHAN').split(' OF ')[1] ?? 'RAIHAN'}
          </span>
        </motion.h1>

        <motion.p variants={item} className="font-editorial italic text-xl sm:text-2xl text-mystic mt-8 max-w-2xl">
          "{p.motto ?? 'An Endeavour Through Knowledge, Technology & Leadership.'}"
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gold/50" />
            <p className="font-display text-sm sm:text-base tracking-[0.3em] text-parchment/90 uppercase">
              {p.name ?? 'Muhammad Raihan Nugraha'}
            </p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <p className="font-mono text-[11px] tracking-[0.35em] text-gold/70 uppercase mt-2">
            {p.title ?? 'Software Engineering'}{p.epithet ? ` · ${p.epithet}` : ''}
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href="#about"
            className="group relative font-display text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 border border-gold/60 text-gold hover:text-obsidian transition-colors duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Explore Chronicles</span>
          </a>
          <a
            href="#projects"
            className="group relative font-display text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-4 border border-burgundy/70 text-parchment/80 hover:border-gold/60 hover:text-gold transition-colors duration-300"
          >
            <span className="relative bg-burgundy/20 group-hover:bg-transparent absolute inset-0 transition-colors duration-300" />
            <span className="relative">View Selected Projects</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-parchment/30 uppercase">Begin</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gold/60"
        >
          ⌄
        </motion.span>
      </motion.div>
    </section>
  )
}
