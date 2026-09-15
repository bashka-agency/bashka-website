"use client";

import { useEffect, useState } from "react";
import BookingButton from "@/app/components/booking/BookingButton";
import VideoCallIcon from "@/app/components/icons/VideoCallIcon";

export default function StickyBookingBar() {
  const [pastHero, setPastHero] = useState(false);
  const [nearBookingCta, setNearBookingCta] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const bookingCta = document.getElementById("zakazite-poziv");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "0px" },
    );
    heroObserver.observe(hero);

    let ctaObserver: IntersectionObserver | null = null;
    if (bookingCta) {
      ctaObserver = new IntersectionObserver(
        ([entry]) => setNearBookingCta(entry.isIntersecting),
        { rootMargin: "0px" },
      );
      ctaObserver.observe(bookingCta);
    }

    return () => {
      heroObserver.disconnect();
      ctaObserver?.disconnect();
    };
  }, []);

  const visible = pastHero && !nearBookingCta;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <BookingButton className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#14150f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10">
        Zakaži poziv
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[#14150f] transition-transform duration-300 group-hover:scale-110">
          <VideoCallIcon className="h-3 w-3" />
        </span>
      </BookingButton>
    </div>
  );
}
