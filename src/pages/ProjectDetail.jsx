import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OrnamentalFrame from '../components/medieval/OrnamentalFrame'
import MedievalParticles from '../components/medieval/MedievalParticles'
import SectionFallback from '../components/SectionFallback'
import { urlFor } from '../lib/sanityClient'
import { useSiteData } from '../App'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
}

function ImageSlideshow({ images, title }) {
  const [current, setCurrent] = useState(0)
  if (!images?.length) return null

  return (
    <div className="relative mb-8">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={urlFor(images[current]).width(1200).height(560).url()}
          alt={`${title} — ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-64 sm:h-96 object-cover rounded-lg border border-gold/25"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent(c => (c === 0 ? images.length - 1 : c - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-obsidian/70 border border-gold/40 text-gold hover:bg-obsidian hover:border-gold transition-all backdrop-blur"
            aria-label="Previous image"
          >‹</button>
          <button
            onClick={() => setCurrent(c => (c === images.length - 1 ? 0 : c + 1))}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-obsidian/70 border border-gold/40 text-gold hover:bg-obsidian hover:border-gold transition-all backdrop-blur"
            aria-label="Next image"
          >›</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-5 bg-gold' : 'w-1.5 bg-parchment/30'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { projects, loading } = useSiteData()

  if (loading) return <div className="min-h-screen flex items-center justify-center"><SectionFallback /></div>

  const project = projects?.find(p => (p.slug?.current ?? p._id) === slug)
  if (!project) return <Navigate to="/" replace />

  const idx = projects.indexOf(project)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]
  const slugOf = p => p.slug?.current ?? p._id

  const sections = [
    { label: 'Problem Statement', body: project.problem },
    { label: 'Objectives', body: project.objectives },
    { label: 'Role & Contribution', body: project.role },
    { label: 'Development Process', body: project.process },
  ].filter(s => s.body)

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <MedievalParticles count={14} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(99,45,53,0.14), transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-10">
          <Link to="/" className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold/60 hover:text-gold transition-colors inline-flex items-center gap-2">
            ← Back to the Chronicles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-[0.5em] text-gold/60 uppercase mb-4">
            Royal Archive{project.numeral ? ` · Project ${project.numeral}` : ''}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-parchment leading-tight max-w-3xl mx-auto">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
            {project.year && <span className="font-mono text-xs text-parchment/60 border border-gold/25 px-3 py-1 rounded-full">{project.year}</span>}
            {project.type && <span className="font-editorial italic text-parchment/50">{project.type}</span>}
            {project.client && (
              <span className="font-mono text-[11px] text-mystic border border-mystic/30 px-3 py-1 rounded-full">{project.client}</span>
            )}
          </div>
        </motion.div>

        {/* Slideshow */}
        <motion.div initial="hidden" animate="show" custom={1} variants={fadeUp} className="mb-10">
          <ImageSlideshow images={project.images} title={project.title} />
        </motion.div>

        {/* Overview */}
        {project.overview && (
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fadeUp} className="mb-10">
            <OrnamentalFrame glow className="p-8 sm:p-10">
              <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-4">Project Overview</p>
              <p className="font-editorial text-xl sm:text-2xl text-parchment/85 leading-relaxed italic">
                {project.overview}
              </p>
            </OrnamentalFrame>
          </motion.div>
        )}

        {/* Detail sections */}
        {sections.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {sections.map((s, i) => (
              <motion.div key={s.label} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i + 3} variants={fadeUp}>
                <OrnamentalFrame className="p-7 h-full">
                  <p className="font-mono text-[10px] tracking-[0.35em] text-gold/60 uppercase mb-4">{s.label}</p>
                  <p className="text-sm text-parchment/70 leading-relaxed">{s.body}</p>
                </OrnamentalFrame>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        {project.tech?.length > 0 && (
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={4} variants={fadeUp} className="mb-14">
            <OrnamentalFrame className="p-7">
              <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-5 text-center">Technology Stack</p>
              <div className="flex flex-wrap justify-center gap-3">
                {project.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="px-4 py-2 font-mono text-xs text-parchment/80 bg-obsidian/70 border border-gold/30 rounded hover:border-gold/70 hover:text-gold transition-colors cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </OrnamentalFrame>
          </motion.div>
        )}

        {/* Prev / Next */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={5} variants={fadeUp} className="grid grid-cols-2 gap-4">
          <Link to={`/project/${slugOf(prev)}`} className="group parchment-panel rounded-lg p-5 border border-gold/20 hover:border-gold/50 transition-colors">
            <p className="font-mono text-[9px] tracking-[0.3em] text-gold/50 uppercase mb-2">← Previous Chronicle</p>
            <p className="font-display text-sm text-parchment/70 group-hover:text-gold transition-colors truncate">{prev.title}</p>
          </Link>
          <Link to={`/project/${slugOf(next)}`} className="group parchment-panel rounded-lg p-5 border border-gold/20 hover:border-gold/50 transition-colors text-right">
            <p className="font-mono text-[9px] tracking-[0.3em] text-gold/50 uppercase mb-2">Next Chronicle →</p>
            <p className="font-display text-sm text-parchment/70 group-hover:text-gold transition-colors truncate">{next.title}</p>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
