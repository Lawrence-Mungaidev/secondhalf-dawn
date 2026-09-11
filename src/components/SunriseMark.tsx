type SunriseMarkProps = {
  className?: string;
  animated?: boolean;
  delayStep?: number;
};

/**
 * The secondhalf mark: a horizon line with a rising sun and fanning rays.
 * When `animated`, the line and rays draw in once on load (the page's single
 * deliberate motion moment).
 */
export function SunriseMark({
  className,
  animated = false,
  delayStep = 0.12,
}: SunriseMarkProps) {
  const rays = [
    "M60 34 L60 22",
    "M38 40 L30 30",
    "M82 40 L90 30",
    "M24 56 L12 50",
    "M96 56 L108 50",
  ];

  return (
    <svg
      viewBox="0 0 120 76"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* fanning rays */}
      {rays.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          className={animated ? "sunrise-ray" : undefined}
          style={
            animated
              ? { animationDelay: `${0.7 + i * delayStep}s` }
              : undefined
          }
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {/* rising sun arc */}
      <path
        d="M36 66 A24 24 0 0 1 84 66"
        className={animated ? "sunrise-arc" : undefined}
        style={animated ? { animationDelay: "0.25s" } : undefined}
        stroke="var(--coral)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* horizon line */}
      <path
        d="M4 66 L116 66"
        pathLength={1}
        className={animated ? "sunrise-line" : undefined}
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
