import HeraldicEmblem from '../medieval/HeraldicEmblem'
import { profile } from '../../data/cvData'

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 mt-10">
      <div className="gold-rule absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center gap-5 text-center">
        <HeraldicEmblem className="w-12 h-12 opacity-70" />
        <div>
          <p className="font-display text-xs tracking-[0.35em] text-gold/80 uppercase">
            {profile.principle}
          </p>
          <p className="font-mono text-[10px] text-parchment/30 mt-3 tracking-widest">
            © {new Date().getFullYear()} {profile.name} — The Chronicles of Raihan
          </p>
        </div>
      </div>
    </footer>
  )
}
