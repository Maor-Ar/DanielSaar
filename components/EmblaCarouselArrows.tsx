"use client";

import type { EmblaCarouselType } from "embla-carousel";
import { CarouselChevronIcon } from "@/components/icons/CarouselChevronIcon";

type Variant = "default" | "overlay";

const variantClass: Record<Variant, string> = {
  default:
    "border-white bg-white/95 text-slate-900 shadow-[0_4px_18px_rgba(15,23,42,0.16)] backdrop-blur-sm hover:border-[#e98c00]/40 hover:bg-white hover:text-[#e98c00] hover:shadow-[0_8px_24px_rgba(233,140,0,0.22)]",
  overlay:
    "border-white bg-white/98 text-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.28)] backdrop-blur-md hover:border-white hover:bg-white hover:text-[#e98c00] hover:shadow-[0_6px_24px_rgba(0,0,0,0.32)]",
};

const btnBase =
  "absolute top-1/2 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e98c00] active:scale-95 lg:flex";

type Props = {
  emblaApi: EmblaCarouselType | undefined;
  variant?: Variant;
  className?: string;
};

/** RTL carousels: right = previous, left = next (matches keyboard + swipe). */
export function EmblaCarouselArrows({ emblaApi, variant = "default", className = "" }: Props) {
  const style = variantClass[variant];

  return (
    <>
      <button
        type="button"
        className={`${btnBase} right-3 xl:right-4 ${style} ${className}`.trim()}
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="שקופית קודמת"
      >
        <CarouselChevronIcon direction="right" className="size-[22px]" />
      </button>
      <button
        type="button"
        className={`${btnBase} left-3 xl:left-4 ${style} ${className}`.trim()}
        onClick={() => emblaApi?.scrollNext()}
        aria-label="שקופית הבאה"
      >
        <CarouselChevronIcon direction="left" className="size-[22px]" />
      </button>
    </>
  );
}
