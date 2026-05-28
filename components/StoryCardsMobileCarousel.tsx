"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children, useCallback, useEffect, useState } from "react";
import { useEmblaAutoplayPlugin, useEmblaAutoplaySync } from "@/lib/use-embla-autoplay";
import { useEmblaKeyboard } from "@/lib/use-embla-keyboard";

export function StoryCardsMobileCarousel({ children }: { children: React.ReactNode }) {
  const autoplay = useEmblaAutoplayPlugin({ delay: 4000 });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true, direction: "rtl", containScroll: "trimSnaps" },
    [autoplay],
  );
  useEmblaAutoplaySync(emblaApi);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEmblaKeyboard(emblaApi);

  const slides = Children.toArray(children);

  return (
    <div
      className="w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="בחירת סוג סיפור"
      tabIndex={0}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, i) => (
            <div className="min-w-0 shrink-0 grow-0 basis-[88%] px-1 sm:basis-[85%]" key={i}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="בחירת כרטיס סיפור">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={selected === i}
            className={`h-2.5 rounded-full transition-all duration-300 ${selected === i ? "w-6 bg-[#e98c00]" : "w-2.5 bg-slate-300"}`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`מעבר לכרטיס ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
