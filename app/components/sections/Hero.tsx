import BookingButton from "@/app/components/booking/BookingButton";
import OutlineWord from "@/app/components/OutlineWord";
import Starburst from "@/app/components/Starburst";
import VideoCallIcon from "@/app/components/icons/VideoCallIcon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center px-4 sm:top-4">
        <OutlineWord className="animate-fade-up text-[4.75rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem]">
          bashka
        </OutlineWord>
      </div>

      <div className="animate-float pointer-events-none absolute top-20 left-1/2 h-64 w-64 -translate-x-1/2 sm:top-16 sm:h-96 sm:w-96">
        <Starburst className="animate-pulse-scale h-full w-full text-brand/60" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h1
          className="animate-fade-up mt-28 text-4xl leading-[1.05] font-bold tracking-tight text-[#14150f] sm:mt-36 sm:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          Kreativna
          <br />
          marketing agencija.
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
          className="animate-fade-up mt-8 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "360ms" }}
        >
          <BookingButton className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#14150f] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl">
            Zakaži poziv
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[#14150f] transition-transform duration-300 group-hover:scale-110">
              <VideoCallIcon className="h-3.5 w-3.5" />
            </span>
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
