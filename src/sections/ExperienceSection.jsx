import { motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'

export default function ExperienceSection({ experiences = [] }) {
  const work = experiences.filter((e) => e.type === 'work')
  const org = experiences.filter((e) => e.type === 'organization')

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white">
            My <span className="text-indigo-400">Experience</span>
          </h2>
          <p className="text-gray-400 mt-2">Pengalaman kerja dan organisasi</p>
        </motion.div>

        {experiences.length === 0 ? (
          <p className="text-gray-500 text-center py-16">Belum ada pengalaman. Tambahkan via Sanity Studio.</p>
        ) : (
          <div className="flex flex-col gap-10">
            {work.length > 0 && (
              <div>
                <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  Pekerjaan
                </h3>
                <div className="flex flex-col gap-4">
                  {work.map((exp) => (
                    <ExperienceCard key={exp._id} experience={exp} />
                  ))}
                </div>
              </div>
            )}

            {org.length > 0 && (
              <div>
                <h3 className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
                  Organisasi
                </h3>
                <div className="flex flex-col gap-4">
                  {org.map((exp) => (
                    <ExperienceCard key={exp._id} experience={exp} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
