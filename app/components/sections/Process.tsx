import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";

const STEPS = [
  {
    step: "1",
    title: "Otkrivanje",
    description: "Upoznajemo vaš brend, ciljeve i publiku kroz detaljan brief i analizu tržišta.",
  },
  {
    step: "2",
    title: "Strategija",
    description: "Definišemo plan — kanale, poruke i ciljeve koje merimo brojkama.",
  },
  {
    step: "3",
    title: "Kreacija i produkcija",
    description: "Pravimo sadržaj, kampanje i vizuale koji nose strategiju u život.",
  },
  {
    step: "4",
    title: "Lansiranje i optimizacija",
    description: "Pratimo rezultate u realnom vremenu i optimizujemo za bolje performanse.",
  },
];

const MARKER_POSITION = [
  "left-[12.5%] top-[30%]",
  "left-[37.5%] top-[70%]",
  "left-[62.5%] top-[30%]",
  "left-[87.5%] top-[70%]",
];

function StepMarker({ step }: { step: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-[#14150f] shadow-lg shadow-black/30 sm:h-12 sm:w-12">
      {step}
    </div>
  );
}

export default function Process() {
  return (
    <section id="kako-radimo" className="bg-[#14150f] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle word="kako radimo">Proces u četiri koraka.</SectionTitle>

        {/* Mobile: vertical timeline, so each marker sits right next to its own step */}
        <div className="relative mt-12 sm:hidden">
          <svg
            viewBox="0 0 44 400"
            preserveAspectRatio="none"
            className="absolute inset-y-6 left-0 w-11 text-brand/40"
          >
            <path
              d="M22,0 C8,50 36,100 22,150 C8,200 36,250 22,300 C8,350 22,380 22,400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-dash-flow"
            />
          </svg>

          <div className="flex flex-col gap-10">
            {STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="flex items-start gap-4">
                  <StepMarker step={item.step} />
                  <div className="pt-1.5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tablet/desktop: horizontal wavy roadmap above a matching grid */}
        <div className="hidden sm:block">
          <div className="relative mt-16 h-28 sm:h-36">
            <svg
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full text-brand/50"
            >
              <path
                d="M125,60 C250,60 250,140 375,140 C500,140 500,60 625,60 C750,60 750,140 875,140"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-dash-flow"
              />
            </svg>

            {STEPS.map((item, i) => (
              <div
                key={item.step}
                className={`absolute -translate-x-1/2 -translate-y-1/2 ${MARKER_POSITION[i]}`}
              >
                <Reveal delay={i * 100}>
                  <StepMarker step={item.step} />
                </Reveal>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 100 + 150}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
