import { motion } from 'framer-motion'

const contacts = [
  {
    icon: '✉️', label: 'Email',
    value: 'raihanhornenet@gmail.com',
    href: 'mailto:raihanhornenet@gmail.com',
    glow: 'hover:shadow-indigo-500/30', border: 'border-indigo-500/30',
  },
  {
    icon: '📱', label: 'WhatsApp',
    value: '0821 2723 4016',
    href: 'https://wa.me/6282127234016',
    glow: 'hover:shadow-green-500/30', border: 'border-green-500/30',
  },
  {
    icon: '💼', label: 'LinkedIn',
    value: 'muhammad-raihan-nugraha',
    href: 'https://linkedin.com/in/muhammad-raihan-nugraha',
    glow: 'hover:shadow-blue-500/30', border: 'border-blue-500/30',
  },
  {
    icon: '📸', label: 'Instagram',
    value: '@raihngrh',
    href: 'https://instagram.com/raihngrh',
    glow: 'hover:shadow-pink-500/30', border: 'border-pink-500/30',
  },
]

export default function ContactSection({ profile }) {
  return (
    <section id="contact" className="py-24">
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
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="italic text-gray-300 text-lg border-l-4 border-indigo-500 pl-5 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          "I am a disciplined, fast-learning individual committed to delivering the best results.
          Ready to work, contribute, and continue growing alongside your team."
        </motion.blockquote>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`bg-gray-900/60 backdrop-blur border ${c.border} rounded-2xl p-6 flex flex-col gap-2 shadow-lg ${c.glow} transition-shadow duration-300 cursor-pointer`}
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{c.label}</span>
              <span className="text-sm text-gray-200 font-medium break-all">{c.value}</span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href={`mailto:${profile?.email ?? 'raihanhornenet@gmail.com'}`}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-8 py-3 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            Send Email ✉️
          </a>
        </motion.div>

      </div>
    </section>
  )
}
