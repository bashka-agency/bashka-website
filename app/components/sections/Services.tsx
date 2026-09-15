import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";
import CircularBadge from "@/app/components/CircularBadge";
import PortfolioIcon from "@/app/components/icons/PortfolioIcon";

const SERVICES = [
  {
    title: "Strategija",
    description: "Pre nego što bilo šta objavimo, znamo kome se obraćamo i gde želimo da stignemo.",
    items: ["Analiza tržišta i brenda", "Content plan i content strategija"],
  },
  {
    title: "Društvene mreže",
    description: "Vođenje profila i sadržaj koji ljudi žele da gledaju, prate i na koji reaguju.",
    items: [
      "Vođenje Instagram i TikTok profila",
      "Kreiranje i osmišljavanje sadržaja",
      "Pisanje prodajnih i kreativnih tekstova",
    ],
  },
  {
    title: "Produkcija",
    description: "Foto i video produkcija u studiju i na terenu, od ideje do gotovog materijala.",
    items: [
      "Fotografisanje i video produkcija",
      "Snimanje u studiju i na lokaciji",
      "Snimanje dronom",
      "Montaža i editovanje video materijala",
    ],
  },
  {
    title: "Kampanje i rast",
    description: "Sadržaj koji ne samo da privlači pažnju, već dovodi ljude do vaše prodaje.",
    items: ["UGC marketing", "Influencer marketing", "Meta Ads kampanje"],
  },
];

export default function Services() {
  return (
    <section id="usluge" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle word="usluge">
        Vi imate brend, mi gradimo njegov digitalni svet.
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
              <ul className="mt-4 space-y-1.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-black/50"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-sm leading-relaxed font-semibold text-black/70">
          Pored kompanija i proizvodnih/uslužnih brendova, radimo i sa ličnim
          brendovima, influenserima i kreatorima sadržaja od strategije i
          sadržaja do svakodnevnog vođenja profila.
        </p>
      </Reveal>

      <Reveal delay={200} className="mt-10 flex justify-center">
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
