"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";

type Member = {
  name: string;
  role: string;
  photo?: string;
  bio?: string[];
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

const TEAM: Member[] = [
  {
    name: "Ksenija Krstić",
    role: "CEO",
    photo: "ksenija-krstic.JPG",
    bio: [
      "Ja sam Ksenija Krstić, osnivačica i generalna direktorka agencije Bashka. Diplomirala sam žurnalistiku na Fakultetu političkih nauka u Beogradu, a u digitalnom marketingu sam od 2019. godine.",
      "Kroz dugogodišnji rad ostvarila sam saradnju sa preko 100 klijenata i realizovala više od 300 kampanja za domaće i internacionalne brendove poput NIVEA, Eucerin, Reebok, DM drogerije i Maybelline, uz zajednicu od preko 200.000 pratilaca na društvenim mrežama koje smo zajedno izgradili. Moja ekspertiza obuhvata razvoj kreativnih strategija, produkciju sadržaja, influenser marketing i kompletno upravljanje društvenim mrežama, a znanje prenosim i kao predavač digitalnog marketinga u Obrazovnom centru Sveti Sava.",
      "Pored agencije, osnivačica sam fitnes aplikacije XFE, koja je tokom pandemije doživela veliki rast i globalnu popularnost zahvaljujući besplatnim treninzima dostupnim širokoj zajednici. Aplikacija trenutno prolazi kroz redizajn i uskoro izlazi na tržište pod novim imenom Nutrain App, sa unapređenim konceptom i novim funkcionalnostima.",
      "Bila sam predavač i učesnica na brojnim panelima i konferencijama iz oblasti marketinga i preduzetništva — od EKOF panela i predavanja o marketingu u okviru Saveza za sport, do učešća u organizaciji BelgradeFesta i panela Udruženja žena u svojstvu mlade preduzetnice. Gostovala sam u brojnim podkastima i organizovala Lift the Game, događaj posvećen edukaciji i osnaživanju profesionalaca iz beauty industrije.",
    ],
  },
  {
    name: "Ana-Marija Gnjidić",
    role: "Community Manager",
    photo: "ana-marija.JPG",
    bio: [
      "Moje ime je Ana-Marija Gnjidić. Završila sam Marketing na Ekonomskom fakultetu u Beogradu, gde trenutno privodim kraju i master studije. Oduvek su me privlačili kreativnost, komunikacija i sve ono što dobru ideju pretvara u priču koja se pamti.",
      "Van posla i fakulteta, najviše volim da putujem, čitam, upoznajem nove ljude i kulture što pomaže u razvoju moje kreativnosti.",
      "BASHKA za mene nije samo posao – to je mesto na kojem se osećam kao deo jedne velike porodice. Mesto gde zajedno učimo, rastemo, delimo ideje i podržavamo jedni druge. Najlepši deo ove priče je što ništa ne stvaramo sami već zajedno gradimo, učimo i slavimo pobede.",
    ],
  },
  {
    name: "Ivana Stanković",
    role: "Fotograf i videograf",
    photo: "ivana-stankovic.JPG",
    bio: [
      "Ja sam Ivana Stanković, fotograf i videograf u agenciji Baška. Rad u kreativnoj industriji za mene predstavlja veliko iskustvo, kroz koje sam imala priliku da upoznam veliki broj različitih klijenata, ljudi i zanimljivih projekata.",
      "Ono što najviše volim u svom poslu jeste njegova kreativnost i raznolikost. Svaki dan donosi nešto novo – novi projekat, novu ideju, nove ljude i nove izazove. Upravo zato ovaj posao za mene nikada nije statičan ni monoton. Dinamično okruženje i mogućnost da kroz fotografiju i video zabeležim ideje, emocije i trenutke ono su što me svakodnevno inspiriše.",
      "Završila sam Akademiju poslovnih strukovnih studija u Beogradu, a kroz dosadašnji rad nastavila sam da razvijam svoje znanje, kreativnost i iskustvo u svetu fotografije i videografije.",
    ],
  },
  {
    name: "Kristina Risimović",
    role: "Social Media Manager",
    photo: "kristina-risimovic.JPG",
    bio: [
      "Ja sam Kristina Risimović – po struci sam diplomirani inženjer Organizacionih nauka. Na Fakultetu Organizacionih Nauka diplomirala sam 2024. godine na smeru Informacioni sistemi i tehnologije.",
      "U agenciji za digitalni marketing Bashka radim od marta 2025. godine na poziciji Social Media Manager (menadžer društvenih mreža).",
      "Kod svog posla volim što je dinamičan, raspon delatnosti naših klijenata je ogroman i zbog toga je svaka kampanja drugačija i posebna.",
      "Ono što Bashku zapravo čini posebnom su moje koleginice i naš kolektiv - krug ljudi koji su jako vredni, radni i uvek spremni da istupe kada nekome fali inspiracije ili vremena. Ta energija u kolektivu se onda samo preslikava na sve naše poslove i radne uspehe.",
    ],
  },
  {
    name: "Lana Bačić",
    role: "Account Manager",
    photo: "lana.jpg",
    bio: [
      "Ja sam Lana Bačić, studiram International Business u Amsterdamu i u BASHKA timu radim kao Account Manager. Volim kreiranje sadržaja, putovanja i upoznavanje novih ljudi i kultura.",
      "BASHKA je za mene mnogo više od posla, ona je mesto uz koje sam profesionalno odrasla, mnogo naučila i u kojem nastavljam da se razvijam, doprinosim svojim idejama i spajam kreativnost sa ljubavlju prema marketingu.",
    ],
  },
  {
    name: "Tamara Parežanović",
    role: "Grafički dizajner",
    photo: "tamara-parezanovic.JPG",
    bio: [
      "Ja sam Tamara Parežanović, grafički dizajner. Završila sam Grafički dizajn u Beogradu, a danas svoje znanje i kreativnost primenjujem kroz rad u agenciji za digitalni marketing Bashka, gde sam zadužena za kreiranje vizuelnog sadržaja.",
      "Moj posao je kreativan, dinamičan i pruža mi priliku da svakom projektu pristupim na drugačiji način. Najviše volim slobodu koju imam u procesu kreiranja sadržaja za društvene mreže, gde svoje ideje mogu da pretočim u vizuelna rešenja koja odgovaraju potrebama i karakteru svakog klijenta. Ipak, kreativnost uvek usklađujem sa zahtevima, ciljevima i vizuelnim identitetom brenda, kako bi svaki sadržaj bio prepoznatljiv i dosledan.",
      "Posebno mi prija rad u Bashki jer sam deo tima koji neguje razmenu ideja, kreativnost i međusobnu podršku. Verujem da upravo takva atmosfera doprinosi tome da svaki projekat bude kvalitetniji, a svakodnevni rad zanimljiviji.",
    ],
  },
  {
    name: "Jana Marković",
    role: "IT Project Manager",
    photo: "jana-markovic.jpeg",
    bio: [
      "Ja sam Jana Marković, IT Project Manager u agenciji Bashka. Pravim sajtove i web aplikacije i vodim projekte od prve ideje do trenutka kada krenu uživo.",
      "Volim da budem prisutna na celom tom putu — dok se ideja pretvara u plan, plan u dizajn, a dizajn u nešto što stvarno radi. Počela sam kao iOS developer, pa razumem obe strane priče: znam šta je tehnički moguće i koliko iskreno traje, ali i kako sve to spojiti da se lepo isporuči.",
      "Upravo ta kombinacija tehničkog i kreativnog je ono što mi najviše prija u radu sa Bashka timom — gde ideje brzo postaju rešenja, a rešenja stvaran proizvod.",
    ],
  },
  {
    name: "Kristina Petrović",
    role: "Account Manager",
    photo: "kristina-petrovic.jpg",
    bio: [
      "Student sam završne godine Fakulteta za Projektni i inovacioni menadžment, smer IT. U agenciji Bashka radim kao Account Manager. Vodim društvene mreže, kreiram sadržaj i komuniciram sa klijentima.",
      "Kroz rad na različitim projektima razvila sam veštine organizacije, digitalnog marketinga i upravljanja klijentima. Kreativna sam i radoznala, i najbolje funkcionišem u dinamičnom okruženju gde svaki projekat donosi nešto novo.",
    ],
  },
  {
    name: "Mina Novaković",
    role: "Account Manager",
    photo: "mina-novakovic.jpg",
  },
];

export default function Team() {
  const [selected, setSelected] = useState<Member | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section id="tim" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle word="tim">Ljudi koji stoje iza rezultata.</SectionTitle>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <Reveal key={member.name} delay={(i % 4) * 80}>
            <button
              type="button"
              disabled={!member.bio}
              onClick={() => setSelected(member)}
              className={`group flex w-full flex-col items-center text-center ${member.bio ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-brand/20 transition-transform duration-300 group-hover:scale-110 sm:h-36 sm:w-36">
                {member.photo ? (
                  <Image
                    src={`/images/team/${member.photo}`}
                    alt={member.name}
                    fill
                    sizes="(min-width: 640px) 144px, 128px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-[#5c6b1f]">
                    {initials(member.name)}
                  </span>
                )}
              </div>
              <span className="mt-4 font-semibold">{member.name}</span>
              <span className="text-sm text-black/50">{member.role}</span>
              {member.bio && (
                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand-dark transition-colors duration-300 group-hover:bg-brand/30">
                  Upoznaj me
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Zatvori"
              className="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-xl leading-none text-black/50 transition-colors hover:bg-black/5 hover:text-black"
            >
              &times;
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-brand/20">
                {selected.photo ? (
                  <Image
                    src={`/images/team/${selected.photo}`}
                    alt={selected.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-[#5c6b1f]">
                    {initials(selected.name)}
                  </span>
                )}
              </div>
              <span className="mt-4 text-lg font-semibold">{selected.name}</span>
              <span className="text-sm text-black/50">{selected.role}</span>
            </div>

            <div className="mt-6 space-y-4 text-left text-sm leading-relaxed text-black/70">
              {selected.bio?.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
