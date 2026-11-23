/**
 * CastleSilhouette — layered SVG castle skyline with animated flags & window flicker.
 * Pure SVG + CSS animation; extremely lightweight. Positioned absolute bottom.
 */
export default function CastleSilhouette({ className = '' }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 260" className="w-full h-auto" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="castleBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C1B19" />
            <stop offset="100%" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="castleFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#232220" />
            <stop offset="100%" stopColor="#151515" />
          </linearGradient>
          <linearGradient id="moonGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(83,110,133,0.25)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Moon glow */}
        <circle cx="1000" cy="60" r="34" fill="url(#moonGlow)" opacity="0.9" />
        <circle cx="1000" cy="60" r="18" fill="#536E85" opacity="0.35" />

        {/* Back layer towers */}
        <g fill="url(#castleBack)">
          <path d="M80 260 V120 L95 95 L110 120 V260 Z" />
          <path d="M300 260 V90 L320 60 L340 90 V260 Z" />
          <path d="M520 260 V130 L540 105 L560 130 V260 Z" />
          <path d="M760 260 V80 L785 45 L810 80 V260 Z" />
          <path d="M1050 260 V140 L1070 115 L1090 140 V260 Z" />
        </g>

        {/* Front castle with gate */}
        <g fill="url(#castleFront)">
          {/* Main keep */}
          <rect x="480" y="150" width="240" height="110" />
          <path d="M470 150 L490 118 L510 150 Z" />
          <path d="M560 150 L580 118 L600 150 Z" />
          <path d="M650 150 L670 118 L690 150 Z" />
          <path d="M690 150 L710 118 L730 150 Z" />
          {/* Central tower */}
          <path d="M570 150 V70 L600 30 L630 70 V150 Z" />
          {/* Walls */}
          <rect x="380" y="190" width="100" height="70" />
          <path d="M375 190 L390 172 L405 190 Z" />
          <path d="M405 190 L420 172 L435 190 Z" />
          <path d="M435 190 L450 172 L465 190 Z" />
          <rect x="720" y="190" width="110" height="70" />
          <path d="M715 190 L730 172 L745 190 Z" />
          <path d="M745 190 L760 172 L775 190 Z" />
          <path d="M775 190 L790 172 L805 190 Z" />
          <path d="M805 190 L820 172 L835 190 Z" />
        </g>

        {/* Gate arch */}
        <path d="M575 260 V225 Q575 205 600 205 Q625 205 625 225 V260 Z" fill="#0D0C0B" />
        <path d="M575 260 V225 Q575 205 600 205 Q625 205 625 225 V260" fill="none" stroke="#C5A46D" strokeWidth="1" opacity="0.35" />

        {/* Windows — flicker handled via CSS */}
        <g fill="#C5A46D" opacity="0.55" style={{ animation: 'candleFlicker 3.2s ease-in-out infinite' }}>
          <rect x="590" y="90" width="6" height="12" rx="3" />
          <rect x="604" y="90" width="6" height="12" rx="3" />
          <rect x="500" y="180" width="5" height="10" rx="2.5" />
          <rect x="690" y="180" width="5" height="10" rx="2.5" />
          <rect x="410" y="210" width="4" height="9" rx="2" />
          <rect x="760" y="210" width="4" height="9" rx="2" />
        </g>

        {/* Flags on towers */}
        <g>
          <line x1="600" y1="30" x2="600" y2="10" stroke="#C5A46D" strokeWidth="1" opacity="0.6" />
          <line x1="785" y1="45" x2="785" y2="26" stroke="#C5A46D" strokeWidth="1" opacity="0.6" />
          <line x1="320" y1="60" x2="320" y2="42" stroke="#C5A46D" strokeWidth="1" opacity="0.5" />
          <path d="M600 10 L622 15 L600 20 Z" fill="#632D35" style={{ transformOrigin: '600px 15px', animation: 'bannerWave 2.6s ease-in-out infinite' }} />
          <path d="M785 26 L804 31 L785 36 Z" fill="#632D35" style={{ transformOrigin: '785px 31px', animation: 'bannerWave 3.1s ease-in-out infinite 0.5s' }} />
          <path d="M320 42 L337 46 L320 51 Z" fill="#632D35" style={{ transformOrigin: '320px 46px', animation: 'bannerWave 2.8s ease-in-out infinite 1s' }} />
        </g>
      </svg>
    </div>
  )
}
