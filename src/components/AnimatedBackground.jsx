import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10]">
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.20) 0%, transparent 70%)', top: '10%', left: '5%' }}
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', top: '50%', right: '8%' }}
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)', bottom: '10%', left: '20%' }}
        animate={{ x: [0, 40, -60, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 70%)', top: '30%', left: '50%' }}
        animate={{ x: [0, -40, 30, 0], y: [0, 40, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
