export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#14150f] text-sm font-bold text-white">
        b
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-brand" />
      </span>
      <span className="text-lg font-semibold tracking-tight lowercase">
        bashka
      </span>
    </span>
  );
}
