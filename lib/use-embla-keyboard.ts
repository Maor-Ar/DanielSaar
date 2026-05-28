"use client";

import type { EmblaCarouselType } from "embla-carousel";
import { useEffect } from "react";

/** RTL-friendly arrow keys for carousels (ArrowLeft = next, ArrowRight = prev). */
export function useEmblaKeyboard(emblaApi: EmblaCarouselType | undefined, enabled = true) {
  useEffect(() => {
    if (!emblaApi || !enabled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        emblaApi.scrollNext();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        emblaApi.scrollPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [emblaApi, enabled]);
}
