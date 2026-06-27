"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { EmblaCarouselArrows } from "@/components/EmblaCarouselArrows";
import { useEmblaKeyboard } from "@/lib/use-embla-keyboard";

const ROGA_EVENTS_URL = "https://www.rogaevents.com/";

/**
 * Frames are exported at their native Figma size (742×554). The slide keeps that
 * exact aspect ratio so the baked-in text never reflows or misaligns — it only
 * scales down on smaller viewports, identical look at every width.
 */
const slides = [
  { src: figma.businessSlideBefore, alt: "לפני שדרוג התוכן — עומס מלל וחוסר מיקוד במסר באתר Roga Events", link: null },
  {
    src: figma.businessSlideAfter,
    alt: "אחרי שדרוג התוכן — תוכן נקי, קריא וממוקד באתר Roga Events",
    // Transparent hit-area over the baked-in "לצפייה באתר המלא" button (left 23px, top 505px, 205×32px within 742×554).
    link: { left: "3.099%", top: "91.155%", width: "27.628%", height: "5.776%" },
  },
] as const;

export function BeforeAfterCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", direction: "rtl" });
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

  return (
    <div
      className="relative mx-auto w-full max-w-[370px] content:mx-0 content:max-w-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="דוגמאות לפני ואחרי שדרוג תוכן"
      tabIndex={0}
    >
      <div className="relative aspect-[742/554] w-full overflow-hidden rounded-[20px]">
        <EmblaCarouselArrows emblaApi={emblaApi} variant="overlay" className="!text-slate-900 hover:!text-slate-900 [&_svg]:drop-shadow-none" />
        <div className="relative h-full w-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, i) => (
              <div className="min-w-0 shrink-0 grow-0 basis-full" key={slide.src}>
                <div className="relative h-full w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1434px) 85vw, 795px"
                    priority={i === 0}
                  />
                  {slide.link ? (
                    <a
                      href={ROGA_EVENTS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="לצפייה באתר המלא של Roga Events"
                      className="absolute z-10 rounded-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000343]"
                      style={{ left: slide.link.left, top: slide.link.top, width: slide.link.width, height: slide.link.height }}
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-2.5 left-1/2 z-20 flex h-3 w-14 -translate-x-1/2 items-center justify-center gap-1.5 content:bottom-4 content:h-5 content:w-20"
          role="tablist"
          aria-label="מעבר בין לפני ואחרי"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected === i}
              className={`rounded-full transition-all duration-300 ${
                selected === i ? "size-2.5 bg-slate-900 content:size-3" : "size-2 bg-slate-900/30 content:size-2.5"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={i === 0 ? "תצוגת לפני" : "תצוגת אחרי"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
