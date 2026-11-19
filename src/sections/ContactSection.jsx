import { motion } from 'framer-motion'

export default function ContactSection({ profile }) {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Tertarik untuk berkolaborasi atau sekadar ngobrol? Jangan ragu untuk menghubungi saya!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
              >
                ✉️ Email Saya
              </a>
            )}
            {profile?.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors border border-gray-700"
              >
                LinkedIn
              </a>
            )}
            {profile?.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors border border-gray-700"
              >
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
