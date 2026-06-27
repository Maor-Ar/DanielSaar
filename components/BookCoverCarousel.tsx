"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { EmblaCarouselArrows } from "@/components/EmblaCarouselArrows";
import { useEmblaKeyboard } from "@/lib/use-embla-keyboard";

const slides = [
  { src: figma.bookCover, alt: "ספר פתוח עם תמונות וזיכרונות משפחתיים" },
  { src: figma.bookSlidePages, alt: "דפי ספר עם תיעוד משפחתי" },
  { src: figma.bookSlideBack, alt: "כריכת ספר אחורית" },
] as const;

function SlideImage({ src, alt, priority }: { src: string | { mobile: string; desktop: string }; alt: string; priority?: boolean }) {
  if (typeof src === "string") {
    return (
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width: 1434px) 85vw, 795px" priority={priority} />
    );
  }
  return (
    <>
      <Image src={src.mobile} alt={alt} fill className="object-cover object-center content:hidden" sizes="85vw" priority={priority} />
      <Image src={src.desktop} alt={alt} fill className="hidden object-cover object-center content:block" sizes="795px" priority={priority} />
    </>
  );
}

export function BookCoverCarousel() {
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
      aria-label="דוגמאות לספרים"
      tabIndex={0}
    >
      <div className="relative aspect-[370/282] w-full min-h-[220px] overflow-hidden rounded-[20px] sm:min-h-[260px] content:aspect-[795/591] content:min-h-0">
        <EmblaCarouselArrows emblaApi={emblaApi} variant="overlay" />
        <div className="relative h-full w-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, i) => (
              <div className="min-w-0 shrink-0 grow-0 basis-full" key={typeof slide.src === "string" ? slide.src : slide.src.desktop}>
                <div className="relative h-full w-full">
                  <SlideImage src={slide.src} alt={slide.alt} priority={i === 0} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-2.5 left-1/2 z-10 flex h-3 w-14 -translate-x-1/2 items-center justify-center gap-1.5 content:bottom-8 content:h-5 content:w-20" role="tablist" aria-label="מעבר בין תצוגות הספר">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected === i}
              className={`rounded-full transition-all duration-300 ${
                selected === i ? "size-2.5 bg-white content:size-3" : "size-2 bg-white/40 content:size-2.5"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`תצוגת ספר ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
