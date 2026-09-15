import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";
import ClientLogos from "@/app/components/ClientLogos";

export default function Clients() {
  return (
    <section id="brendovi" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle word="brendovi">
        Brendovi do kojih je stigao naš uticaj.
      </SectionTitle>

      <Reveal delay={100} className="mx-auto mt-4 max-w-2xl text-center">
        <p className="text-sm text-black/50">
          Kroz influencer saradnju Ksenije Krstić (
          <a
            href="https://www.instagram.com/xendzoo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-dark hover:underline"
          >
            @xendzoo
          </a>
          ) — pogledajte i naš agencijski rad u{" "}
          <a href="#portfolio" className="font-semibold text-brand-dark hover:underline">
            portfoliju
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-12">
        <ClientLogos />
      </div>
    </section>
  );
}
