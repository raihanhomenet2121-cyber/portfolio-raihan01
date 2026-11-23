import { motion } from 'framer-motion'
import FogLayer from '../components/medieval/FogLayer'
import HeraldicEmblem from '../components/medieval/HeraldicEmblem'
import { useSiteData } from '../App'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Contact() {
  const { profile } = useSiteData()

  const channels = [
    { icon: '✉️', label: 'Email', value: profile?.email ?? 'raihanhornenet@gmail.com', href: `mailto:${profile?.email ?? 'raihanhornenet@gmail.com'}` },
    { icon: '💼', label: 'LinkedIn', value: 'muhammad-raihan-nugraha', href: profile?.linkedin ?? 'https://linkedin.com/in/muhammad-raihan-nugraha' },
    { icon: '📸', label: 'Instagram', value: '@raihngrh', href: profile?.instagram ?? 'https://instagram.com/raihngrh' },
  ].filter(c => c.value && c.href)

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-[#1A1512] to-[#221610]" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 100%, rgba(197,164,109,0.14), transparent 70%)' }} />
      <FogLayer density="heavy" tint="rgba(197,164,109,0.06)" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] max-w-full opacity-40 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 600 120" className="w-full h-auto">
          <path d="M60 120 V40 L80 15 L100 40 V120 Z" fill="#1C1B19" />
          <path d="M500 120 V40 L520 15 L540 40 V120 Z" fill="#1C1B19" />
          <path d="M120 120 V55 H480 V120 Z" fill="#1A1918" />
          <path d="M255 120 V70 Q300 40 345 70 V120 Z" fill="#0D0C0B" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="flex justify-center mb-10">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <HeraldicEmblem className="w-24 h-24 opacity-90" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="font-display font-black text-3xl sm:text-5xl leading-tight tracking-wide"
        >
          <span className="bg-gradient-to-b from-parchment via-gold to-[#8A6D3B] bg-clip-text text-transparent">
            EVERY CHRONICLE HAS
          </span>
          <br />
          <span className="bg-gradient-to-b from-parchment via-gold to-[#8A6D3B] bg-clip-text text-transparent">
            A NEXT CHAPTER.
          </span>
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="font-editorial italic text-xl text-mystic mt-6"
        >
          "The journey of learning, building, and contributing continues."
        </motion.p>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 mb-12"
        >
          {channels.map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="parchment-panel rounded-lg border border-gold/20 hover:border-gold/60 transition-all duration-300 p-6 flex flex-col items-center gap-2 hover:-translate-y-1 group"
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/60">{c.label}</span>
              <span className="text-xs text-parchment/70 group-hover:text-gold transition-colors break-all">{c.value}</span>
            </a>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={4} variants={fadeUp}>
          {profile?.cvFile?.asset ? (
            <a
              href={profile.cvFile.asset.url}
              download
              className="group relative inline-flex font-display text-xs sm:text-sm tracking-[0.2em] uppercase px-10 py-4 border border-gold/60 text-gold hover:text-obsidian transition-colors duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">Download CV ↓</span>
            </a>
          ) : (
            <a
              href={`mailto:${profile?.email ?? 'raihanhornenet@gmail.com'}`}
              className="group relative inline-flex font-display text-xs sm:text-sm tracking-[0.2em] uppercase px-10 py-4 border border-gold/60 text-gold hover:text-obsidian transition-colors duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">Send a Raven ✉</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
