import { motion } from 'framer-motion'
import ImageSlider from './ImageSlider'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500 transition-all duration-300 flex flex-col"
    >
      <ImageSlider images={project.images} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-1"
          >
            Lihat Project →
          </a>
        )}
      </div>
    </motion.div>
  )
}
