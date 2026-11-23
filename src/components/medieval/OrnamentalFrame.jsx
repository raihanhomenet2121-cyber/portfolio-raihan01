/**
 * OrnamentalFrame — gothic corner flourishes wrapper for cards/panels.
 * Renders 4 corner SVG ornaments around children.
 */
export default function OrnamentalFrame({ children, className = '', glow = false }) {
  const corner = (
    <svg viewBox="0 0 40 40" className="absolute w-8 h-8 text-gold/50" aria-hidden="true">
      <path d="M2 38 V14 Q2 2 14 2 H38" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 38 V16 Q6 6 16 6 H38" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  )

  return (
    <div
      className={`relative parchment-panel ${glow ? 'shadow-[0_0_40px_rgba(197,164,109,0.08)]' : ''} ${className}`}
    >
      <div className="absolute top-0 left-0 -translate-x-1 -translate-y-1">{corner}</div>
      <div className="absolute top-0 right-0 translate-x-1 -translate-y-1 rotate-90">{corner}</div>
      <div className="absolute bottom-0 right-0 translate-x-1 translate-y-1 rotate-180">{corner}</div>
      <div className="absolute bottom-0 left-0 -translate-x-1 translate-y-1 -rotate-90">{corner}</div>
      {children}
    </div>
  )
}
