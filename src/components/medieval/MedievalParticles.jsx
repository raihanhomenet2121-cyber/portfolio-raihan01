import { motion } from 'framer-motion'

/**
 * MedievalParticles — floating dust motes / embers drifting upward.
 * Lightweight: only ~24 DOM nodes, CSS transform driven by Motion.
 */
export default function MedievalParticles({ count = 24, color = 'rgba(197,164,109,0.5)' }) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: (i * 41.7) % 100,
    size: 1.5 + ((i * 7) % 3),
    delay: (i * 0.7) % 8,
    duration: 10 + ((i * 13) % 14),
    drift: ((i % 5) - 2) * 18,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: -8,
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 ${p.size * 3}px ${color}`,
          }}
          animate={{
            y: [0, -window?.innerHeight || -800],
            x: [0, p.drift, 0],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
