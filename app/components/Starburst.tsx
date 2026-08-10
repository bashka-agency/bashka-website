type Props = {
  className?: string;
  lines?: number;
};

export default function Starburst({ className, lines = 90 }: Props) {
  const items = Array.from({ length: lines }, (_, i) => {
    const angle = (i / lines) * Math.PI * 2;
    const length = 30 + 16 * Math.abs(Math.sin(i * 7));
    return { angle, length };
  });

  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={className}
    >
      {items.map(({ angle, length }, i) => {
        const r2 = length;
        const x2 = 100 + r2 * Math.cos(angle);
        const y2 = 100 + r2 * Math.sin(angle);
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}
