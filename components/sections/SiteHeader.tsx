"use client";

import { useEffect, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

/** Pixels scrolled before the header fades in. */
const SCROLL_THRESHOLD = 64;

export function SiteHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-[1920px] items-center justify-start px-4 py-4 sm:px-10 lg:px-20 lg:py-[30px]">
        <div className="relative h-[34px] w-[138px] shrink-0">
          <ResponsiveFigmaPicture
            asset={figma.logo}
            alt="דניאל סער — לוגו"
            width={138}
            height={34}
            priority
            className="block h-full w-full [&_img]:object-contain"
          />
        </div>
      </div>
    </header>
  );
}
