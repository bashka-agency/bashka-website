import BookingButton from "@/app/components/booking/BookingButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6">
        <span
          className="animate-fade-up rounded-full bg-brand/20 px-4 py-1.5 text-sm font-medium text-[#5c6b1f]"
          style={{ animationDelay: "0ms" }}
        >
          Kreativna marketing agencija
        </span>

        <h1
          className="animate-fade-up mt-6 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          Pravimo brendove koji se{" "}
          <span className="relative inline-block whitespace-nowrap text-brand-dark">
            pamte i prodaju
            <svg
              aria-hidden
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-brand"
            >
              <path
                d="M0,8 Q25,2 50,7 T100,6"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                pathLength="1"
                className="animate-draw-underline"
              />
            </svg>
          </span>
          .
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-black/60"
          style={{ animationDelay: "240ms" }}
        >
          Bashka digital je tim za društvene mreže, produkciju, kampanje i
          web — sve na jednom mestu. Od strategije do izvršenja, gradimo
          rezultate koje možete da merite.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <BookingButton className="rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-[#14150f] shadow-lg shadow-brand/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40">
            Zakaži poziv
          </BookingButton>
          <a
            href="#portfolio"
            className="rounded-full border border-black/10 px-7 py-3.5 text-base font-semibold text-black/80 transition-all hover:-translate-y-0.5 hover:border-black/30 hover:bg-black/[.03]"
          >
            Pogledaj portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
