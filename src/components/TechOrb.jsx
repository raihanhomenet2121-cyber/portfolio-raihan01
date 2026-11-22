import { motion } from 'framer-motion'

const techBadges = [
  { label: 'React',   color: 'from-cyan-500 to-blue-500' },
  { label: 'Laravel', color: 'from-red-500 to-orange-500' },
  { label: 'Flutter', color: 'from-blue-400 to-cyan-400' },
  { label: 'Kotlin',  color: 'from-purple-500 to-indigo-500' },
  { label: 'C#',      color: 'from-green-400 to-emerald-500' },
  { label: 'IoT',     color: 'from-yellow-400 to-orange-400' },
]

export default function TechOrb() {
  const ringRadius = 110
  const containerSize = 320

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80" style={{ display: 'inline-block' }}>

      {/* Ring 1 — solid slow rotate */}
      <motion.div
        className="absolute rounded-full border border-indigo-500/30"
        style={{ width: 224, height: 224, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Ring 2 — dashed reverse rotate */}
      <motion.div
        className="absolute rounded-full border border-dashed border-cyan-400/20"
        style={{ width: 288, height: 288, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Central Orb */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500"
        style={{ width: 80, height: 80, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            '0 0 20px rgba(99,102,241,0.6), 0 0 40px rgba(99,102,241,0.3)',
            '0 0 30px rgba(6,182,212,0.7), 0 0 60px rgba(6,182,212,0.3)',
            '0 0 20px rgba(99,102,241,0.6), 0 0 40px rgba(99,102,241,0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Inner text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xs font-bold">MRN</span>
        </div>
      </motion.div>

      {/* Tech Badges — positioned on orbit */}
      {techBadges.map((badge, i) => {
        const angle = i * (360 / 6) * (Math.PI / 180)
        const x = Math.cos(angle) * ringRadius + containerSize / 2
        const y = Math.sin(angle) * ringRadius + containerSize / 2

        return (
          <motion.div
            key={badge.label}
            className={`absolute bg-gradient-to-r ${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
            style={{ left: x, top: y, transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap' }}
            animate={{ y: [-(8 + i * 2), (8 + i * 2), -(8 + i * 2)] }}
            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {badge.label}
          </motion.div>
        )
      })}

      {/* Particle dots */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 + 30) * (Math.PI / 180)
        const r = 60
        const x = Math.cos(angle) * r + containerSize / 2
        const y = Math.sin(angle) * r + containerSize / 2
        return (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400/50"
            style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        )
      })}
    </div>
  )
}
