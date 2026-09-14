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
          Ne pravimo samo sadržaj. Pravimo prisustvo.
        </blockquote>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/60">
          Mi smo ženski, mlad i kreativan tim koji digitalni marketing ne
          radi po šablonu. Svakom brendu pristupamo kao da je naš,
          upoznajemo ga, istražujemo tržište, pronalazimo njegovu priču i
          pretvaramo je u sadržaj koji ljudi žele da gledaju, prate i,
          najvažnije, na koji žele da reaguju.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black/60">
          Centrala nam je u Čačku, a već godinama poslujemo i u Beogradu.
          Granice grada za nas nisu granice poslovanja — radimo sa klijentima
          širom Srbije, po dogovoru.
        </p>
      </Reveal>
    </section>
  );
}
