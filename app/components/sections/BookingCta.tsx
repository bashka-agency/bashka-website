import BookingButton from "@/app/components/booking/BookingButton";
import Reveal from "@/app/components/Reveal";

export default function BookingCta() {
  return (
    <section className="bg-brand">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="max-w-xl text-2xl font-bold tracking-tight text-[#14150f] sm:text-3xl">
          Spremni da pokrenemo vašu sledeću kampanju?
        </p>
        <BookingButton className="shrink-0 rounded-full bg-[#14150f] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl">
          Zakaži poziv
        </BookingButton>
      </Reveal>
    </section>
  );
}
