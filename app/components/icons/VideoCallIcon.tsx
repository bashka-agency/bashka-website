export default function VideoCallIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="6" width="14" height="12" rx="2.5" />
      <path d="M16 10.5l5.2-3.2c.5-.3 1.3.05 1.3.65v8.1c0 .6-.8.95-1.3.65L16 13.5" />
    </svg>
  );
}
