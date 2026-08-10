"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const attachObserver = () => {
      if (cancelled) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer?.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
      );
      observer.observe(el);
    };

    // If the URL already has a hash, the browser may still be auto-scrolling
    // to that anchor after hydration, which would falsely trigger reveals
    // sitting between the top of the page and the anchor. Wait for scroll
    // position to settle before watching for real visibility.
    if (window.location.hash) {
      let lastY = window.scrollY;
      let stableFrames = 0;
      const waitForSettle = () => {
        if (cancelled) return;
        const y = window.scrollY;
        if (y === lastY) {
          stableFrames++;
        } else {
          stableFrames = 0;
          lastY = y;
        }
        if (stableFrames > 6) {
          attachObserver();
        } else {
          requestAnimationFrame(waitForSettle);
        }
      };
      requestAnimationFrame(waitForSettle);
    } else {
      attachObserver();
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className ?? ""}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
