"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { useEmblaAutoplayPlugin, useEmblaAutoplaySync } from "@/lib/use-embla-autoplay";
import { useEmblaKeyboard } from "@/lib/use-embla-keyboard";

const slides = [
  { src: figma.bookCover, alt: "ספר פתוח עם תמונות וזיכרונות משפחתיים" },
  { src: figma.bookSlidePages, alt: "דפי ספר עם תיעוד משפחתי" },
  { src: figma.bookSlideBack, alt: "כריכת ספר אחורית" },
] as const;

function SlideImage({ src, alt, priority }: { src: string | { mobile: string; desktop: string }; alt: string; priority?: boolean }) {
  if (typeof src === "string") {
    return (
      <Image src={src} alt={alt} fill className="object-contain object-center" sizes="(max-width: 1023px) 85vw, 520px" priority={priority} />
    );
  }
  return (
    <>
      <Image src={src.mobile} alt={alt} fill className="object-contain object-center lg:hidden" sizes="85vw" priority={priority} />
      <Image src={src.desktop} alt={alt} fill className="hidden object-contain object-center lg:block" sizes="520px" priority={priority} />
    </>
  );
}

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
      <div className="relative flex h-[277px] flex-col items-center justify-end overflow-hidden rounded-[20px] pb-2.5 lg:h-[595px] lg:pb-8">
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] bg-[#2e2219] bg-[linear-gradient(165deg,#4a3829_0%,#2e2219_42%,#1f1812_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] opacity-[0.22] bg-[repeating-linear-gradient(92deg,transparent_0,transparent_3px,rgba(0,0,0,0.18)_3px,rgba(0,0,0,0.18)_5px)]"
          aria-hidden
        />

        <div className="relative z-10 h-[calc(100%-24px)] w-full min-h-0 flex-1 lg:h-[543px]" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, i) => (
              <div className="min-w-0 shrink-0 grow-0 basis-full" key={typeof slide.src === "string" ? slide.src : slide.src.desktop}>
                <div className="relative flex h-full w-full items-center justify-center px-3 pt-3 lg:px-10 lg:pt-8">
                  <div className="relative h-[88%] w-[72%] max-w-[320px] lg:h-[92%] lg:w-[58%] lg:max-w-[430px]">
                    <SlideImage src={slide.src} alt={slide.alt} priority={i === 0} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mb-1 flex h-3 w-14 shrink-0 items-center justify-center gap-1.5 lg:mb-0 lg:h-5 lg:w-20" role="tablist" aria-label="מעבר בין תצוגות הספר">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected === i}
              className={`rounded-full transition-all duration-300 ${
                selected === i ? "size-2.5 bg-white lg:size-3" : "size-2 bg-white/40 lg:size-2.5"
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
