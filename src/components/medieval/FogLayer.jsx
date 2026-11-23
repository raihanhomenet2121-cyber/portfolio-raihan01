import { motion } from 'framer-motion'

/**
 * FogLayer — cinematic drifting fog bands (pure CSS/motion, no canvas).
 * props: density ('light' | 'heavy'), tint
 */
export default function FogLayer({ density = 'light', tint = 'rgba(83,110,133,0.10)' }) {
  const bands = density === 'heavy' ? 4 : 2

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: bands }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            background: `radial-gradient(ellipse, ${tint} 0%, transparent 70%)`,
            width: `${60 + i * 15}%`,
            height: `${30 + i * 10}%`,
            bottom: `${-10 + i * 8}%`,
            left: `${-10 + i * 18}%`,
          }}
          animate={{
            x: [0, 80, -40, 0],
            opacity: [0.5, 0.8, 0.4, 0.5],
          }}
          transition={{
            duration: 18 + i * 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
