import { motion } from 'framer-motion'
import { urlFor } from '../lib/sanityClient'

export default function ExperienceCard({ experience }) {
  const startDate = experience.startDate
    ? new Date(experience.startDate).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })
    : ''
  const endDate = experience.endDate
    ? new Date(experience.endDate).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })
    : 'Present'

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 bg-gray-900 rounded-2xl p-5 border border-gray-800 hover:border-indigo-500 transition-all duration-300"
    >
      {experience.logo && (
        <img
          src={urlFor(experience.logo).width(60).height(60).url()}
          alt={experience.company}
          className="w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-gray-800"
        />
      )}

      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <h3 className="text-white font-semibold">{experience.position}</h3>
            <p className="text-indigo-400 text-sm">{experience.company}</p>
          </div>
          <span className="text-gray-500 text-xs whitespace-nowrap">
            {startDate} — {endDate}
          </span>
        </div>
        {experience.description && (
          <p className="text-gray-400 text-sm leading-relaxed mt-1">{experience.description}</p>
        )}
        {experience.type && (
          <span className={`self-start px-2 py-0.5 text-xs rounded-full mt-1 ${
            experience.type === 'work'
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
          }`}>
            {experience.type === 'work' ? 'Pekerjaan' : 'Organisasi'}
          </span>
        )}
      </div>
    </motion.div>
  )
}
