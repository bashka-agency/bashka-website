import Reveal from "@/app/components/Reveal";

export default function About() {
  return (
    <section id="o-nama" className="bg-brand/10 py-24">
      <Reveal className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-6xl text-brand-dark">&ldquo;</span>
        <blockquote className="text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
          Ne verujemo u marketing po šablonu. Svaki brend ima svoju priču — naš
          posao je da je ispričamo tako da je ljudi zapamte, a rezultati se
          vide u brojkama.
        </blockquote>
        <div className="mt-8 flex flex-col items-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-lg font-bold text-[#14150f]">
            KK
          </span>
          <span className="mt-3 font-semibold">Ksenija Krstić</span>
          <span className="text-sm text-black/50">Osnivačica, bashka digital</span>
        </div>
      </Reveal>
    </section>
  );
}
