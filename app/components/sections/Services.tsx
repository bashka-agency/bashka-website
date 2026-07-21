import Reveal from "@/app/components/Reveal";

const SERVICES = [
  {
    title: "Društvene mreže",
    description:
      "Strategija, kreiranje sadržaja i community management koji grade zajednicu oko vašeg brenda.",
  },
  {
    title: "Produkcija",
    description:
      "Foto i video produkcija — od reklama do sadržaja za društvene mreže, snimljeno i montirano u kući.",
  },
  {
    title: "Kampanje",
    description:
      "Plaćeno oglašavanje i performans marketing sa fokusom na merljiv rast i povraćaj ulaganja.",
  },
  {
    title: "Web",
    description:
      "Izrada sajtova i landing stranica koje dobro izgledaju i pretvaraju posetioce u klijente.",
  },
];

export default function Services() {
  return (
    <section id="usluge" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#5c6b1f]">
          Usluge
        </h2>
        <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Sve što je potrebno da vaš brend raste.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 100} className="h-full">
            <div className="group h-full rounded-2xl border border-black/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand/10 hover:shadow-lg hover:shadow-brand/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-sm font-bold text-[#5c6b1f] transition-transform duration-300 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
