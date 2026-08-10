"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  className?: string;
  duration?: number;
};

export default function Counter({ value, className, duration = 1500 }: Props) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const [display, setDisplay] = useState(1);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const attachObserver = () => {
      if (cancelled) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;

          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.max(1, Math.round(eased * target)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer?.disconnect();
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
    };

    // If the URL already has a hash, the browser may still be auto-scrolling
    // to that anchor after hydration. Without this, a counter sitting between
    // the top of the page and the anchor briefly counts as "in view" during
    // that transient scroll, silently finishes its animation off-screen, and
    // then never animates again when actually scrolled to. Wait for scroll
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
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {target === 0 ? suffix : display}
      {target === 0 ? "" : suffix}
    </span>
  );
}
