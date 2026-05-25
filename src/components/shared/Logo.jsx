import './Logo.css';

export default function Logo({ height = 40, showText = true, className = '' }) {
  // SVG ViewBox is 240x80
  // Icon is placed on the left (0 to 80)
  // Text is placed on the right (90 to 240)
  
  return (
    <div 
      className={`doda-logo ${className}`} 
      style={{ height: `${height}px`, aspectRatio: showText ? '3/1' : '1/1' }}
    >
      <svg
        viewBox={showText ? '0 0 240 80' : '0 0 80 80'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="doda-logo-svg"
      >
        {/* === LEAF ICON (Left, 0 to 80) === */}
        <g className="logo-icon-group">
          {/* Central Stem */}
          <path 
            d="M 40,15 C 40,15 39,45 39,70 C 39,70 41,70 41,70 C 41,70 40,45 40,15 Z" 
            fill="currentColor" 
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left fronds (Green / currentColor) */}
          <path d="M 38,26 Q 24,20 12,34 Q 24,28 38,32" fill="currentColor" />
          <path d="M 38,36 Q 18,34 8,50 Q 21,44 38,42" fill="currentColor" />
          <path d="M 38,46 Q 14,48 8,64 Q 20,56 38,52" fill="currentColor" />
          <path d="M 38,56 Q 12,62 14,74 Q 22,66 38,62" fill="currentColor" />

          {/* Right fronds - Upper (Green / currentColor) */}
          <path d="M 42,26 Q 56,20 68,34 Q 56,28 42,32" fill="currentColor" />
          <path d="M 42,36 Q 62,34 72,50 Q 59,44 42,42" fill="currentColor" />

          {/* Right fronds - Lower Sourcing (Gold / var(--color-primary)) */}
          <path d="M 42,46 Q 66,48 72,64 Q 60,56 42,52" fill="var(--color-primary, #C89B3C)" />
          <path d="M 42,56 Q 68,62 66,74 Q 58,66 42,62" fill="var(--color-primary, #C89B3C)" />
        </g>

        {/* === BRAND TEXT (Right, 90 to 240) === */}
        {showText && (
          <g className="logo-text-group" fill="currentColor">
            <text
              x="86"
              y="38"
              fontSize="28"
              fontFamily="var(--font-heading)"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              DODA
            </text>
            <text
              x="86"
              y="66"
              fontSize="26"
              fontFamily="var(--font-body)"
              fontWeight="500"
              letterSpacing="0.02em"
            >
              Global
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
