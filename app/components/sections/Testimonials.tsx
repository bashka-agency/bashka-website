import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";

const TESTIMONIALS = [
  {
    quote:
      "Bashka je za šest meseci udvostručila naš organski doseg na društvenim mrežama. Komunikacija je uvek jasna, a rezultati merljivi.",
    name: "Dušan Radovanović",
    company: "Severna kafa",
  },
  {
    quote:
      "Konačno agencija koja razume i kreativu i brojke. Kampanje koje su vodili nam vratile su svaki uloženi dinar.",
    name: "Tijana Vasić",
    company: "Vitalis",
  },
  {
    quote:
      "Video sadržaj koji su producirali podigao je našu prepoznatljivost na potpuno novi nivo. Preporučujem bez rezerve.",
    name: "Filip Đorđević",
    company: "Urban Kitchen",
  },
];

export default function Testimonials() {
  return (
    <section id="utisci" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle word="utisci">Šta kažu naši klijenti.</SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-2xl bg-brand/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10">
              <blockquote className="text-base leading-relaxed text-black/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold">{t.name}</span>
                <span className="text-sm text-black/50">{t.company}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
