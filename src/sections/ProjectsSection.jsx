import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsSection({ projects = [] }) {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-2">Proyek yang telah saya kerjakan</p>
        </motion.div>

        {projects.length === 0 ? (
          <p className="text-gray-500 text-center py-16">Belum ada proyek. Tambahkan via Sanity Studio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
