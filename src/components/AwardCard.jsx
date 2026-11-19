import { motion } from 'framer-motion'
import ImageSlider from './ImageSlider'

export default function AwardCard({ award }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 flex flex-col"
    >
      <ImageSlider images={award.images} />

      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold">{award.name}</h3>
          {award.year && (
            <span className="text-yellow-400 text-xs font-medium bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20 whitespace-nowrap">
              {award.year}
            </span>
          )}
        </div>

        {award.issuer && (
          <p className="text-gray-400 text-sm">{award.issuer}</p>
        )}

        {award.link && (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 transition-colors mt-1"
          >
            Lihat Event →
          </a>
        )}
      </div>
    </motion.div>
  )
}
