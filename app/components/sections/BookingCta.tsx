import BookingButton from "@/app/components/booking/BookingButton";
import Reveal from "@/app/components/Reveal";
import VideoCallIcon from "@/app/components/icons/VideoCallIcon";

export default function BookingCta() {
  return (
    <section className="bg-brand">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="max-w-xl text-2xl font-bold tracking-tight text-[#14150f] sm:text-3xl">
          Spremni da pokrenemo vašu sledeću kampanju?
        </p>
        <BookingButton className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#14150f] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl">
          Zakaži poziv
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[#14150f] transition-transform duration-300 group-hover:scale-110">
            <VideoCallIcon className="h-3.5 w-3.5" />
          </span>
        </BookingButton>
      </Reveal>
    </section>
  );
}
