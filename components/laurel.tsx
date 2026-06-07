export function Laurel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M60 38 C 40 38, 18 30, 8 8" strokeLinecap="round" />
      {[14, 22, 30, 38, 46].map((x, i) => (
        <g key={`l-${i}`} transform={`translate(${x + i * 2}, ${30 - i * 4.5}) rotate(${-50 + i * 6})`}>
          <ellipse cx="0" cy="0" rx="6" ry="2.6" fill="currentColor" stroke="none" opacity="0.9" />
        </g>
      ))}
      <path d="M60 38 C 80 38, 102 30, 112 8" strokeLinecap="round" />
      {[14, 22, 30, 38, 46].map((x, i) => (
        <g key={`r-${i}`} transform={`translate(${106 - x - i * 2}, ${30 - i * 4.5}) rotate(${50 - i * 6})`}>
          <ellipse cx="0" cy="0" rx="6" ry="2.6" fill="currentColor" stroke="none" opacity="0.9" />
        </g>
      ))}
    </svg>
  )
}
