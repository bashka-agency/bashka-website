import { ReactNode } from "react";
import OutlineWord from "@/app/components/OutlineWord";
import Reveal from "@/app/components/Reveal";

type Props = {
  word: string;
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ word, children, className }: Props) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="pointer-events-none flex justify-center px-4">
        <OutlineWord className="text-[2.75rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]">
          {word}
        </OutlineWord>
      </div>

      <Reveal className="mx-auto mt-8 max-w-2xl px-6 text-center sm:mt-12">
        <p className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {children}
        </p>
      </Reveal>
    </div>
  );
}
