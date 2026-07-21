import Reveal from "@/app/components/Reveal";

const TEAM = [
  { name: "Ksenija Krstić", role: "Osnivačica i kreativni direktor" },
  { name: "Marko Jovanović", role: "Account Manager" },
  { name: "Ana Petrović", role: "Social Media Manager" },
  { name: "Nikola Stanković", role: "Video Producer" },
  { name: "Milica Ilić", role: "Art Director" },
  { name: "Stefan Nikolić", role: "Performance Marketing" },
  { name: "Jovana Marković", role: "Web Developer" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Team() {
  return (
    <section id="tim" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[#5c6b1f]">
          Tim
        </h2>
        <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Ljudi koji stoje iza rezultata.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={(i % 4) * 80}>
            <div className="group flex flex-col items-center text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/20 text-xl font-bold text-[#5c6b1f] transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/30">
                {initials(member.name)}
              </span>
              <span className="mt-4 font-semibold">{member.name}</span>
              <span className="text-sm text-black/50">{member.role}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
