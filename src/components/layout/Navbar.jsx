import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import HeraldicEmblem from '../medieval/HeraldicEmblem'

const links = [
  { label: 'The Scribe', href: '#about' },
  { label: 'The Arsenal', href: '#expertise' },
  { label: 'Royal Archives', href: '#projects' },
  { label: 'Hall of Achievements', href: '#achievements' },
  { label: 'The Guild', href: '#leadership' },
  { label: 'Next Chapter', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-obsidian/90 backdrop-blur-md border-b border-gold/20' : 'bg-transparent'}`}>
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-burgundy via-gold to-parchment"
        style={{ scaleX: progress }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Emblem + title */}
          <a href="#top" className="flex items-center gap-3 group">
            <HeraldicEmblem className="w-8 h-8 transition-transform duration-500 group-hover:rotate-[8deg]" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-sm tracking-[0.2em] text-parchment">RAIHAN</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-gold/70">CHRONICLES</span>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-[11px] tracking-[0.18em] uppercase text-parchment/60 hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
            className="lg:hidden text-gold/80 hover:text-gold p-2"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-obsidian/95 backdrop-blur-md border-t border-gold/15 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xs tracking-[0.2em] uppercase text-parchment/70 hover:text-gold py-2.5 border-b border-gold/10 last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
