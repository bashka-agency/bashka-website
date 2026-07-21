export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-[#14150f]">
        b
      </span>
      <span className="text-lg font-semibold tracking-tight lowercase">
        bashka
      </span>
    </span>
  );
}
