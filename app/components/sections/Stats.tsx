import Reveal from "@/app/components/Reveal";

const STATS = [
  { value: "60+", label: "Brendova nam veruje" },
  { value: "4", label: "Godine iskustva" },
  { value: "150+", label: "Realizovanih kampanja" },
  { value: "30M+", label: "Ostvarenih impresija" },
];

export default function Stats() {
  return (
    <section className="border-y border-black/5 bg-[#14150f] py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="text-4xl font-bold text-brand sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-white/60">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
