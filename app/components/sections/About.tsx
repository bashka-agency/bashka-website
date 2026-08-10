import Reveal from "@/app/components/Reveal";
import OutlineWord from "@/app/components/OutlineWord";

export default function About() {
  return (
    <section
      id="o-nama"
      className="relative overflow-hidden bg-brand/10 pt-16 pb-24 sm:pt-20"
    >
      <div className="pointer-events-none flex justify-center px-4">
        <OutlineWord className="text-[2.75rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]">
          o nama
        </OutlineWord>
      </div>

      <Reveal className="relative mx-auto mt-8 max-w-4xl px-6 text-center sm:mt-12">
        <span className="text-6xl text-brand-dark">&ldquo;</span>
        <blockquote className="text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
          Ne verujemo u marketing po šablonu. Svaki brend ima svoju priču — naš
          posao je da je ispričamo tako da je ljudi zapamte, a rezultati se
          vide u brojkama.
        </blockquote>
      </Reveal>
    </section>
  );
}
