"use client";

import { useBooking } from "@/app/components/booking/BookingProvider";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function BookingButton({ className, children }: Props) {
  const { open } = useBooking();

  return (
    <button type="button" onClick={open} className={`cursor-pointer ${className ?? ""}`}>
      {children}
    </button>
  );
}
