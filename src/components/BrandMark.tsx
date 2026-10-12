/**
 * PLACEHOLDER brand mark (interlocking S). Swap the <svg> below for the
 * supplied logo SVG — every page uses this one component.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M34 10H18a8 8 0 0 0 0 16h4"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M14 38h16a8 8 0 0 0 0-16h-4"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-heading text-base font-bold tracking-[0.28em]">SECONDHALF</span>
      <span className="mt-1 text-[0.6rem] font-medium tracking-[0.42em] text-muted-foreground">
        TECHNOLOGIES
      </span>
    </span>
  );
}
