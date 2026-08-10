import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";
import CircularBadge from "@/app/components/CircularBadge";
import PortfolioIcon from "@/app/components/icons/PortfolioIcon";

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
      <SectionTitle word="usluge">
        Sve što je potrebno da vaš brend raste.
      </SectionTitle>

      <div className="mt-14 grid grid-cols-1 divide-y divide-black/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={i * 100} className="h-full">
            <div className="group h-full px-0 py-8 transition-colors sm:px-8">
              <span className="text-4xl font-bold text-brand-dark transition-transform duration-300 group-hover:translate-x-1">
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

      <Reveal delay={150} className="mt-16 flex justify-center">
        <a href="#portfolio" aria-label="Pogledajte portfolio">
          <CircularBadge
            text="POGLEDAJTE PORTFOLIO • BASHKA DIGITAL • "
            icon={<PortfolioIcon className="h-5 w-5 text-[#14150f]" />}
          />
        </a>
      </Reveal>
    </section>
  );
}
