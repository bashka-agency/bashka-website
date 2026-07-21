"use client";

import { useEffect } from "react";
import { useBooking } from "@/app/components/booking/BookingProvider";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;

export default function BookingModal() {
  const { isOpen, close } = useBooking();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Zakazivanje poziva"
      onClick={close}
    >
      <div
        className="relative flex h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
          <h2 className="text-lg font-semibold">Zakažite besplatan poziv</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Zatvori"
            className="flex h-9 w-9 items-center justify-center rounded-full text-xl leading-none text-black/50 transition-colors hover:bg-black/5 hover:text-black"
          >
            &times;
          </button>
        </div>
        {CAL_LINK ? (
          <iframe
            key={CAL_LINK}
            src={`https://cal.com/${CAL_LINK}?embed=true&theme=light`}
            title="Cal.com kalendar za zakazivanje"
            className="h-full w-full flex-1 border-0"
          />
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-2xl">
              📅
            </span>
            <p className="font-semibold">Kalendar još nije povezan</p>
            <p className="max-w-sm text-sm text-black/50">
              Postavite <code className="rounded bg-black/5 px-1.5 py-0.5">NEXT_PUBLIC_CAL_LINK</code>{" "}
              na vaš Cal.com username/event (npr. <code className="rounded bg-black/5 px-1.5 py-0.5">bashka-digital/poziv</code>)
              da bi se kalendar prikazao ovde.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
