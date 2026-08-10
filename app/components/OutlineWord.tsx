type Props = {
  children: string;
  className?: string;
};

export default function OutlineWord({ children, className }: Props) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none block leading-[1.2] font-bold tracking-tight text-transparent select-none ${className ?? ""}`}
      style={{ WebkitTextStroke: "1.5px var(--brand-dark)" }}
    >
      {children}
    </span>
  );
}
