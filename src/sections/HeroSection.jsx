import { motion } from 'framer-motion'
import { urlFor } from '../lib/sanityClient'

export default function HeroSection({ profile }) {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 flex flex-col gap-6"
          >
            <div>
              <p className="text-indigo-400 font-medium mb-2">Hi, saya 👋</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {profile?.name ?? 'Muhammad Raihan Nugraha'}
              </h1>
              <p className="text-xl text-gray-400 mt-3">
                {profile?.tagline ?? 'Full Stack Developer'}
              </p>
            </div>

            {profile?.bio && (
              <p className="text-gray-400 leading-relaxed max-w-lg">{profile.bio}</p>
            )}

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
              >
                Lihat Proyek
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors border border-gray-700"
              >
                Hubungi Saya
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            {profile?.photo ? (
              <img
                src={urlFor(profile.photo).width(320).height(320).url()}
                alt={profile.name}
                className="w-56 h-56 md:w-72 md:h-72 rounded-3xl object-cover border-4 border-indigo-500/30 shadow-2xl shadow-indigo-500/10"
              />
            ) : (
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-gray-800 border-4 border-indigo-500/30 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
