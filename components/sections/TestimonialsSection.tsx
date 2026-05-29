"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { useEmblaAutoplayPlugin, useEmblaAutoplaySync } from "@/lib/use-embla-autoplay";
import { useEmblaKeyboard } from "@/lib/use-embla-keyboard";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initial: string;
};

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex min-h-[220px] w-full max-w-[310px] flex-col items-end gap-4 rounded-lg border border-[#e98c00] bg-white p-4 shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0px_12px_28px_rgba(233,140,0,0.2)]">
      <div className="size-[45px] shrink-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={figma.quote.desktop} />
          <img src={figma.quote.mobile} alt="" className="size-full object-contain" />
        </picture>
      </div>
      <blockquote className="text-right text-lg text-slate-900 lg:text-xl">
        <p>{t.quote}</p>
      </blockquote>
      <footer className="mt-auto flex w-full items-start justify-end gap-4">
        <div className="text-right">
          <p className="font-semibold text-slate-900">{t.name}</p>
          <p className="text-xs text-slate-900">{t.role}</p>
        </div>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#e98c00] text-xl font-bold text-[#e98c00]" aria-hidden>
          {t.initial}
        </div>
      </footer>
    </article>
  );
}

function MobileCarousel({ items }: { items: Testimonial[] }) {
  const autoplay = useEmblaAutoplayPlugin({ delay: 4500 });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true, direction: "rtl", autoHeight: true },
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
    const updateHeight = () => emblaApi.reInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("select", updateHeight);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("select", updateHeight);
    };
  }, [emblaApi, onSelect]);

  useEmblaKeyboard(emblaApi);

  return (
    <div
      className="w-full lg:hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="חוות דעת"
      tabIndex={0}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((t) => (
            <div className="min-w-0 shrink-0 grow-0 basis-full px-2" key={t.id}>
              <div className="flex items-stretch justify-center">
                <QuoteCard t={t} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`h-2.5 rounded-full transition-all duration-300 ${selected === i ? "w-6 bg-[#e98c00]" : "w-2.5 bg-slate-300"}`}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`מעבר לחוות דעת ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-white px-4 py-16 sm:px-8 lg:py-[140px]">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-10 lg:gap-16">
        <h2 id="testimonials-heading" className="text-center text-3xl font-semibold text-slate-900 lg:text-[40px]">
          חוות דעת
        </h2>
        <MobileCarousel items={items} />
        <div className="hidden flex-wrap justify-center gap-8 lg:flex lg:justify-center lg:gap-10">
          {items.map((t) => (
            <QuoteCard key={t.id} t={t} />
          ))}
        </div>
        <a
          href="https://www.google.com/maps"
          className="inline-flex items-center justify-center gap-2 text-xl font-semibold text-[#e98c00] transition-opacity hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={figma.linkOut.desktop} />
            <img src={figma.linkOut.mobile} alt="" width={24} height={24} className="size-6" />
          </picture>
          צפו בכל הביקורות בגוגל
        </a>
      </div>
    </section>
  );
}
