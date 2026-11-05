import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";

const WORKS = [
  {
    title: "Vidik",
    category: "Društvene mreže · Video produkcija",
    src: "/images/portfolio-slike/vidik-residence.mp4",
    poster: "/images/portfolio-slike/vidik-residence-poster.webp",
  },
  {
    title: "Popsi",
    category: "Društvene mreže · Video produkcija",
    src: "/images/portfolio-slike/popsi.mp4",
    poster: "/images/portfolio-slike/popsi-poster.webp",
  },
  {
    title: "Bolero",
    category: "Video produkcija · Snimanje događaja",
    src: "/images/portfolio-slike/event.mp4",
    poster: "/images/portfolio-slike/event-poster.webp",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle word="portfolio">Istaknuti radovi.</SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WORKS.map((work, i) => (
          <Reveal key={work.title} delay={i * 100}>
            <div className="group overflow-hidden rounded-2xl border border-black/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/10">
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                <video
                  src={work.src}
                  poster={work.poster}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-cover"
                />
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
