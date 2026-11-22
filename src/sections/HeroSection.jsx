import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TechOrb from '../components/TechOrb'

const roles = ['Software Engineer', 'Full Stack Developer', 'Mobile App Developer']

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '6+',  label: 'Awards' },
  { value: '9+',  label: 'Tech Stacks' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function HeroSection({ profile }) {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex]     = useState(0)
  const [charIndex, setCharIndex]     = useState(0)
  const [isDeleting, setIsDeleting]   = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    if (!isDeleting && charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 80)
      return () => clearTimeout(t)
    }

    if (!isDeleting && charIndex === currentRole.length) {
      const t = setTimeout(() => setIsDeleting(true), 1500)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, 50)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex(r => (r + 1) % roles.length)
    }
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.p variants={itemVariants} className="text-indigo-400 font-medium text-lg">
            Hi, I'm 👋
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-indigo-200 to-cyan-400 bg-clip-text text-transparent"
          >
            {profile?.name ?? 'Muhammad Raihan Nugraha'}
          </motion.h1>

          <motion.div variants={itemVariants} className="flex items-center gap-1 h-8">
            <span className="text-xl text-cyan-400 font-mono">{displayText}</span>
            <span className="text-xl text-cyan-400 font-mono animate-pulse">|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed max-w-md">
            {profile?.bio ??
              'A passionate software engineering student from Bandung, Indonesia. I build full-stack web apps, mobile applications, and IoT systems — focused on clean code and great user experience.'}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-gray-400 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 font-semibold rounded-xl px-6 py-3 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-1 text-gray-500 text-xs w-fit"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>Scroll down</span>
            <span>↓</span>
          </motion.div>
        </motion.div>

        {/* Right — TechOrb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <TechOrb />
        </motion.div>

      </div>
    </section>
  )
}
