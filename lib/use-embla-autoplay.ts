"use client";

import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import { useEffect, useMemo } from "react";

import { shouldReduceMotion } from "@/lib/use-a11y-reduced-motion";

type Options = {
  delay?: number;
};

function shouldAutoplay() {
  return !shouldReduceMotion();
}

/** Returns an Embla Autoplay plugin; pauses when reduced motion is on. */
export function useEmblaAutoplayPlugin({ delay = 4500 }: Options = {}) {
  const plugin = useMemo(
    () =>
      Autoplay({
        delay,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [delay],
  );

  return plugin;
}

/** Call after emblaApi is ready to sync play state. */
export function useEmblaAutoplaySync(emblaApi: EmblaCarouselType | undefined) {
  useEffect(() => {
    if (!emblaApi) return;
    const sync = () => {
      const autoplay = emblaApi.plugins()?.autoplay;
      if (!autoplay) return;
      if (shouldAutoplay()) autoplay.play();
      else autoplay.stop();
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-reduce-motion"] });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", sync);
    };
  }, [emblaApi]);
}
