import SectionTitle from "@/app/components/SectionTitle";
import ClientLogos from "@/app/components/ClientLogos";

export default function Clients() {
  return (
    <section id="brendovi" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle word="brendovi">
        Neki od brendova sa kojima smo sarađivali.
      </SectionTitle>

      <div className="mt-12">
        <ClientLogos />
      </div>
    </section>
  );
}
