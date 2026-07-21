import Reveal from "@/app/components/Reveal";

const STEPS = [
  {
    step: "01",
    title: "Otkrivanje",
    description: "Upoznajemo vaš brend, ciljeve i publiku kroz detaljan brief i analizu tržišta.",
  },
  {
    step: "02",
    title: "Strategija",
    description: "Definišemo plan — kanale, poruke i ciljeve koje merimo brojkama.",
  },
  {
    step: "03",
    title: "Kreacija i produkcija",
    description: "Pravimo sadržaj, kampanje i vizuale koji nose strategiju u život.",
  },
  {
    step: "04",
    title: "Lansiranje i optimizacija",
    description: "Pratimo rezultate u realnom vremenu i optimizujemo za bolje performanse.",
  },
];

export default function Process() {
  return (
    <section id="kako-radimo" className="bg-[#14150f] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
            Kako radimo
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Proces u četiri koraka.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 100}>
              <div className="group border-t-2 border-brand/40 pt-6 transition-colors duration-300 hover:border-brand">
                <span className="text-sm font-semibold text-brand">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
