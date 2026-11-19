import { motion } from 'framer-motion'
import AwardCard from '../components/AwardCard'

export default function AwardsSection({ awards = [] }) {
  return (
    <section id="awards" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white">
            My <span className="text-yellow-400">Awards</span>
          </h2>
          <p className="text-gray-400 mt-2">Penghargaan yang pernah diraih</p>
        </motion.div>

        {awards.length === 0 ? (
          <p className="text-gray-500 text-center py-16">Belum ada penghargaan. Tambahkan via Sanity Studio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <AwardCard key={award._id} award={award} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
