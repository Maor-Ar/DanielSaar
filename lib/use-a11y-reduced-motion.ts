"use client";

import { useEffect, useState } from "react";

function readReducedMotion() {
  if (typeof window === "undefined") return false;
  const explicit = document.documentElement.dataset.reduceMotion;
  if (explicit === "true") return true;
  if (explicit === "false") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Respects the accessibility menu toggle and `prefers-reduced-motion`. */
export function useA11yReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const sync = () => setReduce(readReducedMotion());
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-reduce-motion"] });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", sync);
    };
  }, []);

  return reduce;
}

export { readReducedMotion as shouldReduceMotion };
