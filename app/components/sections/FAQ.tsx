"use client";

import { useState } from "react";
import Reveal from "@/app/components/Reveal";
import SectionTitle from "@/app/components/SectionTitle";

const FAQS = [
  {
    question: "Da li radite samo sa velikim brendovima?",
    answer:
      "Ne. Radimo sa kompanijama i proizvodnim/uslužnim brendovima, ali i sa ličnim brendovima, influenserima i kreatorima sadržaja — od strategije i sadržaja do svakodnevnog vođenja profila.",
  },
  {
    question: "Radite li samo u Čačku i Beogradu?",
    answer:
      "Naša centrala je u Čačku, a već godinama poslujemo i u Beogradu. Granice grada za nas nisu granice poslovanja — radimo sa klijentima širom Srbije, po dogovoru.",
  },
  {
    question: "Šta je uključeno u saradnju sa Bashkom?",
    answer:
      "Zavisi od cilja koji zajedno postavimo — od analize tržišta i strategije, preko vođenja društvenih mreža i produkcije sadržaja, do plaćenih kampanja i influencer marketinga. Sve usluge možete videti u sekciji Usluge.",
  },
  {
    question: "Kako izgleda proces rada?",
    answer:
      "Radimo u četiri koraka: otkrivanje, strategija, kreacija i produkcija, i lansiranje sa optimizacijom. Pre nego što bilo šta objavimo, znamo kome se obraćamo i gde želimo da stignemo.",
  },
  {
    question: "Pravite li i sajtove i aplikacije?",
    answer:
      "Da. Pravimo sajtove i web aplikacije, i to je baš jedan od razloga zašto nas dosta klijenata bira — nudimo ceo paket na jednom mestu, od strategije i sadržaja do tehničkog rešenja.",
  },
  {
    question: "Da li je uvodni poziv besplatan?",
    answer:
      "Da. Zakažite besplatan poziv preko dugmeta „Zakaži poziv” — na njemu upoznajemo vaš brend i vidimo da li i kako možemo da pomognemo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="pitanja" className="mx-auto max-w-3xl px-6 py-24">
      <SectionTitle word="pitanja">Najčešća pitanja.</SectionTitle>

      <div className="mt-12 border-t border-black/10">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={faq.question} delay={i * 60} className="border-b border-black/10">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-semibold">{faq.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/20 text-sm font-bold text-brand-dark transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-black/60">{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
