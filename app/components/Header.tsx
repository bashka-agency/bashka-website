"use client";

import { useState } from "react";
import Logo from "@/app/components/Logo";
import BookingButton from "@/app/components/booking/BookingButton";
import { NAV_LINKS } from "@/app/components/NAV_LINKS";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-black/70 transition-colors hover:text-black"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-dark transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookingButton className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-[#14150f] transition-transform hover:scale-105">
            Zakaži poziv
          </BookingButton>
        </div>

        <button
          type="button"
          aria-label="Otvori meni"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-black/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <BookingButton className="mt-4 w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-[#14150f]">
            Zakaži poziv
          </BookingButton>
        </div>
      )}
    </header>
  );
}
