/**
 * HeraldicEmblem — SVG shield emblem with animated draw-in and slow shimmer.
 * Decorative; size controlled via className.
 */
export default function HeraldicEmblem({ className = 'w-24 h-24' }) {
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7D9B9" />
          <stop offset="45%" stopColor="#C5A46D" />
          <stop offset="100%" stopColor="#8A6D3B" />
        </linearGradient>
      </defs>
      {/* Shield outline */}
      <path
        d="M50 6 L92 22 V58 C92 86 74 104 50 114 C26 104 8 86 8 58 V22 Z"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
      />
      {/* Inner border */}
      <path
        d="M50 14 L84 27 V57 C84 80 69 96 50 105 C31 96 16 80 16 57 V27 Z"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="0.8"
        opacity="0.6"
      />
      {/* Quill & sword crossed — chronicle motif */}
      <line x1="36" y1="38" x2="64" y2="78" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="64" y1="38" x2="36" y2="78" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="50" cy="58" r="6" fill="none" stroke="url(#goldGrad)" strokeWidth="1.4" />
      <circle cx="50" cy="58" r="1.8" fill="url(#goldGrad)" />
      {/* Crown */}
      <path d="M40 30 L44 24 L50 29 L56 24 L60 30" fill="none" stroke="url(#goldGrad)" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}
