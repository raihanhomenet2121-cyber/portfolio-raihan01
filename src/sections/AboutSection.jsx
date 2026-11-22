import { motion } from 'framer-motion'
import { useState } from 'react'
import { urlFor } from '../lib/sanityClient'

const skills = [
  { name: 'HTML & CSS',   level: 95, color: 'bg-orange-400' },
  { name: 'Laravel',      level: 85, color: 'bg-red-400' },
  { name: 'React',        level: 85, color: 'bg-cyan-400' },
  { name: 'JavaScript',   level: 85, color: 'bg-yellow-400' },
  { name: 'PHP & MySQL',  level: 80, color: 'bg-purple-400' },
  { name: 'UI/UX Design', level: 75, color: 'bg-pink-400' },
]

const techTools = ['Laravel', 'React', 'Next.js', 'Flutter', 'Kotlin', 'C#', 'IoT', 'Figma', 'Git']

const details = [
  { icon: '📅', text: 'Bandung, 21 April 2009' },
  { icon: '🎓', text: 'SMKN 1 Cimahi — Software Engineering' },
  { icon: '📧', text: 'raihanhornenet@gmail.com', href: 'mailto:raihanhornenet@gmail.com' },
  { icon: '📱', text: '0821 2723 4016', href: 'https://wa.me/6282127234016' },
  { icon: '💼', text: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-raihan-nugraha' },
  { icon: '📸', text: '@raihngrh', href: 'https://instagram.com/raihngrh' },
]

export default function AboutSection({ profile }) {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* Left — Photo + Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Photo */}
            {profile?.photo && !imgError ? (
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-30 blur-sm" />
                <img
                  src={urlFor(profile.photo).width(400).height(480).url()}
                  alt={profile?.name ?? 'Muhammad Raihan Nugraha'}
                  onError={() => setImgError(true)}
                  className="relative w-64 h-80 object-cover rounded-2xl ring-2 ring-indigo-500/40 shadow-2xl shadow-indigo-500/20"
                />
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-30 blur-sm" />
                <div className="relative w-64 h-80 bg-gradient-to-br from-indigo-700 via-indigo-600 to-cyan-600 rounded-2xl ring-2 ring-indigo-500/40 flex flex-col items-center justify-center gap-2">
                  <span className="text-6xl font-black text-white/90">MRN</span>
                  <span className="text-xs text-white/50 tracking-widest">PORTFOLIO</span>
                </div>
              </div>
            )}

            {/* Personal Details */}
            <div className="w-full max-w-xs flex flex-col gap-3 bg-gray-900/40 backdrop-blur rounded-2xl border border-gray-800/60 p-5">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">Personal Info</h3>
              {details.map((d, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-base w-5 flex-shrink-0">{d.icon}</span>
                  {d.href ? (
                    <a href={d.href} target="_blank" rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors truncate">
                      {d.text}
                    </a>
                  ) : (
                    <span className="text-gray-300">{d.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Bio */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Who am I?</h3>
              <p className="text-gray-400 leading-relaxed">
                {profile?.bio ??
                  "I'm Muhammad Raihan Nugraha, a 17-year-old software engineering student from Bandung, Indonesia. A fresh graduate of SMKN 1 Cimahi with strong academic achievements — top graduate, overall champion, and former OSIS President. I'm passionate about building real-world solutions through full-stack web development, mobile apps, and IoT systems."}
              </p>
            </div>

            {/* Skill Bars */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-5">Technical Skills</h3>
              <div className="flex flex-col gap-4">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-800/80 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${skill.color}`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tools */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {techTools.map(tool => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs border border-indigo-500/30 text-indigo-300 bg-indigo-500/5 hover:border-indigo-400/60 hover:bg-indigo-500/10 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
