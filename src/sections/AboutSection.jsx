import { motion } from 'framer-motion'
import { urlFor } from '../lib/sanityClient'

export default function AboutSection({ profile }) {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            About <span className="text-indigo-400">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-6"
          >
            <p className="text-gray-400 leading-relaxed text-lg">
              {profile?.bio ?? 'Seorang Full Stack Developer yang passionate dalam membangun produk digital yang berdampak.'}
            </p>

            {profile?.skills && profile.skills.length > 0 && (
              <div>
                <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-indigo-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {profile?.photo && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <img
                src={urlFor(profile.photo).width(300).height(300).url()}
                alt={profile.name}
                className="w-64 h-64 rounded-2xl object-cover border border-gray-800"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
