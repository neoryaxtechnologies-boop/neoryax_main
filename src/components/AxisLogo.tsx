interface AxisLogoProps {
  size?: number;
  spin?: boolean;
  className?: string;
}

/**
 * NeoRyax rotating axis mark.
 * Concentric rings + crosshair, evokes a control axis.
 */
export function AxisLogo({ size = 160, spin = true, className = "" }: AxisLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="axisCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow core */}
      <circle cx="100" cy="100" r="40" fill="url(#axisCore)" />

      {/* Outer rotating ring with ticks */}
      <g className={spin ? "axis-rotate" : ""} style={{ transformOrigin: "100px 100px" }}>
        <circle cx="100" cy="100" r="92" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="1" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="100"
              y1="8"
              x2="100"
              y2={i % 6 === 0 ? 18 : 14}
              stroke="var(--primary)"
              strokeOpacity={i % 6 === 0 ? 0.9 : 0.4}
              strokeWidth="1"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </g>

      {/* Reverse middle ring */}
      <g className={spin ? "axis-rotate-rev" : ""} style={{ transformOrigin: "100px 100px" }}>
        <circle cx="100" cy="100" r="68" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 6" />
      </g>

      {/* Inner static */}
      <circle cx="100" cy="100" r="44" stroke="var(--primary)" strokeOpacity="0.7" strokeWidth="1" />
      <circle cx="100" cy="100" r="6" fill="var(--primary)" />

      {/* Crosshair */}
      <line x1="100" y1="0" x2="100" y2="200" stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1" />

      {/* Diagonal axes */}
      <line x1="20" y1="20" x2="180" y2="180" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="180" y1="20" x2="20" y2="180" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
    </svg>
  );
}
