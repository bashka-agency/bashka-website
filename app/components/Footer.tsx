import Logo from "@/app/components/Logo";
import { NAV_LINKS } from "@/app/components/NAV_LINKS";

export default function Footer() {
  return (
    <footer className="bg-[#14150f] text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Kreativna marketing agencija za društvene mreže, produkciju,
              kampanje i web.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-white">Navigacija</span>
            <nav className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold text-white">Kontakt</span>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/50">
              <a href="mailto:hej@bashka.digital" className="transition-colors hover:text-white">
                hej@bashka.digital
              </a>
              <a href="tel:+381600000000" className="transition-colors hover:text-white">
                +381 60 000 0000
              </a>
              <span>Beograd, Srbija</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} bashka digital. Sva prava zadržana.</span>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-white">Instagram</a>
            <a href="#" className="transition-colors hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
