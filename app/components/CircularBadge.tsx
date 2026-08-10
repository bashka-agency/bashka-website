"use client";

import { useId } from "react";

type Props = {
  text: string;
  className?: string;
  icon?: React.ReactNode;
};

export default function CircularBadge({ text, className, icon }: Props) {
  const pathId = useId();

  return (
    <div className={`relative flex h-32 w-32 items-center justify-center ${className ?? ""}`}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite] text-[#14150f]"
      >
        <path
          id={pathId}
          d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          fill="none"
        />
        <text fontSize="7.2" letterSpacing="2" fill="currentColor">
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand">
        {icon ?? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M7 7L17 17M17 17H9M17 17V9"
              stroke="#14150f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
