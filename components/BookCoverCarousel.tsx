"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { useEmblaAutoplayPlugin, useEmblaAutoplaySync } from "@/lib/use-embla-autoplay";
import { useEmblaKeyboard } from "@/lib/use-embla-keyboard";

const slides = [
  { src: figma.bookCover.desktop, alt: "ספר פתוח עם תמונות וזיכרונות משפחתיים" },
  { src: figma.bookSlidePages, alt: "דפי ספר עם תיעוד משפחתי" },
  { src: figma.bookSlideBack, alt: "כריכת ספר אחורית" },
] as const;

export function BookCoverCarousel() {
  const autoplay = useEmblaAutoplayPlugin({ delay: 5000 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", direction: "rtl" }, [autoplay]);
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

  return (
    <div
      className="relative w-full max-w-[744px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="דוגמאות לספרים"
      tabIndex={0}
    >
      <div className="overflow-hidden rounded-[20px] shadow-inner" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div className="min-w-0 shrink-0 grow-0 basis-full" key={slide.src}>
              <div className="relative aspect-[744/543] w-full overflow-hidden rounded-[20px] bg-[#2a2118]">
                <Image src={slide.src} alt={slide.alt} fill className="object-cover" sizes="744px" priority={i === 0} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="מעבר בין תצוגות הספר">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={selected === i}
            className={`h-2.5 rounded-full transition-all duration-300 ${selected === i ? "w-6 bg-[#e98c00]" : "w-2.5 bg-slate-300"}`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`תצוגת ספר ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
