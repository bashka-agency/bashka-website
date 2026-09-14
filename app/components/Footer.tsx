import Logo from "@/app/components/Logo";
import { NAV_LINKS } from "@/app/components/NAV_LINKS";
import { SOCIAL_LINKS } from "@/app/components/SOCIAL_LINKS";

export default function Footer() {
  return (
    <footer className="bg-[#14150f] text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Logo variant="green" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Ne pravimo samo sadržaj. Pravimo digitalno prisustvo koje vaš
              brend dovodi do prodaje.
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
              <a href="mailto:marketingbashka@gmail.com" className="transition-colors hover:text-white">
                marketingbashka@gmail.com
              </a>
              <a href="tel:+381646411538" className="transition-colors hover:text-white">
                +381 64 641 1538
              </a>
              <span>Čačak · Beograd · i šire</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} bashka digital. Sva prava zadržana.</span>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
