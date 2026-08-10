import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";

const TEAM = [
  { name: "Ksenija Krstić", role: "CEO", photo: "ksenija-krstic.JPG" },
  { name: "Ana Marija", role: "Community Manager", photo: "ana-marija.JPG" },
  { name: "Ivana Stanković", role: "Videograf i koordinator", photo: "ivana-stankovic.JPG" },
  { name: "Kristina Risimović", role: "Social Media Manager", photo: "kristina-risimovic.JPG" },
  { name: "Lana", role: "Social Media Manager", photo: "lana.jpg" },
  { name: "Marija Cvetinović", role: "Social Media Manager", photo: "marija-cvetinovic.jpg" },
  { name: "Tamara Parežanović", role: "Social Media Manager", photo: "tamara-parezanovic.JPG" },
  { name: "Jana Marković", role: "IT Project Manager", photo: "jana-markovic.jpeg" },
];

export default function Team() {
  return (
    <section id="tim" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle word="tim">Ljudi koji stoje iza rezultata.</SectionTitle>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={(i % 4) * 80}>
            <div className="group flex flex-col items-center text-center">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-brand/20 transition-transform duration-300 group-hover:scale-110 sm:h-36 sm:w-36">
                <Image
                  src={`/images/team/${member.photo}`}
                  alt={member.name}
                  fill
                  sizes="(min-width: 640px) 144px, 128px"
                  className="object-cover"
                />
              </div>
              <span className="mt-4 font-semibold">{member.name}</span>
              <span className="text-sm text-black/50">{member.role}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
