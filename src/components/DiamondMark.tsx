type DiamondMarkProps = {
  className?: string;
  animated?: boolean;
};

/**
 * The secondhalf mark: an outlined navy diamond with a solid coral diamond
 * rising beside it. When `animated`, the coral diamond settles into place once
 * on load (the page's single deliberate motion moment).
 */
export function DiamondMark({ className, animated = false }: DiamondMarkProps) {
  return (
    <svg viewBox="0 0 120 84" fill="none" className={className} aria-hidden="true">
      {/* solid coral diamond */}
      <rect
        x="62"
        y="8"
        width="42"
        height="42"
        rx="4"
        transform="rotate(45 83 29)"
        fill="var(--coral)"
        className={animated ? "mark-lead" : undefined}
      />
      {/* outlined navy diamond */}
      <rect
        x="20"
        y="30"
        width="44"
        height="44"
        rx="4"
        transform="rotate(45 42 52)"
        stroke="currentColor"
        strokeWidth="5"
        className={animated ? "mark-trail" : undefined}
      />
    </svg>
  );
}
