import Reveal from "@/app/components/Reveal";

const WORKS = [
  {
    title: "Rebrending — Severna kafa",
    category: "Brend identitet · Društvene mreže",
    gradient: "from-brand to-[#7c8f2e]",
  },
  {
    title: "Lansiranje — Formo Studio",
    category: "Kampanja · Produkcija",
    gradient: "from-[#14150f] to-[#3c3f2d]",
  },
  {
    title: "Performans rast — Vitalis",
    category: "Plaćene kampanje · Web",
    gradient: "from-brand-dark to-brand",
  },
  {
    title: "Sadržaj serija — Urban Kitchen",
    category: "Video produkcija · Društvene mreže",
    gradient: "from-[#3c3f2d] to-brand/60",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#5c6b1f]">
          Portfolio
        </h2>
        <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Istaknuti radovi.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {WORKS.map((work, i) => (
          <Reveal key={work.title} delay={i * 100}>
            <div className="group cursor-pointer overflow-hidden rounded-2xl border border-black/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/10">
              <div
                className={`flex h-56 items-end bg-gradient-to-br p-6 transition-transform duration-500 group-hover:scale-105 ${work.gradient}`}
              >
                <span className="translate-y-1 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#14150f] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Pogledaj rad
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold">{work.title}</h3>
                <p className="mt-1 text-sm text-black/50">{work.category}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
